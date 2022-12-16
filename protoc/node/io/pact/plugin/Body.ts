// Original file: plugin.proto

import type { BytesValue as _google_protobuf_BytesValue, BytesValue__Output as _google_protobuf_BytesValue__Output } from '../../../google/protobuf/BytesValue';

// Original file: plugin.proto

export const _io_pact_plugin_Body_ContentTypeHint = {
  DEFAULT: 'DEFAULT',
  TEXT: 'TEXT',
  BINARY: 'BINARY',
} as const;

export type _io_pact_plugin_Body_ContentTypeHint =
  | 'DEFAULT'
  | 0
  | 'TEXT'
  | 1
  | 'BINARY'
  | 2

export type _io_pact_plugin_Body_ContentTypeHint__Output = typeof _io_pact_plugin_Body_ContentTypeHint[keyof typeof _io_pact_plugin_Body_ContentTypeHint]

export interface Body {
  'contentType'?: (string);
  'content'?: (_google_protobuf_BytesValue | null);
  'contentTypeHint'?: (_io_pact_plugin_Body_ContentTypeHint);
}

export interface Body__Output {
  'contentType': (string);
  'content': (_google_protobuf_BytesValue__Output | null);
  'contentTypeHint': (_io_pact_plugin_Body_ContentTypeHint__Output);
}
