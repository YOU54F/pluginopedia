// Original file: plugin.proto

import type { ContentMismatch as _io_pact_plugin_ContentMismatch, ContentMismatch__Output as _io_pact_plugin_ContentMismatch__Output } from '../../../io/pact/plugin/ContentMismatch';

export interface VerificationResultItem {
  'error'?: (string);
  'mismatch'?: (_io_pact_plugin_ContentMismatch | null);
  'result'?: "error"|"mismatch";
}

export interface VerificationResultItem__Output {
  'error'?: (string);
  'mismatch'?: (_io_pact_plugin_ContentMismatch__Output | null);
  'result': "error"|"mismatch";
}
