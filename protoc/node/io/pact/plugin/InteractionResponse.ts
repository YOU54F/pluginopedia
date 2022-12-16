// Original file: plugin.proto

import type { Body as _io_pact_plugin_Body, Body__Output as _io_pact_plugin_Body__Output } from '../../../io/pact/plugin/Body';
import type { MatchingRules as _io_pact_plugin_MatchingRules, MatchingRules__Output as _io_pact_plugin_MatchingRules__Output } from '../../../io/pact/plugin/MatchingRules';
import type { Generator as _io_pact_plugin_Generator, Generator__Output as _io_pact_plugin_Generator__Output } from '../../../io/pact/plugin/Generator';
import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../google/protobuf/Struct';
import type { PluginConfiguration as _io_pact_plugin_PluginConfiguration, PluginConfiguration__Output as _io_pact_plugin_PluginConfiguration__Output } from '../../../io/pact/plugin/PluginConfiguration';

// Original file: plugin.proto

export const _io_pact_plugin_InteractionResponse_MarkupType = {
  COMMON_MARK: 'COMMON_MARK',
  HTML: 'HTML',
} as const;

export type _io_pact_plugin_InteractionResponse_MarkupType =
  | 'COMMON_MARK'
  | 0
  | 'HTML'
  | 1

export type _io_pact_plugin_InteractionResponse_MarkupType__Output = typeof _io_pact_plugin_InteractionResponse_MarkupType[keyof typeof _io_pact_plugin_InteractionResponse_MarkupType]

export interface InteractionResponse {
  'contents'?: (_io_pact_plugin_Body | null);
  'rules'?: ({[key: string]: _io_pact_plugin_MatchingRules});
  'generators'?: ({[key: string]: _io_pact_plugin_Generator});
  'messageMetadata'?: (_google_protobuf_Struct | null);
  'pluginConfiguration'?: (_io_pact_plugin_PluginConfiguration | null);
  'interactionMarkup'?: (string);
  'interactionMarkupType'?: (_io_pact_plugin_InteractionResponse_MarkupType);
  'partName'?: (string);
}

export interface InteractionResponse__Output {
  'contents': (_io_pact_plugin_Body__Output | null);
  'rules': ({[key: string]: _io_pact_plugin_MatchingRules__Output});
  'generators': ({[key: string]: _io_pact_plugin_Generator__Output});
  'messageMetadata': (_google_protobuf_Struct__Output | null);
  'pluginConfiguration': (_io_pact_plugin_PluginConfiguration__Output | null);
  'interactionMarkup': (string);
  'interactionMarkupType': (_io_pact_plugin_InteractionResponse_MarkupType__Output);
  'partName': (string);
}
