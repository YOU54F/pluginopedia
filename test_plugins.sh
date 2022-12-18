#!/usr/bin/env bash
TestPlugin() {
    # Usaage TestPlugin <rpc method> <path to request json> <path to expected response json>
    METHOD=$1
    TEST_FILE=$2
    TEST_RESPONSE_FILE=$3
    case $METHOD in

    InitPlugin)
        TEST_FILE=${TEST_FILE:-"samplePayloads/InitPluginRequest.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/InitPluginResponse.json"}
        echo "// Check that the plugin loaded OK. Returns the catalogue entries describing what the plugin provides"
        echo "rpc InitPlugin(InitPluginRequest) returns (InitPluginResponse);"
        ;;
    UpdateCatalogue)
        TEST_FILE=${TEST_FILE:-"samplePayloads/UpdateCatalogue.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/UpdateCatalogueResponse.json"}
        echo "// Updated catalogue. This will be sent when the core catalogue has been updated (probably by a plugin loading)"
        echo "rpc UpdateCatalogue(Catalogue) returns (google.protobuf.Empty);"
        ;;

    CompareContents)
        TEST_FILE=${TEST_FILE:-"samplePayloads/CompareContentsRequest.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/CompareContentsResponse.json"}
        echo "// Request to perform a comparison of some contents (matching request)"
        echo "rpc CompareContents(CompareContentsRequest) returns (CompareContentsResponse);"
        ;;
    ConfigureInteraction)
        TEST_FILE=${TEST_FILE:-"samplePayloads/ConfigureInteractionRequest_MattRequest.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/ConfigureInteractionResponse_MattRequest.json"}
        echo " // Request to configure/setup the interaction for later verification. Data returned will be persisted in the pact file."
        echo "rpc ConfigureInteraction(ConfigureInteractionRequest) returns (ConfigureInteractionResponse);"
        ;;
    GenerateContent)
        TEST_FILE=${TEST_FILE:-"samplePayloads/GenerateContentRequest.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/GenerateContentResponse.json"}
        echo "// Request to generate the content using any defined generators"
        echo "rpc GenerateContent(GenerateContentRequest) returns (GenerateContentResponse);"
        ;;

    StartMockServer)
        TEST_FILE=${TEST_FILE:-"samplePayloads/MockServerRequest.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/MockServerResponse.json"}
        echo " // Start a mock server"
        echo "rpc StartMockServer(StartMockServerRequest) returns (StartMockServerResponse);"
        ;;

    ShutdownMockServer)
        TEST_FILE=${TEST_FILE:-"samplePayloads/ShutdownMockServerRequest.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/ShutdownMockServerResponse.json"}
        echo "// Shutdown a running mock server"
        echo " // TODO: Replace the message types with MockServerRequest and MockServerResults in the next major version"
        echo "rpc ShutdownMockServer(ShutdownMockServerRequest) returns (ShutdownMockServerResponse);"

        ;;

    GetMockServerResults)
        TEST_FILE=${TEST_FILE:-"samplePayloads/GenerateContentRequest.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/GenerateContentResponse.json"}
        echo "// Get the matching results from a running mock server"
        echo "rpc GetMockServerResults(MockServerRequest) returns (MockServerResults);"

        ;;
    PrepareInteractionForVerification)
        TEST_FILE=${TEST_FILE:-"samplePayloads/VerificationPreparationRequest.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/VerificationPreparationResponse.json"}
        echo "// Prepare an interaction for verification. This should return any data required to construct any request"
        echo "// so that it can be amended before the verification is run"
        echo "rpc PrepareInteractionForVerification(VerificationPreparationRequest) returns (VerificationPreparationResponse);"
        ;;

    VerifyInteraction)
        TEST_FILE=${TEST_FILE:-"samplePayloads/VerifyInteractionRequest.json"}
        TEST_RESPONSE_FILE=${TEST_RESPONSE_FILE:-"samplePayloads/VerifyInteractionResponse.json"}
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
    request=$(jq . "$TEST_FILE")
    echo "$request"
    echo "expecting $TEST_RESPONSE_FILE"
    expected_response=$(jq . "$TEST_RESPONSE_FILE")
    echo "$expected_response"
    echo "evans cli call io.pact.plugin.PactPlugin.$METHOD --proto plugin.proto --host localhost -f $TEST_FILE --port $PORT"
    response=$(evans cli call io.pact.plugin.PactPlugin."$METHOD" --proto plugin.proto --host localhost -f "$TEST_FILE" --port "$PORT")
    diff <(echo "$response" | jq . -c --sort-keys) <(cat "$TEST_RESPONSE_FILE" | jq -c . --sort-keys) || {
        echo "mismatch occurred, actual response: " + "$(echo "$response" | jq .)" + "expected response: $(echo "$expected_response" | jq .)"
        export ERROR_FLAG=true
    }
}

