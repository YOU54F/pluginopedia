// Original file: plugin.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Catalogue as _io_pact_plugin_Catalogue, Catalogue__Output as _io_pact_plugin_Catalogue__Output } from '../../../io/pact/plugin/Catalogue';
import type { CompareContentsRequest as _io_pact_plugin_CompareContentsRequest, CompareContentsRequest__Output as _io_pact_plugin_CompareContentsRequest__Output } from '../../../io/pact/plugin/CompareContentsRequest';
import type { CompareContentsResponse as _io_pact_plugin_CompareContentsResponse, CompareContentsResponse__Output as _io_pact_plugin_CompareContentsResponse__Output } from '../../../io/pact/plugin/CompareContentsResponse';
import type { ConfigureInteractionRequest as _io_pact_plugin_ConfigureInteractionRequest, ConfigureInteractionRequest__Output as _io_pact_plugin_ConfigureInteractionRequest__Output } from '../../../io/pact/plugin/ConfigureInteractionRequest';
import type { ConfigureInteractionResponse as _io_pact_plugin_ConfigureInteractionResponse, ConfigureInteractionResponse__Output as _io_pact_plugin_ConfigureInteractionResponse__Output } from '../../../io/pact/plugin/ConfigureInteractionResponse';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../../google/protobuf/Empty';
import type { GenerateContentRequest as _io_pact_plugin_GenerateContentRequest, GenerateContentRequest__Output as _io_pact_plugin_GenerateContentRequest__Output } from '../../../io/pact/plugin/GenerateContentRequest';
import type { GenerateContentResponse as _io_pact_plugin_GenerateContentResponse, GenerateContentResponse__Output as _io_pact_plugin_GenerateContentResponse__Output } from '../../../io/pact/plugin/GenerateContentResponse';
import type { InitPluginRequest as _io_pact_plugin_InitPluginRequest, InitPluginRequest__Output as _io_pact_plugin_InitPluginRequest__Output } from '../../../io/pact/plugin/InitPluginRequest';
import type { InitPluginResponse as _io_pact_plugin_InitPluginResponse, InitPluginResponse__Output as _io_pact_plugin_InitPluginResponse__Output } from '../../../io/pact/plugin/InitPluginResponse';
import type { MockServerRequest as _io_pact_plugin_MockServerRequest, MockServerRequest__Output as _io_pact_plugin_MockServerRequest__Output } from '../../../io/pact/plugin/MockServerRequest';
import type { MockServerResults as _io_pact_plugin_MockServerResults, MockServerResults__Output as _io_pact_plugin_MockServerResults__Output } from '../../../io/pact/plugin/MockServerResults';
import type { ShutdownMockServerRequest as _io_pact_plugin_ShutdownMockServerRequest, ShutdownMockServerRequest__Output as _io_pact_plugin_ShutdownMockServerRequest__Output } from '../../../io/pact/plugin/ShutdownMockServerRequest';
import type { ShutdownMockServerResponse as _io_pact_plugin_ShutdownMockServerResponse, ShutdownMockServerResponse__Output as _io_pact_plugin_ShutdownMockServerResponse__Output } from '../../../io/pact/plugin/ShutdownMockServerResponse';
import type { StartMockServerRequest as _io_pact_plugin_StartMockServerRequest, StartMockServerRequest__Output as _io_pact_plugin_StartMockServerRequest__Output } from '../../../io/pact/plugin/StartMockServerRequest';
import type { StartMockServerResponse as _io_pact_plugin_StartMockServerResponse, StartMockServerResponse__Output as _io_pact_plugin_StartMockServerResponse__Output } from '../../../io/pact/plugin/StartMockServerResponse';
import type { VerificationPreparationRequest as _io_pact_plugin_VerificationPreparationRequest, VerificationPreparationRequest__Output as _io_pact_plugin_VerificationPreparationRequest__Output } from '../../../io/pact/plugin/VerificationPreparationRequest';
import type { VerificationPreparationResponse as _io_pact_plugin_VerificationPreparationResponse, VerificationPreparationResponse__Output as _io_pact_plugin_VerificationPreparationResponse__Output } from '../../../io/pact/plugin/VerificationPreparationResponse';
import type { VerifyInteractionRequest as _io_pact_plugin_VerifyInteractionRequest, VerifyInteractionRequest__Output as _io_pact_plugin_VerifyInteractionRequest__Output } from '../../../io/pact/plugin/VerifyInteractionRequest';
import type { VerifyInteractionResponse as _io_pact_plugin_VerifyInteractionResponse, VerifyInteractionResponse__Output as _io_pact_plugin_VerifyInteractionResponse__Output } from '../../../io/pact/plugin/VerifyInteractionResponse';

