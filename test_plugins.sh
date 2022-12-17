#!/usr/bin/env bash
TestPlugin() {
    # Usaage TestPlugin <rpc method> <path to request json>
    METHOD=$1
    TEST_FILE=$2
    case $METHOD in

    InitPlugin)
        TEST_FILE=${TEST_FILE:-"samplePayloads/InitPluginRequest.json"}
        echo "// Check that the plugin loaded OK. Returns the catalogue entries describing what the plugin provides"
        echo "rpc InitPlugin(InitPluginRequest) returns (InitPluginResponse);"
        ;;
    UpdateCatalogue)
        TEST_FILE=${TEST_FILE:-"samplePayloads/UpdateCatalogue.json"}
        echo "// Updated catalogue. This will be sent when the core catalogue has been updated (probably by a plugin loading)"
        echo "rpc UpdateCatalogue(Catalogue) returns (google.protobuf.Empty);"
        ;;

    CompareContents)
        TEST_FILE=${TEST_FILE:-"samplePayloads/CompareContentsRequest.json"}
        echo "// Request to perform a comparison of some contents (matching request)"
        echo "rpc CompareContents(CompareContentsRequest) returns (CompareContentsResponse);"
        ;;
    ConfigureInteraction)
        TEST_FILE=${TEST_FILE:-"samplePayloads/ConfigureInteractionRequest_MattRequest.json"}
        echo " // Request to configure/setup the interaction for later verification. Data returned will be persisted in the pact file."
        echo "rpc ConfigureInteraction(ConfigureInteractionRequest) returns (ConfigureInteractionResponse);"
        ;;
    GenerateContent)
        TEST_FILE=${TEST_FILE:-"samplePayloads/GenerateContentRequest.json"}
        echo "// Request to generate the content using any defined generators"
        echo "rpc GenerateContent(GenerateContentRequest) returns (GenerateContentResponse);"
        ;;

    StartMockServer)
        TEST_FILE=${TEST_FILE:-"samplePayloads/MockServerRequest.json"}
        echo " // Start a mock server"
        echo "rpc StartMockServer(StartMockServerRequest) returns (StartMockServerResponse);"
        ;;

    ShutdownMockServer)
        TEST_FILE=${TEST_FILE:-"samplePayloads/ShutdownMockServerRequest.json"}
        echo "// Shutdown a running mock server"
        echo " // TODO: Replace the message types with MockServerRequest and MockServerResults in the next major version"
        echo "rpc ShutdownMockServer(ShutdownMockServerRequest) returns (ShutdownMockServerResponse);"

        ;;

    GetMockServerResults)
        TEST_FILE=${TEST_FILE:-"samplePayloads/GenerateContentRequest.json"}
        echo "// Get the matching results from a running mock server"
        echo "rpc GetMockServerResults(MockServerRequest) returns (MockServerResults);"

        ;;
    PrepareInteractionForVerification)
        TEST_FILE=${TEST_FILE:-"samplePayloads/VerificationPreparationRequest.json"}
        echo "// Prepare an interaction for verification. This should return any data required to construct any request"
        echo "// so that it can be amended before the verification is run"
        echo "rpc PrepareInteractionForVerification(VerificationPreparationRequest) returns (VerificationPreparationResponse);"
        ;;

    VerifyInteraction)
        TEST_FILE=${TEST_FILE:-"samplePayloads/VerifyInteractionRequest.json"}
        echo "// Execute the verification for the interaction."
        echo "rpc VerifyInteraction(VerifyInteractionRequest) returns (VerifyInteractionResponse);"

        ;;

    *)
        echo 'must provide a method'
        echo '_____________________'
        echo 'InitPlugin'
        echo 'CompareContents'
        echo 'UpdateCatalogue'
        echo "InitPlugin"
        echo "UpdateCatalogue"
        echo "CompareContents"
        echo "ConfigureInteraction"
        echo "GenerateContent"
        echo "StartMockServer"
        echo "ShutdownMockServer"
        echo "GetMockServerResults"
        echo "PrepareInteractionForVerification"
        echo "VerifyInteraction"
        ;;
    esac
    echo "sending $TEST_FILE"
    jq . "$TEST_FILE"
    evans cli call io.pact.plugin.PactPlugin."$METHOD" --proto plugin.proto --host localhost -f "$TEST_FILE" --port "$PORT"
}

run_test_server() {
    echo "$PWD"
    echo "entering" "$PACT_PLUGIN_DIR"
    cd "$PACT_PLUGIN_DIR" || exit
    echo "entering" "$PLUGIN_EXECUTABLE_DIR"
    cd "$PLUGIN_EXECUTABLE_DIR" || exit
    echo "testing" "$PLUGIN_EXECUTABLE"
    ./"$PLUGIN_EXECUTABLE" &
    _pid=$!
    sleep 3
    LISTENING_PORT=$(lsof -aPi -p$_pid -Fn | grep -e n | cut -d ":" -f2)
    PORT=${LISTENING_PORT:-PORT}
    echo "LISTENING_PORT:$LISTENING_PORT"
    echo "PROJECT:$PLUGIN_EXECUTABLE"
    echo "PID:" $_pid
    echo "PORT:" "${LISTENING_PORT:-PORT}"
    # echo '{"contentType":"application/matt","contentsConfig":{"request":{"body":"hello"}}}' | evans cli call io.pact.plugin.PactPlugin.ConfigureInteraction --proto ../plugin.proto --port ${1:-$LISTENING_PORT} --host localhost; \
    # killall $PLUGIN_EXECUTABLE
    echo "leaving" "$PLUGIN_EXECUTABLE_DIR"
    cd "$PACT_PLUGIN_DIR" || exit
    echo "entering" "$PWD"
}

