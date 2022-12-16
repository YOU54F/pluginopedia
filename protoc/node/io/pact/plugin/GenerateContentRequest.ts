// Original file: plugin.proto

import type { Body as _io_pact_plugin_Body, Body__Output as _io_pact_plugin_Body__Output } from '../../../io/pact/plugin/Body';
import type { Generator as _io_pact_plugin_Generator, Generator__Output as _io_pact_plugin_Generator__Output } from '../../../io/pact/plugin/Generator';
import type { PluginConfiguration as _io_pact_plugin_PluginConfiguration, PluginConfiguration__Output as _io_pact_plugin_PluginConfiguration__Output } from '../../../io/pact/plugin/PluginConfiguration';

export interface GenerateContentRequest {
  'contents'?: (_io_pact_plugin_Body | null);
  'generators'?: ({[key: string]: _io_pact_plugin_Generator});
  'pluginConfiguration'?: (_io_pact_plugin_PluginConfiguration | null);
}

export interface GenerateContentRequest__Output {
  'contents': (_io_pact_plugin_Body__Output | null);
  'generators': ({[key: string]: _io_pact_plugin_Generator__Output});
  'pluginConfiguration': (_io_pact_plugin_PluginConfiguration__Output | null);
}
