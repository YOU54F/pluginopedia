#!/usr/bin/env -S deno run --allow-all --unstable
import { GrpcServer } from "https://deno.land/x/grpc_basic@0.4.6/server.ts";
// import {Logger}from "./logger.ts"
import {
  InitPluginRequest,
  InitPluginResponse,
  PactPlugin,
  Catalogue,
  CompareContentsRequest,
  CompareContentsResponse,
  ConfigureInteractionRequest,
  ConfigureInteractionResponse,
  GenerateContentRequest,
  GenerateContentResponse,
  StartMockServerRequest,
  StartMockServerResponse,
  ShutdownMockServerRequest,
  ShutdownMockServerResponse,
  MockServerRequest,
  MockServerResults,
  VerificationPreparationRequest,
  VerificationPreparationResponse,
  VerifyInteractionRequest,
  VerifyInteractionResponse,
  Empty,
  BytesValue,
  Struct
} from "./plugin_inlined.d.ts";
import { getAvailablePort } from "https://deno.land/x/port/mod.ts";
import { protoFile } from "./pluginProtoUint8Array.ts";
import {
  setup,
  handlers,
  getLogger
} from "https://deno.land/std@0.158.0/log/mod.ts";

// const fileHandler = new handlers.FileHandler("INFO", {
//   filename: "./plugin.log"
// });

// setup({
//   handlers: {
//     writeTofile: fileHandler,
//     console: new handlers.ConsoleHandler("DEBUG", {
//       formatter: "{datetime} {levelName} {msg}"
//     })
//   },
//   loggers: {
//     default: {
//       level: "INFO",
//       handlers: ["writeTofile", "console"]
//     }
//   }
// });

