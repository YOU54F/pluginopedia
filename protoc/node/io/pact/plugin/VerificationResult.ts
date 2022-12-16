// Original file: plugin.proto

import type { InteractionData as _io_pact_plugin_InteractionData, InteractionData__Output as _io_pact_plugin_InteractionData__Output } from '../../../io/pact/plugin/InteractionData';
import type { VerificationResultItem as _io_pact_plugin_VerificationResultItem, VerificationResultItem__Output as _io_pact_plugin_VerificationResultItem__Output } from '../../../io/pact/plugin/VerificationResultItem';

export interface VerificationResult {
  'success'?: (boolean);
  'responseData'?: (_io_pact_plugin_InteractionData | null);
  'mismatches'?: (_io_pact_plugin_VerificationResultItem)[];
  'output'?: (string)[];
}

export interface VerificationResult__Output {
  'success': (boolean);
  'responseData': (_io_pact_plugin_InteractionData__Output | null);
  'mismatches': (_io_pact_plugin_VerificationResultItem__Output)[];
  'output': (string)[];
}
