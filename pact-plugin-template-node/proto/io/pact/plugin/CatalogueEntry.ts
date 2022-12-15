// Original file: proto/plugin.proto


// Original file: proto/plugin.proto

export enum _io_pact_plugin_CatalogueEntry_EntryType {
  CONTENT_MATCHER = 0,
  CONTENT_GENERATOR = 1,
  TRANSPORT = 2,
  MATCHER = 3,
  INTERACTION = 4,
}

export interface CatalogueEntry {
  'type'?: (_io_pact_plugin_CatalogueEntry_EntryType | keyof typeof _io_pact_plugin_CatalogueEntry_EntryType);
  'key'?: (string);
  'values'?: ({[key: string]: string});
}

export interface CatalogueEntry__Output {
  'type': (keyof typeof _io_pact_plugin_CatalogueEntry_EntryType);
  'key': (string);
  'values': ({[key: string]: string});
}
