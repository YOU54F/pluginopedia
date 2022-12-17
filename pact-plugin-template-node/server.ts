#!/usr/bin/env ts-node
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/plugin';
// import { ClientMessage } from './proto/io/pact/plugin';
import { PactPluginHandlers } from './proto/io/pact/plugin/PactPlugin';
import { InitPluginRequest } from './proto/io/pact/plugin/InitPluginRequest';
import { InitPluginResponse } from './proto/io/pact/plugin/InitPluginResponse';
import { _io_pact_plugin_CatalogueEntry_EntryType } from './proto/io/pact/plugin/CatalogueEntry';
import { ConfigureInteractionRequest } from './proto/io/pact/plugin/ConfigureInteractionRequest';
import { ConfigureInteractionResponse } from './proto/io/pact/plugin/ConfigureInteractionResponse';
import { TextEncoder } from 'util';
import { Catalogue } from './proto/io/pact/plugin/Catalogue';
import { Empty } from './proto/google/protobuf/Empty';
import { CompareContentsRequest } from './proto/io/pact/plugin/CompareContentsRequest';
import { CompareContentsResponse } from './proto/io/pact/plugin/CompareContentsResponse';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const randomUUID = require('crypto').randomUUID;

// import { ServerMessage } from './proto/example_package/ServerMessage';

const host = '0.0.0.0:9090';
// @ts-ignore
const pactPluginServer: PactPluginHandlers = {
  initPlugin(
    call: grpc.ServerUnaryCall<InitPluginRequest, InitPluginResponse>,
    callback: grpc.sendUnaryData<InitPluginResponse>
  ) {
    if (call.request) {
      console.log(`(server) Got initPlugin message:`, call.request);
    }
    callback(null, {
      catalogue: [
        {
          type: _io_pact_plugin_CatalogueEntry_EntryType.CONTENT_MATCHER,
          values: { 'content-types': 'application/foo' },
          key: 'matt',
          // values: { 'content-types': 'text/plain;application/matt' },
          // key: 'matt',
        },
      ],
    });
  },
  updateCatalogue(
    call: grpc.ServerUnaryCall<Catalogue, Empty>,
    callback: grpc.sendUnaryData<InitPluginResponse>
  ) {
    if (call.request) {
      console.log(`(server) Got updateCatalogue message:`, call.request);
    }
    callback(null, {});
  },
  configureInteraction(
    call: grpc.ServerUnaryCall<
      ConfigureInteractionRequest,
      ConfigureInteractionResponse
    >,
    callback: grpc.sendUnaryData<ConfigureInteractionResponse>
  ) {
    if (call.request) {
      console.log(`(server) Got configureInteraction message:`, call.request);
    }

    callback(null, {
      interaction: [
        {
          contents: {
            content: { value: new TextEncoder().encode('hello') },
            contentType: 'application/matt',
          },
          partName: 'request',
          // messageMetadata: { fields: { stringValue: "foo" } }
        },
      ],
    });
  },
  compareContents(
    call: grpc.ServerUnaryCall<CompareContentsRequest, CompareContentsResponse>,
    callback: grpc.sendUnaryData<CompareContentsResponse>
  ) {
    if (call.request) {
      console.log(`(server) Got CompareContentsRequest message:`, call.request);
    }

    const actual = call.request.actual?.content;
    const expected = call.request.expected?.content;

    if (actual != expected) {
      return callback(null, {
        error: 'actual does not meet expected',
        results: {
          $: {
            mismatches: [
              {
                path: '$',
                actual,
                expected,
                mismatch: `"expected body ${expected?.value} is not equal to actual body ${actual?.value}`,
              },
            ],
          },
        },
      });
    } else {
      return callback(null, {});
    }
  },
};

function getServer(): grpc.Server {
  const packageDefinition = protoLoader.loadSync('../plugin.proto');
  const proto = grpc.loadPackageDefinition(
    packageDefinition
  ) as unknown as ProtoGrpcType;
  const server = new grpc.Server();
  server.addService(proto.io.pact.plugin.PactPlugin.service, pactPluginServer);
  return server;
}

if (require.main === module) {
  const server = getServer();
  const serverKey = randomUUID();

  server.bindAsync(
    host,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        console.error(`Server error: ${err.message}`);
      } else {
        console.log(JSON.stringify({ port, serverKey }));
        console.log(`Server bound on port: ${port}`);
        grpc.logVerbosity.DEBUG;
        server.start();
      }
    }
  );
}