export interface PactPluginClient extends grpc.Client {
  CompareContents(argument: _io_pact_plugin_CompareContentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_CompareContentsResponse__Output>): grpc.ClientUnaryCall;
  CompareContents(argument: _io_pact_plugin_CompareContentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_CompareContentsResponse__Output>): grpc.ClientUnaryCall;
  CompareContents(argument: _io_pact_plugin_CompareContentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_CompareContentsResponse__Output>): grpc.ClientUnaryCall;
  CompareContents(argument: _io_pact_plugin_CompareContentsRequest, callback: grpc.requestCallback<_io_pact_plugin_CompareContentsResponse__Output>): grpc.ClientUnaryCall;
  compareContents(argument: _io_pact_plugin_CompareContentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_CompareContentsResponse__Output>): grpc.ClientUnaryCall;
  compareContents(argument: _io_pact_plugin_CompareContentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_CompareContentsResponse__Output>): grpc.ClientUnaryCall;
  compareContents(argument: _io_pact_plugin_CompareContentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_CompareContentsResponse__Output>): grpc.ClientUnaryCall;
  compareContents(argument: _io_pact_plugin_CompareContentsRequest, callback: grpc.requestCallback<_io_pact_plugin_CompareContentsResponse__Output>): grpc.ClientUnaryCall;
  
  ConfigureInteraction(argument: _io_pact_plugin_ConfigureInteractionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_ConfigureInteractionResponse__Output>): grpc.ClientUnaryCall;
  ConfigureInteraction(argument: _io_pact_plugin_ConfigureInteractionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_ConfigureInteractionResponse__Output>): grpc.ClientUnaryCall;
  ConfigureInteraction(argument: _io_pact_plugin_ConfigureInteractionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_ConfigureInteractionResponse__Output>): grpc.ClientUnaryCall;
  ConfigureInteraction(argument: _io_pact_plugin_ConfigureInteractionRequest, callback: grpc.requestCallback<_io_pact_plugin_ConfigureInteractionResponse__Output>): grpc.ClientUnaryCall;
  configureInteraction(argument: _io_pact_plugin_ConfigureInteractionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_ConfigureInteractionResponse__Output>): grpc.ClientUnaryCall;
  configureInteraction(argument: _io_pact_plugin_ConfigureInteractionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_ConfigureInteractionResponse__Output>): grpc.ClientUnaryCall;
  configureInteraction(argument: _io_pact_plugin_ConfigureInteractionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_ConfigureInteractionResponse__Output>): grpc.ClientUnaryCall;
  configureInteraction(argument: _io_pact_plugin_ConfigureInteractionRequest, callback: grpc.requestCallback<_io_pact_plugin_ConfigureInteractionResponse__Output>): grpc.ClientUnaryCall;
  
  GenerateContent(argument: _io_pact_plugin_GenerateContentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_GenerateContentResponse__Output>): grpc.ClientUnaryCall;
  GenerateContent(argument: _io_pact_plugin_GenerateContentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_GenerateContentResponse__Output>): grpc.ClientUnaryCall;
  GenerateContent(argument: _io_pact_plugin_GenerateContentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_GenerateContentResponse__Output>): grpc.ClientUnaryCall;
  GenerateContent(argument: _io_pact_plugin_GenerateContentRequest, callback: grpc.requestCallback<_io_pact_plugin_GenerateContentResponse__Output>): grpc.ClientUnaryCall;
  generateContent(argument: _io_pact_plugin_GenerateContentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_GenerateContentResponse__Output>): grpc.ClientUnaryCall;
  generateContent(argument: _io_pact_plugin_GenerateContentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_GenerateContentResponse__Output>): grpc.ClientUnaryCall;
  generateContent(argument: _io_pact_plugin_GenerateContentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_GenerateContentResponse__Output>): grpc.ClientUnaryCall;
  generateContent(argument: _io_pact_plugin_GenerateContentRequest, callback: grpc.requestCallback<_io_pact_plugin_GenerateContentResponse__Output>): grpc.ClientUnaryCall;
  