// const cl = getLogger();
const cl = console
const PactPluginService: PactPlugin = {
  // enum EntryType {
  //   // Matcher for contents of messages, requests or response bodies
  //   CONTENT_MATCHER = 0;
  //   // Generator for contents of messages, requests or response bodies
  //   CONTENT_GENERATOR = 1;
  //   // Transport for a network protocol
  //   TRANSPORT = 2;
  //   // Matching rule for content field/values
  //   MATCHER = 3;
  //   // Type of interaction
  //   INTERACTION = 4;
  // }
  InitPlugin(request: InitPluginRequest): Promise<InitPluginResponse> {
    cl.info("InitPlugin");
    cl.info(request);
    const response: InitPluginResponse = {
      catalogue: [
        {
          // @ts-ignore
          type: 0,
          // type: "CONTENT_MATCHER",
          key: "matt",
          values: { "content-types": "application/matt" }
        },
        // {
        //   // @ts-ignore
        //   type: 1,
        //   // type: "CONTENT_GENERATOR",
        //   key: "deno-plugin-matcher-example",
        //   values: { "content-types": "application/matt" }
        // }
        // {
        //   // @ts-ignore
        //   type: 2, // the typing is incorrect here.
        //   // type: "TRANSPORT",
        //   key: "http"
        // },
        // {
        //   // @ts-ignore
        //   type: 2, // the typing is incorrect here.
        //   // type: "TRANSPORT",
        //   key: "https"
        // }
      ]
    };
    cl.info("InitPluginResponse");
    cl.info(response);

    // fileHandler.flush()
    return Promise.resolve(response);
  },

  UpdateCatalogue(request: Catalogue): Promise<Empty> {
    cl.info("UpdateCatalogue");
    cl.info(request);
    return Promise.resolve({});
  },

  CompareContents(
    request: CompareContentsRequest
  ): Promise<CompareContentsResponse> {
    cl.info("CompareContents");
    cl.info(request);
    // fileHandler.flush();
    return Promise.resolve({
      // error: "string",
      // typeMismatch: { expected: "expected", actual: "actual" },
      results: { mismatches: [] }
    });
  },

  ConfigureInteraction(
    request: ConfigureInteractionRequest
  ): Promise<ConfigureInteractionResponse> {
    cl.info("ConfigureInteraction",request);
    // cl.info(request);
    // // cl.info(request.contentsConfig?.fields?.stringValue)
    // fileHandler.flush();
    // cl.info(request.contentType);
    // cl.info(request.contentsConfig?.fields?.stringValue);
    // fileHandler.flush();

    // const resp = ConfigureInteractionResponse
    return Promise.resolve({
      // interaction: []
      interaction: [
        {
          contents: {
            content: { value: new TextEncoder().encode("hello") },
            contentType: "application/matt"
          },
          partName: "request",
          // messageMetadata: { fields: { stringValue: "foo" } }
        },
        // {
        //   contents: {
        //     content: { value: new TextEncoder().encode("world") },
        //     contentType: "application/foo"
        //   },
        //   partName: "response"
        // }
      ]
      // error: "error_string",
      //     interaction: [
      // {   contents:  {
      //      "content": request.contentsConfig?.fields?.stringValue ?? 'foo',
      //      "contentType": "application/json",
      //      "contentTypeHint": "DEFAULT",
      //      "encoded": false
      //    }}

      // {
      // "description": "an HTTP request to /matt",
      // "key": "b6c5b973534175ec",
      // "pending": false,
      // "providerStates": [
      //   {
      //     "name": "the Matt protocol exists"
      //   }
      // ],
      // "request": {
      //   "body": {
      //     "content": "MATThelloMATT",
      //     "contentType": "application/matt",
      //     "contentTypeHint": "DEFAULT",
      //     "encoded": false
      //   },
      //   "headers": {
      //     "content-type": [
      //       "application/matt"
      //     ]
      //   },
      //   "method": "POST",
      //   "path": "/matt"
      // },
      // "response": {
      //   "body": {
      //     "content": "MATTworldMATT",
      //     "contentType": "application/matt",
      //     "contentTypeHint": "DEFAULT",
      //     "encoded": false
      //   },
      //   "headers": {
      //     "content-type": [
      //       "application/matt"
      //     ]
      //   },
      //   "status": 200
      // },
      // "type": "Synchronous/HTTP"
      // }]
      // pluginConfiguration: PluginConfiguration,
    });
  },

  GenerateContent(
    request: GenerateContentRequest
  ): Promise<GenerateContentResponse> {
    cl.info("GenerateContent");
    cl.info(request);
    // fileHandler.flush();
    return Promise.resolve({
      contents: {
        content: { value: new TextEncoder().encode("foo") },
        contentType: "application/foo"
      }
    });
  },

  StartMockServer(
    request: StartMockServerRequest
  ): Promise<StartMockServerResponse> {
    cl.info("StartMockServer");
    cl.info(request);
    // fileHandler.flush();

    return Promise.resolve({
      // details: { address: "0.0.0.0", port: 3000 }
      error: "Failed to start server"
      // details?: MockServerDetails;
    });
  },

  ShutdownMockServer(
    request: ShutdownMockServerRequest
  ): Promise<ShutdownMockServerResponse> {
    cl.info("ShutdownMockServer");
    cl.info(request);
    // fileHandler.flush();
    return Promise.resolve({
      ok: true,
      results: [{ path: "path", error: "error", mismatches: [] }]
    });
  },

  GetMockServerResults(request: MockServerRequest): Promise<MockServerResults> {
    cl.info("GetMockServerResults");
    cl.info(request);
    return Promise.resolve({
      ok: true,
      results: [{ path: "path", mismatches: [] }]
    });
  },

  PrepareInteractionForVerification(
    request: VerificationPreparationRequest
  ): Promise<VerificationPreparationResponse> {
    cl.info("PrepareInteractionForVerification");
    cl.info(request);
    return Promise.resolve({
      // error: "error",
      interactionData: { body: {}, metadata: {} }
    });
  },

  VerifyInteraction(
    request: VerifyInteractionRequest
  ): Promise<VerifyInteractionResponse> {
    cl.info("VerifyInteraction");
    cl.info(request);
    return Promise.resolve({
      // error: "error",
      result: {
        success: true,
        // responseData?: InteractionData;
        // mismatches?: VerificationResultItem[];
        output: ["woop", "woop", "from", "deno"]
      }
    });
  }
};
const server = new GrpcServer();
// const cl=log.getLogger();

server.addService<PactPlugin>(new TextDecoder().decode(protoFile), {
  ...PactPluginService
});

const main = async () => {
  cl.info(`Deno Pact Plugin is alive`);
  const port: number = Deno.env.get("PORT")
    ? Number(Deno.env.get("PORT"))
    : (await getAvailablePort()) ?? 50052;
  console.log(JSON.stringify({ port, serverKey: crypto.randomUUID() }));
  const gRPCServer = Deno.listen({ port });
  Deno.addSignalListener("SIGINT", () => {
    cl.info("got sigint!");
    // fileHandler.flush();
    gRPCServer.close();
    Deno.exit();
  });
  try {
    for await (const conn of gRPCServer) {
      // fileHandler.flush();
      server.handle(conn);
      // fileHandler.flush();
    }
  }catch (e){
    throw new Error(e)
  }

};

await main();