start_exe_and_test() {
    run_test_server
    TestPlugin InitPlugin
    TestPlugin UpdateCatalogue
    TestPlugin ConfigureInteraction samplePayloads/ConfigureInteractionRequest_MattRequest.json
    TestPlugin ConfigureInteraction samplePayloads/ConfigureInteractionRequest_MattResponse.json
    TestPlugin CompareContents
    TestPlugin CompareContents samplePayloads/CompareContentsRequestFailing.json
    # TestPlugin GenerateContent
    # TestPlugin StartMockServer
    # TestPlugin ShutdownMockServer
    # TestPlugin GetMockServerResults
    # TestPlugin PrepareInteractionForVerification
    # TestPlugin VerifyInteraction

    echo "LISTENING_PORT:$LISTENING_PORT"
    echo "PROJECT:$PLUGIN_EXECUTABLE"
    echo "PID:" $_pid
    # Kill all the things
    # killall $PLUGIN_EXECUTABLE_NAME
    killall "$PLUGIN_EXECUTABLE"
    kill $_pid
}

PORT=${PORT:-"50051"}
PACT_PLUGIN_DIR=${PACT_PLUGIN_DIR:-"~/.pact/plugins"}
PLUGIN_EXECUTABLE=${PLUGIN_EXECUTABLE:-"PactPluginServer"}
PLUGIN_EXECUTABLE_DIR=${PLUGIN_EXECUTABLE_DIR:-"pact-plugin-template-xyz"}

# Testing - Good
PACT_PLUGIN_DIR=$PWD

if [[ $TARGET == "deno" || $1 == "deno" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-deno" \
        PLUGIN_EXECUTABLE=pactPluginServer \
        start_exe_and_test
elif [[ $TARGET == "dart" || $1 == "dart" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-dart"
    PLUGIN_EXECUTABLE=dart-template start_exe_and_test
elif [[ $TARGET == "dotnet" || $1 == "dotnet" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-dotnet"
    PLUGIN_EXECUTABLE=GrpcPactPlugin
    start_exe_and_test
elif [[ $TARGET == "golang" || $1 == "golang" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-golang"
    PLUGIN_EXECUTABLE=build/foobar
    start_exe_and_test
elif [[ $TARGET == "swift" || $1 == "swift" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-swift"
    PLUGIN_EXECUTABLE=.build/debug/PactPlugin
    start_exe_and_test
elif [[ $TARGET == "ruby" || $1 == "ruby" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-ruby"
    PLUGIN_EXECUTABLE=main.rb
    start_exe_and_test
elif [[ $TARGET == "node" || $1 == "node" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-node"
    PLUGIN_EXECUTABLE=server.ts
    start_exe_and_test
elif [[ $TARGET == "kotlin" || $1 == "kotlin" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-kotlin"
    PLUGIN_EXECUTABLE=./build/install/pact-protobuf-plugin/bin/pact-protobuf-plugin
    start_exe_and_test
elif [[ $TARGET == "rust" || $1 == "rust" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-rust"
    PLUGIN_EXECUTABLE=target/release/pact-csv-plugin
    start_exe_and_test
elif [[ $TARGET == "python" || $1 == "python" ]]; then
    PLUGIN_EXECUTABLE_DIR="pact-plugin-template-python"
    PLUGIN_EXECUTABLE=server.py
    start_exe_and_test
elif [[ $TARGET == "cpp" || $1 == "cpp" ]]; then
    echo "TODO"
elif [[ $TARGET == "objc" || $1 == "objc" ]]; then
    echo "TODO"
else
    echo "pass a project to test"
fi

# PLUGIN_EXECUTABLE_DIR="pact-matt-plugin"
# PLUGIN_EXECUTABLE=matt
# start_exe_and_test

# TestPlugin InitPlugin <path_to_file>
# TestPlugin InitPlugin
# TestPlugin UpdateCatalogue
# TestPlugin CompareContents
# TestPlugin ConfigureInteraction samplePayloads/ConfigureInteractionRequest_MattRequest.json
# TestPlugin ConfigureInteraction samplePayloads/ConfigureInteractionRequest_MattResponse.json
# TestPlugin GenerateContent
# TestPlugin StartMockServer
# TestPlugin ShutdownMockServer
# TestPlugin GetMockServerResults
# TestPlugin PrepareInteractionForVerification
# TestPlugin VerifyInteraction