run_test_server() {
    echo "$PWD"
    echo "entering" "$PACT_PLUGIN_DIR"
    cd "$PACT_PLUGIN_DIR" || exit
    echo "entering" "$PLUGIN_EXECUTABLE_DIR"
    cd "$PLUGIN_EXECUTABLE_DIR" || exit
    echo "testing" "$PLUGIN_EXECUTABLE"
    PORT=${PORT:-"50051"} ./"$PLUGIN_EXECUTABLE" &
    _pid=$!
    sleep 3
    LISTENING_PORT=$(lsof -aPi -p$_pid -Fn | grep -e n -m1 | cut -d ":" -f2) || echo "cant get listening port"
    PORT=${LISTENING_PORT:-$PORT}
    echo "LISTENING_PORT:$LISTENING_PORT"
    echo "PROJECT:$PLUGIN_EXECUTABLE"
    echo "PID:" $_pid
    echo "PORT TO USE:" "$PORT"
    # killall $PLUGIN_EXECUTABLE
    echo "leaving" "$PLUGIN_EXECUTABLE_DIR"
    cd "$PACT_PLUGIN_DIR" || exit
    echo "entering" "$PWD"
}

health_check() {
    COUNT=0
    SERVER_STARTED=false
    ERROR_FLAG=false
    run_test_server
    while [[ $SERVER_STARTED != true || $COUNT > 10 ]]; do
        echo "COUNT "$COUNT
        echo "SERVER_STARTED "$SERVER_STARTED
        echo "ERROR_FLAG "$ERROR_FLAG
        TestPlugin InitPlugin
        if [[ $ERROR_FLAG == false ]]; then
            SERVER_STARTED=true
            echo "SERVER_STARTED" $SERVER_STARTED
            ((COUNT++))
            ERROR_FLAG=false
            echo "shimmy "$COUNT
            break
        fi
        if [[ $ERROR_FLAG == true ]]; then
            echo "got an error, retrying after 1s"
            sleep 1
            ((COUNT++))
            echo "COUNT "$COUNT
            # break
        fi
        if [[ $COUNT == 10 && $SERVER_STARTED != true ]]; then
            echo 'expired healthcheck'
            killall "$PLUGIN_EXECUTABLE" || true
            kill $_pid || true
            exit 1
        fi
    done
}

start_exe_and_test() {
    health_check
    TestPlugin InitPlugin
    TestPlugin UpdateCatalogue
    TestPlugin ConfigureInteraction samplePayloads/ConfigureInteractionRequest_MattRequest.json samplePayloads/ConfigureInteractionResponse_MattRequest.json
    TestPlugin ConfigureInteraction samplePayloads/ConfigureInteractionRequest_MattResponse.json samplePayloads/ConfigureInteractionResponse_MattResponse.json
    TestPlugin CompareContents
    TestPlugin CompareContents samplePayloads/CompareContentsRequestFailing.json samplePayloads/CompareContentsResponseFailing.json

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
    killall "$PLUGIN_EXECUTABLE" || true
    kill $_pid || true
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
    PLUGIN_EXECUTABLE=golang-template
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

if [[ $ERROR_FLAG == true ]]; then
    echo "a failure occurred"
    exit 1
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
