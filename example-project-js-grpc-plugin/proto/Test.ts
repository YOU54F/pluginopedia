// Original file: ../proto/simple.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MessageIn as _MessageIn, MessageIn__Output as _MessageIn__Output } from './MessageIn';
import type { MessageOut as _MessageOut, MessageOut__Output as _MessageOut__Output } from './MessageOut';

export interface TestClient extends grpc.Client {
  GetTest(argument: _MessageIn, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_MessageOut__Output>): grpc.ClientUnaryCall;
  GetTest(argument: _MessageIn, metadata: grpc.Metadata, callback: grpc.requestCallback<_MessageOut__Output>): grpc.ClientUnaryCall;
  GetTest(argument: _MessageIn, options: grpc.CallOptions, callback: grpc.requestCallback<_MessageOut__Output>): grpc.ClientUnaryCall;
  GetTest(argument: _MessageIn, callback: grpc.requestCallback<_MessageOut__Output>): grpc.ClientUnaryCall;
  getTest(argument: _MessageIn, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_MessageOut__Output>): grpc.ClientUnaryCall;
  getTest(argument: _MessageIn, metadata: grpc.Metadata, callback: grpc.requestCallback<_MessageOut__Output>): grpc.ClientUnaryCall;
  getTest(argument: _MessageIn, options: grpc.CallOptions, callback: grpc.requestCallback<_MessageOut__Output>): grpc.ClientUnaryCall;
  getTest(argument: _MessageIn, callback: grpc.requestCallback<_MessageOut__Output>): grpc.ClientUnaryCall;
  
}

export interface TestHandlers extends grpc.UntypedServiceImplementation {
  GetTest: grpc.handleUnaryCall<_MessageIn__Output, _MessageOut>;
  
}

export interface TestDefinition extends grpc.ServiceDefinition {
  GetTest: MethodDefinition<_MessageIn, _MessageOut, _MessageIn__Output, _MessageOut__Output>
}
