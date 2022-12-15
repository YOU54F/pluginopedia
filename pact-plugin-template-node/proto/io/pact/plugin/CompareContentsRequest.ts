// Original file: proto/plugin.proto

import type { Body as _io_pact_plugin_Body, Body__Output as _io_pact_plugin_Body__Output } from '../../../io/pact/plugin/Body';
import type { MatchingRules as _io_pact_plugin_MatchingRules, MatchingRules__Output as _io_pact_plugin_MatchingRules__Output } from '../../../io/pact/plugin/MatchingRules';
import type { PluginConfiguration as _io_pact_plugin_PluginConfiguration, PluginConfiguration__Output as _io_pact_plugin_PluginConfiguration__Output } from '../../../io/pact/plugin/PluginConfiguration';

export interface CompareContentsRequest {
  'expected'?: (_io_pact_plugin_Body | null);
  'actual'?: (_io_pact_plugin_Body | null);
  'allowUnexpectedKeys'?: (boolean);
  'rules'?: ({[key: string]: _io_pact_plugin_MatchingRules});
  'pluginConfiguration'?: (_io_pact_plugin_PluginConfiguration | null);
}

export interface CompareContentsRequest__Output {
  'expected': (_io_pact_plugin_Body__Output | null);
  'actual': (_io_pact_plugin_Body__Output | null);
  'allowUnexpectedKeys': (boolean);
  'rules': ({[key: string]: _io_pact_plugin_MatchingRules__Output});
  'pluginConfiguration': (_io_pact_plugin_PluginConfiguration__Output | null);
}
