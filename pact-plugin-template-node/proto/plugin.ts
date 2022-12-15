import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { PactPluginClient as _io_pact_plugin_PactPluginClient, PactPluginDefinition as _io_pact_plugin_PactPluginDefinition } from './io/pact/plugin/PactPlugin';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      BoolValue: MessageTypeDefinition
      BytesValue: MessageTypeDefinition
      DoubleValue: MessageTypeDefinition
      Empty: MessageTypeDefinition
      FloatValue: MessageTypeDefinition
      Int32Value: MessageTypeDefinition
      Int64Value: MessageTypeDefinition
      ListValue: MessageTypeDefinition
      NullValue: EnumTypeDefinition
      StringValue: MessageTypeDefinition
      Struct: MessageTypeDefinition
      UInt32Value: MessageTypeDefinition
      UInt64Value: MessageTypeDefinition
      Value: MessageTypeDefinition
    }
  }
  io: {
    pact: {
      plugin: {
        Body: MessageTypeDefinition
        Catalogue: MessageTypeDefinition
        CatalogueEntry: MessageTypeDefinition
        CompareContentsRequest: MessageTypeDefinition
        CompareContentsResponse: MessageTypeDefinition
        ConfigureInteractionRequest: MessageTypeDefinition
        ConfigureInteractionResponse: MessageTypeDefinition
        ContentMismatch: MessageTypeDefinition
        ContentMismatches: MessageTypeDefinition
        ContentTypeMismatch: MessageTypeDefinition
        GenerateContentRequest: MessageTypeDefinition
        GenerateContentResponse: MessageTypeDefinition
        Generator: MessageTypeDefinition
        InitPluginRequest: MessageTypeDefinition
        InitPluginResponse: MessageTypeDefinition
        InteractionData: MessageTypeDefinition
        InteractionResponse: MessageTypeDefinition
        MatchingRule: MessageTypeDefinition
        MatchingRules: MessageTypeDefinition
        MetadataValue: MessageTypeDefinition
        MockServerDetails: MessageTypeDefinition
        MockServerRequest: MessageTypeDefinition
        MockServerResult: MessageTypeDefinition
        MockServerResults: MessageTypeDefinition
        PactPlugin: SubtypeConstructor<typeof grpc.Client, _io_pact_plugin_PactPluginClient> & { service: _io_pact_plugin_PactPluginDefinition }
        PluginConfiguration: MessageTypeDefinition
        ShutdownMockServerRequest: MessageTypeDefinition
        ShutdownMockServerResponse: MessageTypeDefinition
        StartMockServerRequest: MessageTypeDefinition
        StartMockServerResponse: MessageTypeDefinition
        VerificationPreparationRequest: MessageTypeDefinition
        VerificationPreparationResponse: MessageTypeDefinition
        VerificationResult: MessageTypeDefinition
        VerificationResultItem: MessageTypeDefinition
        VerifyInteractionRequest: MessageTypeDefinition
        VerifyInteractionResponse: MessageTypeDefinition
      }
    }
  }
}

