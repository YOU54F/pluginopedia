// Original file: plugin.proto

import type { InteractionData as _io_pact_plugin_InteractionData, InteractionData__Output as _io_pact_plugin_InteractionData__Output } from '../../../io/pact/plugin/InteractionData';
import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../google/protobuf/Struct';

export interface VerifyInteractionRequest {
  'interactionData'?: (_io_pact_plugin_InteractionData | null);
  'config'?: (_google_protobuf_Struct | null);
  'pact'?: (string);
  'interactionKey'?: (string);
}

export interface VerifyInteractionRequest__Output {
  'interactionData': (_io_pact_plugin_InteractionData__Output | null);
  'config': (_google_protobuf_Struct__Output | null);
  'pact': (string);
  'interactionKey': (string);
}
