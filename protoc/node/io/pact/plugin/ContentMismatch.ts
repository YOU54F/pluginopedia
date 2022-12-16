// Original file: plugin.proto

import type { BytesValue as _google_protobuf_BytesValue, BytesValue__Output as _google_protobuf_BytesValue__Output } from '../../../google/protobuf/BytesValue';

export interface ContentMismatch {
  'expected'?: (_google_protobuf_BytesValue | null);
  'actual'?: (_google_protobuf_BytesValue | null);
  'mismatch'?: (string);
  'path'?: (string);
  'diff'?: (string);
}

export interface ContentMismatch__Output {
  'expected': (_google_protobuf_BytesValue__Output | null);
  'actual': (_google_protobuf_BytesValue__Output | null);
  'mismatch': (string);
  'path': (string);
  'diff': (string);
}
