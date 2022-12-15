// Original file: proto/plugin.proto

import type { ContentMismatch as _io_pact_plugin_ContentMismatch, ContentMismatch__Output as _io_pact_plugin_ContentMismatch__Output } from '../../../io/pact/plugin/ContentMismatch';

export interface MockServerResult {
  'path'?: (string);
  'error'?: (string);
  'mismatches'?: (_io_pact_plugin_ContentMismatch)[];
}

export interface MockServerResult__Output {
  'path': (string);
  'error': (string);
  'mismatches': (_io_pact_plugin_ContentMismatch__Output)[];
}
