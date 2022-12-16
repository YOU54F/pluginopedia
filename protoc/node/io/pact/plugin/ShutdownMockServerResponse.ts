// Original file: plugin.proto

import type { MockServerResult as _io_pact_plugin_MockServerResult, MockServerResult__Output as _io_pact_plugin_MockServerResult__Output } from '../../../io/pact/plugin/MockServerResult';

export interface ShutdownMockServerResponse {
  'ok'?: (boolean);
  'results'?: (_io_pact_plugin_MockServerResult)[];
}

export interface ShutdownMockServerResponse__Output {
  'ok': (boolean);
  'results': (_io_pact_plugin_MockServerResult__Output)[];
}
