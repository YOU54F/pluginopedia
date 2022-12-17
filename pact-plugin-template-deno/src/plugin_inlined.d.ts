/* this code was generated by automated tool, 
   should not edit by hand */

export interface PactPlugin {
  InitPlugin(request: InitPluginRequest): Promise<InitPluginResponse>;
  UpdateCatalogue(request: Catalogue): Promise<Empty>;
  CompareContents(request: CompareContentsRequest): Promise<CompareContentsResponse>;
  ConfigureInteraction(request: ConfigureInteractionRequest): Promise<ConfigureInteractionResponse>;
  GenerateContent(request: GenerateContentRequest): Promise<GenerateContentResponse>;
  StartMockServer(request: StartMockServerRequest): Promise<StartMockServerResponse>;
  ShutdownMockServer(request: ShutdownMockServerRequest): Promise<ShutdownMockServerResponse>;
  GetMockServerResults(request: MockServerRequest): Promise<MockServerResults>;
  PrepareInteractionForVerification(request: VerificationPreparationRequest): Promise<VerificationPreparationResponse>;
  VerifyInteraction(request: VerifyInteractionRequest): Promise<VerifyInteractionResponse>;
}

export interface Struct {
  fields?: Value;
}

export interface Value {
  nullValue?: NullValue;
  numberValue?: number;
  stringValue?: string;
  boolValue?: boolean;
  structValue?: Struct;
  listValue?: ListValue;
}

export type NullValue = "NULL_VALUE" | string;

export interface ListValue {
  values?: Value[];
}

// deno-lint-ignore no-empty-interface
export interface Empty {

}

export interface DoubleValue {
  value?: number;
}

export interface FloatValue {
  value?: number;
}

export interface Int64Value {
  value?: number;
}

export interface UInt64Value {
  value?: number;
}

export interface Int32Value {
  value?: number;
}

export interface UInt32Value {
  value?: number;
}

export interface BoolValue {
  value?: boolean;
}

export interface StringValue {
  value?: string;
}

export interface BytesValue {
  value?: Uint8Array;
}

export interface InitPluginRequest {
  implementation?: string;
  version?: string;
}

export interface CatalogueEntry {
  type?: EntryType;
  key?: string;
  values?: { [key: string]: string | number };
}

export type EntryType = "CONTENT_MATCHER" | "CONTENT_GENERATOR" | "TRANSPORT" | "MATCHER" | "INTERACTION" | string;

export interface InitPluginResponse {
  catalogue?: CatalogueEntry[];
}

export interface Catalogue {
  catalogue?: CatalogueEntry[];
}

export interface Body {
  contentType?: string;
  content?: BytesValue;
  contentTypeHint?: ContentTypeHint;
}

export type ContentTypeHint = "DEFAULT" | "TEXT" | "BINARY" | string;

export interface CompareContentsRequest {
  expected?: Body;
  actual?: Body;
  allowUnexpectedKeys?: boolean;
  rules?: MatchingRules;
  pluginConfiguration?: PluginConfiguration;
}

export interface ContentTypeMismatch {
  expected?: string;
  actual?: string;
}

export interface ContentMismatch {
  expected?: BytesValue;
  actual?: BytesValue;
  mismatch?: string;
  path?: string;
  diff?: string;
}

export interface ContentMismatches {
  mismatches?: ContentMismatch[];
}

export interface CompareContentsResponse {
  error?: string;
  typeMismatch?: ContentTypeMismatch;
  results?: ContentMismatches;
}

export interface ConfigureInteractionRequest {
  contentType?: string;
  contentsConfig?: Struct;
}

export interface MatchingRule {
  type?: string;
  values?: Struct;
}

export interface MatchingRules {
  rule?: MatchingRule[];
}

export interface Generator {
  type?: string;
  values?: Struct;
}

export interface PluginConfiguration {
  interactionConfiguration?: Struct;
  pactConfiguration?: Struct;
}

export interface InteractionResponse {
  contents?: Body;
  rules?: MatchingRules;
  generators?: Generator;
  messageMetadata?: Struct;
  pluginConfiguration?: PluginConfiguration;
  interactionMarkup?: string;
  interactionMarkupType?: MarkupType;
  partName?: string;
}

export type MarkupType = "COMMON_MARK" | "HTML" | string;

export interface ConfigureInteractionResponse {
  error?: string;
  interaction?: InteractionResponse[];
  pluginConfiguration?: PluginConfiguration;
}

export interface GenerateContentRequest {
  contents?: Body;
  generators?: Generator;
  pluginConfiguration?: PluginConfiguration;
}

export interface GenerateContentResponse {
  contents?: Body;
}

export interface StartMockServerRequest {
  hostInterface?: string;
  port?: number;
  tls?: boolean;
  pact?: string;
}

export interface StartMockServerResponse {
  error?: string;
  details?: MockServerDetails;
}

export interface MockServerDetails {
  key?: string;
  port?: number;
  address?: string;
}

export interface ShutdownMockServerRequest {
  serverKey?: string;
}

export interface MockServerRequest {
  serverKey?: string;
}

export interface MockServerResult {
  path?: string;
  error?: string;
  mismatches?: ContentMismatch[];
}

export interface ShutdownMockServerResponse {
  ok?: boolean;
  results?: MockServerResult[];
}

export interface MockServerResults {
  ok?: boolean;
  results?: MockServerResult[];
}

export interface VerificationPreparationRequest {
  pact?: string;
  interactionKey?: string;
  config?: Struct;
}

export interface MetadataValue {
  nonBinaryValue?: Value;
  binaryValue?: Uint8Array;
}

export interface InteractionData {
  body?: Body;
  metadata?: MetadataValue;
}

export interface VerificationPreparationResponse {
  error?: string;
  interactionData?: InteractionData;
}

export interface VerifyInteractionRequest {
  interactionData?: InteractionData;
  config?: Struct;
  pact?: string;
  interactionKey?: string;
}

export interface VerificationResultItem {
  error?: string;
  mismatch?: ContentMismatch;
}

export interface VerificationResult {
  success?: boolean;
  responseData?: InteractionData;
  mismatches?: VerificationResultItem[];
  output?: string[];
}

export interface VerifyInteractionResponse {
  error?: string;
  result?: VerificationResult;
}