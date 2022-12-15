// Original file: proto/plugin.proto

import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../google/protobuf/Struct';

export interface ConfigureInteractionRequest {
  'contentType'?: (string);
  'contentsConfig'?: (_google_protobuf_Struct | null);
}

export interface ConfigureInteractionRequest__Output {
  'contentType': (string);
  'contentsConfig': (_google_protobuf_Struct__Output | null);
}