  GetMockServerResults(argument: _io_pact_plugin_MockServerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_MockServerResults__Output>): grpc.ClientUnaryCall;
  GetMockServerResults(argument: _io_pact_plugin_MockServerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_MockServerResults__Output>): grpc.ClientUnaryCall;
  GetMockServerResults(argument: _io_pact_plugin_MockServerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_MockServerResults__Output>): grpc.ClientUnaryCall;
  GetMockServerResults(argument: _io_pact_plugin_MockServerRequest, callback: grpc.requestCallback<_io_pact_plugin_MockServerResults__Output>): grpc.ClientUnaryCall;
  getMockServerResults(argument: _io_pact_plugin_MockServerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_MockServerResults__Output>): grpc.ClientUnaryCall;
  getMockServerResults(argument: _io_pact_plugin_MockServerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_MockServerResults__Output>): grpc.ClientUnaryCall;
  getMockServerResults(argument: _io_pact_plugin_MockServerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_MockServerResults__Output>): grpc.ClientUnaryCall;
  getMockServerResults(argument: _io_pact_plugin_MockServerRequest, callback: grpc.requestCallback<_io_pact_plugin_MockServerResults__Output>): grpc.ClientUnaryCall;
  
  InitPlugin(argument: _io_pact_plugin_InitPluginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_InitPluginResponse__Output>): grpc.ClientUnaryCall;
  InitPlugin(argument: _io_pact_plugin_InitPluginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_InitPluginResponse__Output>): grpc.ClientUnaryCall;
  InitPlugin(argument: _io_pact_plugin_InitPluginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_InitPluginResponse__Output>): grpc.ClientUnaryCall;
  InitPlugin(argument: _io_pact_plugin_InitPluginRequest, callback: grpc.requestCallback<_io_pact_plugin_InitPluginResponse__Output>): grpc.ClientUnaryCall;
  initPlugin(argument: _io_pact_plugin_InitPluginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_InitPluginResponse__Output>): grpc.ClientUnaryCall;
  initPlugin(argument: _io_pact_plugin_InitPluginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_InitPluginResponse__Output>): grpc.ClientUnaryCall;
  initPlugin(argument: _io_pact_plugin_InitPluginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_InitPluginResponse__Output>): grpc.ClientUnaryCall;
  initPlugin(argument: _io_pact_plugin_InitPluginRequest, callback: grpc.requestCallback<_io_pact_plugin_InitPluginResponse__Output>): grpc.ClientUnaryCall;
  
  PrepareInteractionForVerification(argument: _io_pact_plugin_VerificationPreparationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_VerificationPreparationResponse__Output>): grpc.ClientUnaryCall;
  PrepareInteractionForVerification(argument: _io_pact_plugin_VerificationPreparationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_VerificationPreparationResponse__Output>): grpc.ClientUnaryCall;
  PrepareInteractionForVerification(argument: _io_pact_plugin_VerificationPreparationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_VerificationPreparationResponse__Output>): grpc.ClientUnaryCall;
  PrepareInteractionForVerification(argument: _io_pact_plugin_VerificationPreparationRequest, callback: grpc.requestCallback<_io_pact_plugin_VerificationPreparationResponse__Output>): grpc.ClientUnaryCall;
  prepareInteractionForVerification(argument: _io_pact_plugin_VerificationPreparationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_VerificationPreparationResponse__Output>): grpc.ClientUnaryCall;
  prepareInteractionForVerification(argument: _io_pact_plugin_VerificationPreparationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_VerificationPreparationResponse__Output>): grpc.ClientUnaryCall;
  prepareInteractionForVerification(argument: _io_pact_plugin_VerificationPreparationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_VerificationPreparationResponse__Output>): grpc.ClientUnaryCall;
  prepareInteractionForVerification(argument: _io_pact_plugin_VerificationPreparationRequest, callback: grpc.requestCallback<_io_pact_plugin_VerificationPreparationResponse__Output>): grpc.ClientUnaryCall;
  
