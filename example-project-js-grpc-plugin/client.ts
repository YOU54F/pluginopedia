#!/usr/bin/env ts-node
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/simple";
import { MessageOut } from "./proto/MessageOut";
import { TestClient } from "./proto/Test";

const packageDefinition = protoLoader.loadSync("./proto/simple.proto");
const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

export const client = (host: string) => {
  console.log(host);
  return new proto.Test(host, grpc.credentials.createInsecure());
};
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
const grpClient = client("[::1]:9090");
grpClient.waitForReady(deadline, (error?: Error) => {
  if (error) {
    console.log(`Client connect error: ${error.message}`);
  } else {
    doUnaryCall(grpClient,true);
    doUnaryCall(grpClient,false);
  }
});
export function doUnaryCall(client: TestClient, input:boolean) {
  return client.GetTest(
    {
      in:input
    },
    (error?: grpc.ServiceError | null, serverMessage?: MessageOut) => {
      if (error) {
        console.error(error.message);
        return error.message;
      } else if (serverMessage) {
        console.log(`(client) Got server message: ${serverMessage.out}`);
        return serverMessage.out;
      }
    }
  );
}
