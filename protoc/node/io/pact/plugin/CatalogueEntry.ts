// Original file: plugin.proto


// Original file: plugin.proto

export const _io_pact_plugin_CatalogueEntry_EntryType = {
  CONTENT_MATCHER: 'CONTENT_MATCHER',
  CONTENT_GENERATOR: 'CONTENT_GENERATOR',
  TRANSPORT: 'TRANSPORT',
  MATCHER: 'MATCHER',
  INTERACTION: 'INTERACTION',
} as const;

export type _io_pact_plugin_CatalogueEntry_EntryType =
  | 'CONTENT_MATCHER'
  | 0
  | 'CONTENT_GENERATOR'
  | 1
  | 'TRANSPORT'
  | 2
  | 'MATCHER'
  | 3
  | 'INTERACTION'
  | 4

export type _io_pact_plugin_CatalogueEntry_EntryType__Output = typeof _io_pact_plugin_CatalogueEntry_EntryType[keyof typeof _io_pact_plugin_CatalogueEntry_EntryType]

export interface CatalogueEntry {
  'type'?: (_io_pact_plugin_CatalogueEntry_EntryType);
  'key'?: (string);
  'values'?: ({[key: string]: string});
}

export interface CatalogueEntry__Output {
  'type': (_io_pact_plugin_CatalogueEntry_EntryType__Output);
  'key': (string);
  'values': ({[key: string]: string});
}
