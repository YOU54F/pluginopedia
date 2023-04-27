/* tslint:disable:no-unused-expression no-empty */
import { Verifier } from "@pact-foundation/pact";
import path = require("path");
import { bindServer, getServer } from "../provider";

describe("Plugins", () => {
  const PORT = 50051;
  const HOST = "[::1]";

  describe("Verification", () => {
    describe("with MATT protocol", () => {
      beforeEach(async () => {
        const grpcServer = getServer();
        bindServer(grpcServer, [HOST, PORT].join(":"));

        console.log("Started grpcServer:", HOST);
      });

      it("validates TCP and HTTP matt messages", () => {
        const v = new Verifier({
          // providerBaseUrl: `tcp://${HOST}:${PORT}`,
          logLevel: 'debug',
          transports: [
            {
              port: PORT,
              protocol: "grpc",
            }
          ],
          pactUrls: [
            path.join(
              __dirname,
              "../",
              "pacts",
              "grpc-simple-consumer-grpc-simple-provider.json"
            )
          ]
        });

       return v.verifyProvider();
       
      });
    });
  });
});
