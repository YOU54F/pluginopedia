
all:
	TARGET=deno make compile
	TARGET=dart make compile
	TARGET=dotnet make compile
	TARGET=golang make compile
	TARGET=node make compile
	TARGET=python make compile
	TARGET=ruby make compile
	TARGET=swift make compile
	TARGET=kotlin make compile
	TARGET=rust make compile

compile_test: compile test

compile:
	@case $$TARGET in \
		"deno")\
		cd pact-plugin-template-deno && \
		deno compile --allow-all --unstable src/pactPluginServer.ts \
		;;\
		"dart")\
		cd pact-plugin-template-dart && \
		make compile\
		;;\
		"dotnet")\
		cd pact-plugin-template-dotnet && \
		make compile\
		;;\
		"golang")\
		cd pact-plugin-template-golang && \
		make bin\
		;;\
		"node")\
		cd pact-plugin-template-node && \
		npm i\
		;;\
		"python")\
		cd pact-plugin-template-python && \
		pip install -r requirements.txt && \
		pyinstaller server.py -n server --log-level DEBUG\
		;;\
		"ruby")\
		cd pact-plugin-template-ruby && \
		bundle install\
		;;\
		"swift")\
		cd pact-plugin-template-swift && \
		make compile &&\
		make bin_copy\
		;;\
		"kotlin")\
		cd pact-plugin-template-kotlin && \
		./gradlew installDist\
		;;\
		"rust")\
		cd pact-plugin-template-rust && \
		cargo build --release\
		;;\
		"cpp")\
		echo "we dont have an example yet"\
		;;\
		"objc")\
		echo "we dont have an example yet"\
		;;\
		*)\
		echo "we dont support your language yet"\
		;;\
	esac
test:
	./test_plugins.sh

test_all:
	TARGET=deno make test
	TARGET=dart make test
	TARGET=dotnet make test
	TARGET=golang make test
	TARGET=node make test
	TARGET=swift make test
	TARGET=ruby make test
	TARGET=python make test
	TARGET=kotlin make test
	TARGET=rust make test



pact_plugin_proto_get:
	mkdir -p proto && curl https://raw.githubusercontent.com/pact-foundation/pact-plugins/main/proto/plugin.proto -Lso proto/plugin.proto

.PHONY: protoc
protoc:
	@case $$TARGET in \
		"deno")\
		mkdir -p ./protoc/deno &&\
		deno run --allow-read https://deno.land/x/grpc_basic@0.4.6/gen/dts.ts \
		plugin.proto > ./protoc/deno/plugin.d.ts\
		;;\
		"dart")\
		mkdir -p ./protoc/dart &&\
		protoc \
		--dart_out=grpc:./protoc/dart\
		plugin.proto\
		;;\
		"dotnet")\
		mkdir -p ./protoc/dotnet &&\
		cd pact-plugin-template-dotnet &&\
		make compile &&\
		cd .. &&\
		cp pact-plugin-template-dotnet/obj/Debug/net6.0/Protos/* ./protoc/dotnet\
		;;\
		"golang")\
		mkdir -p ./protoc/golang &&\
		protoc \
		--go_out=./protoc/golang \
		--go_opt=paths=source_relative \
		--go-grpc_out=./protoc/golang \
		--go-grpc_opt=paths=source_relative \
		plugin.proto\
		;;\
		"node")\
		npm install @grpc/proto-loader @grpc/grpc-js &&\
		mkdir -p ./protoc/node &&\
		$$(npm bin)/proto-loader-gen-types \
		--longs=String \
		--enums=String \
		--defaults \
		--oneofs \
		--grpcLib=@grpc/grpc-js \
		--outDir=./protoc/node\
		plugin.proto &&\
		rm -rf node_modules package.json package-lock.json\
		;;\
		"python")\
		mkdir -p ./protoc/python &&\
		python -m \
		grpc_tools.protoc \
		--python_out=./protoc/python \
		--pyi_out=./protoc/python \
		--grpc_python_out=./protoc/python \
		--proto_path=./ \
		 plugin.proto\
		;;\
		"ruby")\
		mkdir -p ./protoc/ruby &&\
		grpc_tools_ruby_protoc \
		--ruby_out=./protoc/ruby \
		--grpc_out=./protoc/ruby \
		plugin.proto\
		;;\
		"swift")\
		mkdir -p ./protoc/swift &&\
		protoc \
		--swift_out=./protoc/swift \
		--swift_opt=Visibility=Public \
		--grpc-swift_opt=Visibility=Public \
		--grpc-swift_out=./protoc/swift \
		plugin.proto\
		;;\
		"kotlin")\
		mkdir -p ./protoc/kotlin &&\
		TARGET=kotlin make compile && \
		cp -R pact-plugin-template-kotlin/build/generated/source/proto/main ./protoc/kotlin \
		;;\
		"rust")\
		mkdir -p ./protoc/rust &&\
		cargo install protoc-gen-tonic &&\
		protoc 
		--tonic_out=./protoc/rust \
		--no_client=true\
		plugin.proto\
		;;\
		*)\
		echo "we dont support your language yet"\
		;;\
	esac



pact_test_all:
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=deno npm run test:consumer
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=dart npm run test:consumer
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=dotnet npm run test:consumer
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=golang npm run test:consumer
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=node npm run test:consumer
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=python npm run test:consumer
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=ruby npm run test:consumer
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=swift npm run test:consumer
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=kotlin npm run test:consumer
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug TARGET=rust npm run test:consumer

# TARGET=dart make pact_test
pact_test:
	cd example-project-js-foobar-plugin && LOG_LEVEL=debug npm run test:consumer
