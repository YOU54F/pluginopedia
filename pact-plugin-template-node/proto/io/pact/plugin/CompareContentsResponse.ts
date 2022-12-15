// Original file: proto/plugin.proto

import type { ContentTypeMismatch as _io_pact_plugin_ContentTypeMismatch, ContentTypeMismatch__Output as _io_pact_plugin_ContentTypeMismatch__Output } from '../../../io/pact/plugin/ContentTypeMismatch';
import type { ContentMismatches as _io_pact_plugin_ContentMismatches, ContentMismatches__Output as _io_pact_plugin_ContentMismatches__Output } from '../../../io/pact/plugin/ContentMismatches';

export interface CompareContentsResponse {
  'error'?: (string);
  'typeMismatch'?: (_io_pact_plugin_ContentTypeMismatch | null);
  'results'?: ({[key: string]: _io_pact_plugin_ContentMismatches});
}

export interface CompareContentsResponse__Output {
  'error': (string);
  'typeMismatch': (_io_pact_plugin_ContentTypeMismatch__Output | null);
  'results': ({[key: string]: _io_pact_plugin_ContentMismatches__Output});
}
