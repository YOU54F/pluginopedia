

pact_plugin_proto_get:
	mkdir -p proto && curl https://raw.githubusercontent.com/pact-foundation/pact-plugins/main/proto/plugin.proto -Lso proto/plugin.proto

generate_proto_project:
	mkdir -p lib && grpc_tools_ruby_protoc -I ./proto --ruby_out=lib --grpc_out=lib ./proto/plugin.proto	