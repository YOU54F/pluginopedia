// Original file: plugin.proto

import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../google/protobuf/Struct';

export interface VerificationPreparationRequest {
  'pact'?: (string);
  'interactionKey'?: (string);
  'config'?: (_google_protobuf_Struct | null);
}

export interface VerificationPreparationRequest__Output {
  'pact': (string);
  'interactionKey': (string);
  'config': (_google_protobuf_Struct__Output | null);
}
