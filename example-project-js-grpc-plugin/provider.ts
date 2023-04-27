#!/usr/bin/env ts-node
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/simple';
import { MessageOut } from "./proto/MessageOut";
import { TestHandlers } from "./proto/Test";
import { MessageIn } from "./proto/MessageIn";

const HOST = '[::1]:9090';

const exampleServer: TestHandlers = {
  GetTest(
    call: grpc.ServerUnaryCall<MessageIn, MessageOut>,
    callback: grpc.sendUnaryData<MessageOut>
  ) {
    if (call.request) {
      console.log(`(server) Got client message: ${call.request.in}`);
    }
    callback(null, {
      out: call.request.in
    });
  },
};

export function getServer(): grpc.Server {
  const packageDefinition = protoLoader.loadSync('./proto/simple.proto');
  const proto = grpc.loadPackageDefinition(
    packageDefinition
  ) as unknown as ProtoGrpcType;
  const server = new grpc.Server();
  server.addService(proto.Test.service, exampleServer);
  return server;
}


export const bindServer = (server:grpc.Server,host:string) =>{
  server.bindAsync(
    host,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        console.error(`Server error: ${err.message}`);
      } else {
        console.log(`Server bound on port: ${port}`);
        server.start();
      }
    }
  );
}

if (require.main === module) {
  const server = getServer();
  bindServer(server,HOST)
}

