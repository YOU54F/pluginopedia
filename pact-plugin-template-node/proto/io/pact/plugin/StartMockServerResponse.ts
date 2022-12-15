// Original file: proto/plugin.proto

import type { MockServerDetails as _io_pact_plugin_MockServerDetails, MockServerDetails__Output as _io_pact_plugin_MockServerDetails__Output } from '../../../io/pact/plugin/MockServerDetails';

export interface StartMockServerResponse {
  'error'?: (string);
  'details'?: (_io_pact_plugin_MockServerDetails | null);
  'response'?: "error"|"details";
}

export interface StartMockServerResponse__Output {
  'error'?: (string);
  'details'?: (_io_pact_plugin_MockServerDetails__Output | null);
  'response': "error"|"details";
}