  ShutdownMockServer(argument: _io_pact_plugin_ShutdownMockServerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_ShutdownMockServerResponse__Output>): grpc.ClientUnaryCall;
  ShutdownMockServer(argument: _io_pact_plugin_ShutdownMockServerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_ShutdownMockServerResponse__Output>): grpc.ClientUnaryCall;
  ShutdownMockServer(argument: _io_pact_plugin_ShutdownMockServerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_ShutdownMockServerResponse__Output>): grpc.ClientUnaryCall;
  ShutdownMockServer(argument: _io_pact_plugin_ShutdownMockServerRequest, callback: grpc.requestCallback<_io_pact_plugin_ShutdownMockServerResponse__Output>): grpc.ClientUnaryCall;
  shutdownMockServer(argument: _io_pact_plugin_ShutdownMockServerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_ShutdownMockServerResponse__Output>): grpc.ClientUnaryCall;
  shutdownMockServer(argument: _io_pact_plugin_ShutdownMockServerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_ShutdownMockServerResponse__Output>): grpc.ClientUnaryCall;
  shutdownMockServer(argument: _io_pact_plugin_ShutdownMockServerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_ShutdownMockServerResponse__Output>): grpc.ClientUnaryCall;
  shutdownMockServer(argument: _io_pact_plugin_ShutdownMockServerRequest, callback: grpc.requestCallback<_io_pact_plugin_ShutdownMockServerResponse__Output>): grpc.ClientUnaryCall;
  
