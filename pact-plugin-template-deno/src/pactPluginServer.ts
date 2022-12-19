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
  Struct,
  InteractionResponse
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
const cl = console;
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
    // cl.info("InitPlugin");
    // cl.info(request);
    const response: InitPluginResponse = {
      catalogue: [
        {
          // @ts-ignore
          type: 0,
          // type: "CONTENT_MATCHER",
          key: "foo",
          values: { "content-types": "application/foo" }
        }
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
    // cl.info("InitPluginResponse");
    // cl.info(response);

    // fileHandler.flush()
    return Promise.resolve(response);
  },

  UpdateCatalogue(request: Catalogue): Promise<Empty> {
    // cl.info("UpdateCatalogue");
    // cl.info(request);
    return Promise.resolve({});
  },

  CompareContents(
    request: CompareContentsRequest
  ): Promise<CompareContentsResponse> {
      // for some reason, logging out here causes the plugin pact tests to fail, 
      // so print statements have been removed.
    // cl.info("CompareContents");
    // cl.info(request);

    const actual = new TextDecoder().decode(request.actual?.content?.value);
    const expected = new TextDecoder().decode(request.expected?.content?.value);
    // cl.info("expected", expected);
    // cl.info("actual", actual);
    if (actual !== expected) {
      // @ts-ignore
      return Promise.resolve({
        error: "actual does not meet expected",
        typeMismatch: {
          actual,
          expected
        },
        results: {
          $: {
            mismatches: [
              {
                diff: "diff",
                actual: { value: request.actual?.content?.value }, // actual and expected are not being set
                expected: { value: request.expected?.content?.value },
                mismatch:
                  "expected body hello is not equal to actual body world",
                path: "$"
                // "results":{"$":{"mismatches":[{"actual":null,"diff":"diff","expected":null,"mismatch":"expected body hello is not equal to actual body world","path":"$"}]}},"typeMismatch":{"actual":"world"}}
              }
            ]
          }
        }
      });
    } else {
      return Promise.resolve({});
    }
  },

  ConfigureInteraction(
    request: ConfigureInteractionRequest
  ): Promise<ConfigureInteractionResponse> {
          // for some reason, logging out here causes the plugin pact tests to fail, 
      // so print statements have been removed.
    // cl.info("ConfigureInteraction", request);
    // cl.info(request);
    // @ts-ignore
    // cl.info("request", request.contentsConfig?.fields["request"]);
    // @ts-ignore
    // cl.info("response", request.contentsConfig?.fields["response"]);
    const interaction: InteractionResponse[] = [];
    // @ts-ignore
    if (request.contentsConfig?.fields["request"]) {
      interaction.push({
        contents: {
          content: { value: new TextEncoder().encode("hello") },
          contentType: "application/foo"
        },
        partName: "request"
      });
    }
    // @ts-ignore
    if (request.contentsConfig?.fields["response"]) {
      interaction.push({
        contents: {
          content: { value: new TextEncoder().encode("world") },
          contentType: "application/foo"
        },
        partName: "response"
      });
    }
    // console.log("returning interaction", interaction);

    return Promise.resolve({
      interaction
    });
  },

  GenerateContent(
    request: GenerateContentRequest
  ): Promise<GenerateContentResponse> {
    // cl.info("GenerateContent");
    // cl.info(request);
    // fileHandler.flush();
    return Promise.resolve({
      // contents: {
      //   content: { value: new TextEncoder().encode("foo") },
      //   contentType: "application/foo"
      // }
    });
  },

  StartMockServer(
    request: StartMockServerRequest
  ): Promise<StartMockServerResponse> {
    // cl.info("StartMockServer");
    // cl.info(request);
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
    // cl.info("ShutdownMockServer");
    // cl.info(request);
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
    // cl.info("PrepareInteractionForVerification");
    // cl.info(request);
    return Promise.resolve({
      // error: "error",
      interactionData: { body: {}, metadata: {} }
    });
  },

  VerifyInteraction(
    request: VerifyInteractionRequest
  ): Promise<VerifyInteractionResponse> {
    // cl.info("VerifyInteraction");
    // cl.info(request);
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
    : (await getAvailablePort()) ?? 50051;
  console.log(JSON.stringify({ port, serverKey: crypto.randomUUID() }));
  const gRPCServer = Deno.listen({hostname:"[::1]", port });
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
  } catch (e) {
    throw new Error(e);
  }
};

await main();
