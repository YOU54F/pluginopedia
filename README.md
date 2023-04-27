# Portal

> other possible names
> Pactopedia
> Pluginopedia


evans diffing command

diff <(evans cli call io.pact.plugin.PactPlugin.InitPlugin --proto plugin.proto --host localhost --file  samplePayloads/InitPluginRequest.json --port 50051 | jq . -c --sort-keys) <(cat samplePayloads/InitPluginResponse.json | jq -c . --sort-keys)

WIP!!!

A kitchen sink for Pact Plugins

Scenarioes

1. Pact Plugin Servers
2. `application/foo` content type matcher
3. `application/matt` content type matcher and protocol
4. Area Calculator (gRPC)
5. CSV content type matcher and generator

|Language |Protobuf|gRPC| CSV|
|--|--|--|--|
|Android|🚧|🚧|🚧|
|C |🚧|🚧|🚧|
|C++ |🚧|🚧|🚧|
|C# |🚧|🚧|🚧|
|D |🚧|🚧|🚧|
|F# |🚧|🚧|🚧|
|Go |🚧|🚧|🚧|
|Java |🚧|🚧|🚧|
|JavaScript |🚧|🚧|🚧|
|Objective-C |🚧|🚧|🚧|
|PHP |🚧|🚧|🚧|
|Python |🚧|🚧|🚧|
|Ruby |🚧|🚧|🚧|
|Rust |🚧|🚧|🚧|
|Scala |🚧|🚧|🚧|
|Swift |🚧|🚧|🚧|
|TypeScript |🚧|🚧|🚧|