  StartMockServer(argument: _io_pact_plugin_StartMockServerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_StartMockServerResponse__Output>): grpc.ClientUnaryCall;
  StartMockServer(argument: _io_pact_plugin_StartMockServerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_StartMockServerResponse__Output>): grpc.ClientUnaryCall;
  StartMockServer(argument: _io_pact_plugin_StartMockServerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_StartMockServerResponse__Output>): grpc.ClientUnaryCall;
  StartMockServer(argument: _io_pact_plugin_StartMockServerRequest, callback: grpc.requestCallback<_io_pact_plugin_StartMockServerResponse__Output>): grpc.ClientUnaryCall;
  startMockServer(argument: _io_pact_plugin_StartMockServerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_StartMockServerResponse__Output>): grpc.ClientUnaryCall;
  startMockServer(argument: _io_pact_plugin_StartMockServerRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_StartMockServerResponse__Output>): grpc.ClientUnaryCall;
  startMockServer(argument: _io_pact_plugin_StartMockServerRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_StartMockServerResponse__Output>): grpc.ClientUnaryCall;
  startMockServer(argument: _io_pact_plugin_StartMockServerRequest, callback: grpc.requestCallback<_io_pact_plugin_StartMockServerResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateCatalogue(argument: _io_pact_plugin_Catalogue, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateCatalogue(argument: _io_pact_plugin_Catalogue, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateCatalogue(argument: _io_pact_plugin_Catalogue, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  UpdateCatalogue(argument: _io_pact_plugin_Catalogue, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateCatalogue(argument: _io_pact_plugin_Catalogue, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateCatalogue(argument: _io_pact_plugin_Catalogue, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateCatalogue(argument: _io_pact_plugin_Catalogue, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  updateCatalogue(argument: _io_pact_plugin_Catalogue, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  VerifyInteraction(argument: _io_pact_plugin_VerifyInteractionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_VerifyInteractionResponse__Output>): grpc.ClientUnaryCall;
  VerifyInteraction(argument: _io_pact_plugin_VerifyInteractionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_VerifyInteractionResponse__Output>): grpc.ClientUnaryCall;
  VerifyInteraction(argument: _io_pact_plugin_VerifyInteractionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_VerifyInteractionResponse__Output>): grpc.ClientUnaryCall;
  VerifyInteraction(argument: _io_pact_plugin_VerifyInteractionRequest, callback: grpc.requestCallback<_io_pact_plugin_VerifyInteractionResponse__Output>): grpc.ClientUnaryCall;
  verifyInteraction(argument: _io_pact_plugin_VerifyInteractionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_VerifyInteractionResponse__Output>): grpc.ClientUnaryCall;
  verifyInteraction(argument: _io_pact_plugin_VerifyInteractionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_io_pact_plugin_VerifyInteractionResponse__Output>): grpc.ClientUnaryCall;
  verifyInteraction(argument: _io_pact_plugin_VerifyInteractionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_io_pact_plugin_VerifyInteractionResponse__Output>): grpc.ClientUnaryCall;
  verifyInteraction(argument: _io_pact_plugin_VerifyInteractionRequest, callback: grpc.requestCallback<_io_pact_plugin_VerifyInteractionResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PactPluginHandlers extends grpc.UntypedServiceImplementation {
  CompareContents: grpc.handleUnaryCall<_io_pact_plugin_CompareContentsRequest__Output, _io_pact_plugin_CompareContentsResponse>;
  
  ConfigureInteraction: grpc.handleUnaryCall<_io_pact_plugin_ConfigureInteractionRequest__Output, _io_pact_plugin_ConfigureInteractionResponse>;
  
  GenerateContent: grpc.handleUnaryCall<_io_pact_plugin_GenerateContentRequest__Output, _io_pact_plugin_GenerateContentResponse>;
  
  GetMockServerResults: grpc.handleUnaryCall<_io_pact_plugin_MockServerRequest__Output, _io_pact_plugin_MockServerResults>;
  
  InitPlugin: grpc.handleUnaryCall<_io_pact_plugin_InitPluginRequest__Output, _io_pact_plugin_InitPluginResponse>;
  
  PrepareInteractionForVerification: grpc.handleUnaryCall<_io_pact_plugin_VerificationPreparationRequest__Output, _io_pact_plugin_VerificationPreparationResponse>;
  
  ShutdownMockServer: grpc.handleUnaryCall<_io_pact_plugin_ShutdownMockServerRequest__Output, _io_pact_plugin_ShutdownMockServerResponse>;
  
  StartMockServer: grpc.handleUnaryCall<_io_pact_plugin_StartMockServerRequest__Output, _io_pact_plugin_StartMockServerResponse>;
  
  UpdateCatalogue: grpc.handleUnaryCall<_io_pact_plugin_Catalogue__Output, _google_protobuf_Empty>;
  
  VerifyInteraction: grpc.handleUnaryCall<_io_pact_plugin_VerifyInteractionRequest__Output, _io_pact_plugin_VerifyInteractionResponse>;
  
}

export interface PactPluginDefinition extends grpc.ServiceDefinition {
  CompareContents: MethodDefinition<_io_pact_plugin_CompareContentsRequest, _io_pact_plugin_CompareContentsResponse, _io_pact_plugin_CompareContentsRequest__Output, _io_pact_plugin_CompareContentsResponse__Output>
  ConfigureInteraction: MethodDefinition<_io_pact_plugin_ConfigureInteractionRequest, _io_pact_plugin_ConfigureInteractionResponse, _io_pact_plugin_ConfigureInteractionRequest__Output, _io_pact_plugin_ConfigureInteractionResponse__Output>
  GenerateContent: MethodDefinition<_io_pact_plugin_GenerateContentRequest, _io_pact_plugin_GenerateContentResponse, _io_pact_plugin_GenerateContentRequest__Output, _io_pact_plugin_GenerateContentResponse__Output>
  GetMockServerResults: MethodDefinition<_io_pact_plugin_MockServerRequest, _io_pact_plugin_MockServerResults, _io_pact_plugin_MockServerRequest__Output, _io_pact_plugin_MockServerResults__Output>
  InitPlugin: MethodDefinition<_io_pact_plugin_InitPluginRequest, _io_pact_plugin_InitPluginResponse, _io_pact_plugin_InitPluginRequest__Output, _io_pact_plugin_InitPluginResponse__Output>
  PrepareInteractionForVerification: MethodDefinition<_io_pact_plugin_VerificationPreparationRequest, _io_pact_plugin_VerificationPreparationResponse, _io_pact_plugin_VerificationPreparationRequest__Output, _io_pact_plugin_VerificationPreparationResponse__Output>
  ShutdownMockServer: MethodDefinition<_io_pact_plugin_ShutdownMockServerRequest, _io_pact_plugin_ShutdownMockServerResponse, _io_pact_plugin_ShutdownMockServerRequest__Output, _io_pact_plugin_ShutdownMockServerResponse__Output>
  StartMockServer: MethodDefinition<_io_pact_plugin_StartMockServerRequest, _io_pact_plugin_StartMockServerResponse, _io_pact_plugin_StartMockServerRequest__Output, _io_pact_plugin_StartMockServerResponse__Output>
  UpdateCatalogue: MethodDefinition<_io_pact_plugin_Catalogue, _google_protobuf_Empty, _io_pact_plugin_Catalogue__Output, _google_protobuf_Empty__Output>
  VerifyInteraction: MethodDefinition<_io_pact_plugin_VerifyInteractionRequest, _io_pact_plugin_VerifyInteractionResponse, _io_pact_plugin_VerifyInteractionRequest__Output, _io_pact_plugin_VerifyInteractionResponse__Output>
}
