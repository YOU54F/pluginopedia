/* tslint:disable:no-unused-expression no-empty */
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { SpecificationVersion, PactV4, LogLevel } from "@pact-foundation/pact";
import { client, doUnaryCall } from "../client";
import * as path from "path"
chai.use(chaiAsPromised);

const { expect } = chai;

describe("Plugins - grpc Protocol", () => {

  describe("TCP interface", () => {
    const pact = new PactV4({
      consumer: "grpc-simple-consumer",
      provider: "grpc-simple-provider",
      spec: SpecificationVersion.SPECIFICATION_VERSION_V4,
      logLevel: (process.env.LOG_LEVEL as LogLevel) || "error"
    });
    const HOST = "[::1]"
    describe("with grpc protocol", async () => {
      it("generates a pact with success", () => {
        const grpcMessage = `{
          "pact:proto": "${path.resolve('./proto/simple.proto')}",
          "pact:content-type": "application/protobuf",
          "pact:proto-service": "Test/GetTest",
  
          "request": {
            "in": "matching(boolean, true)"
          },
  
          "response": {
            "out": "matching(boolean, true)"
          }
        }`;

        return pact
          .addSynchronousInteraction("a grpc message")
          .usingPlugin({
            plugin: "protobuf",
            version: "0.1.17"
          })
          .withPluginContents(grpcMessage, "application/grpc")
          .startTransport("grpc", HOST)
          .executeTest(async (tc) => {
            const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));
            const grpcClient = client([HOST, tc.port].join(":"));
            doUnaryCall(grpcClient, true);

            return await delay(1000);
          });
      });
    });
  });
});
