// Original file: proto/plugin.proto

import type { InteractionData as _io_pact_plugin_InteractionData, InteractionData__Output as _io_pact_plugin_InteractionData__Output } from '../../../io/pact/plugin/InteractionData';

export interface VerificationPreparationResponse {
  'error'?: (string);
  'interactionData'?: (_io_pact_plugin_InteractionData | null);
  'response'?: "error"|"interactionData";
}

export interface VerificationPreparationResponse__Output {
  'error'?: (string);
  'interactionData'?: (_io_pact_plugin_InteractionData__Output | null);
  'response': "error"|"interactionData";
}
