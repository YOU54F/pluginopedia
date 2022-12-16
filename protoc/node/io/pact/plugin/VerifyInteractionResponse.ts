// Original file: plugin.proto

import type { VerificationResult as _io_pact_plugin_VerificationResult, VerificationResult__Output as _io_pact_plugin_VerificationResult__Output } from '../../../io/pact/plugin/VerificationResult';

export interface VerifyInteractionResponse {
  'error'?: (string);
  'result'?: (_io_pact_plugin_VerificationResult | null);
  'response'?: "error"|"result";
}

export interface VerifyInteractionResponse__Output {
  'error'?: (string);
  'result'?: (_io_pact_plugin_VerificationResult__Output | null);
  'response': "error"|"result";
}
