# pact-plugin-template-swift

very early prototype

`swift build`
`make bin_copy`
`./PactPlugin`
`echo '{"contentType":"application/matt","contentsConfig":{"fields":{"response":{"fields":{"key":"body","value":"TUFUVGhlbGxvTUFUVA"}}}}}' | evans cli call io.pact.plugin.PactPlugin.ConfigureInteraction --proto Sources/Model/plugin.proto --port 50051 --host localhost`
