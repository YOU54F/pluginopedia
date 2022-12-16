// Original file: plugin.proto

import type { Body as _io_pact_plugin_Body, Body__Output as _io_pact_plugin_Body__Output } from '../../../io/pact/plugin/Body';
import type { MetadataValue as _io_pact_plugin_MetadataValue, MetadataValue__Output as _io_pact_plugin_MetadataValue__Output } from '../../../io/pact/plugin/MetadataValue';

export interface InteractionData {
  'body'?: (_io_pact_plugin_Body | null);
  'metadata'?: ({[key: string]: _io_pact_plugin_MetadataValue});
}

export interface InteractionData__Output {
  'body': (_io_pact_plugin_Body__Output | null);
  'metadata': ({[key: string]: _io_pact_plugin_MetadataValue__Output});
}
