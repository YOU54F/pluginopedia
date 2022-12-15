// Original file: proto/plugin.proto

import type { MockServerResult as _io_pact_plugin_MockServerResult, MockServerResult__Output as _io_pact_plugin_MockServerResult__Output } from '../../../io/pact/plugin/MockServerResult';

export interface MockServerResults {
  'ok'?: (boolean);
  'results'?: (_io_pact_plugin_MockServerResult)[];
}

export interface MockServerResults__Output {
  'ok': (boolean);
  'results': (_io_pact_plugin_MockServerResult__Output)[];
}
