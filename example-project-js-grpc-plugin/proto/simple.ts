import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TestClient as _TestClient, TestDefinition as _TestDefinition } from './Test';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  MessageIn: MessageTypeDefinition
  MessageOut: MessageTypeDefinition
  Test: SubtypeConstructor<typeof grpc.Client, _TestClient> & { service: _TestDefinition }
}

