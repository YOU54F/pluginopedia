// Original file: plugin.proto


export interface StartMockServerRequest {
  'hostInterface'?: (string);
  'port'?: (number);
  'tls'?: (boolean);
  'pact'?: (string);
}

export interface StartMockServerRequest__Output {
  'hostInterface': (string);
  'port': (number);
  'tls': (boolean);
  'pact': (string);
}
