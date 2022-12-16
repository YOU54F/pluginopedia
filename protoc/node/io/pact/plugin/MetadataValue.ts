// Original file: plugin.proto

import type { Value as _google_protobuf_Value, Value__Output as _google_protobuf_Value__Output } from '../../../google/protobuf/Value';

export interface MetadataValue {
  'nonBinaryValue'?: (_google_protobuf_Value | null);
  'binaryValue'?: (Buffer | Uint8Array | string);
  'value'?: "nonBinaryValue"|"binaryValue";
}

export interface MetadataValue__Output {
  'nonBinaryValue'?: (_google_protobuf_Value__Output | null);
  'binaryValue'?: (Buffer);
  'value': "nonBinaryValue"|"binaryValue";
}
