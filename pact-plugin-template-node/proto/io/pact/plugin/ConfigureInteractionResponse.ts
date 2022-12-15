// Original file: proto/plugin.proto

import type { InteractionResponse as _io_pact_plugin_InteractionResponse, InteractionResponse__Output as _io_pact_plugin_InteractionResponse__Output } from '../../../io/pact/plugin/InteractionResponse';
import type { PluginConfiguration as _io_pact_plugin_PluginConfiguration, PluginConfiguration__Output as _io_pact_plugin_PluginConfiguration__Output } from '../../../io/pact/plugin/PluginConfiguration';

export interface ConfigureInteractionResponse {
  'error'?: (string);
  'interaction'?: (_io_pact_plugin_InteractionResponse)[];
  'pluginConfiguration'?: (_io_pact_plugin_PluginConfiguration | null);
}

export interface ConfigureInteractionResponse__Output {
  'error': (string);
  'interaction': (_io_pact_plugin_InteractionResponse__Output)[];
  'pluginConfiguration': (_io_pact_plugin_PluginConfiguration__Output | null);
}
