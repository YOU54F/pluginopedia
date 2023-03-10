# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: plugin.proto

require 'google/protobuf'

require 'google/protobuf/struct_pb'
require 'google/protobuf/wrappers_pb'
require 'google/protobuf/empty_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("plugin.proto", :syntax => :proto3) do
    add_message "io.pact.plugin.InitPluginRequest" do
      optional :implementation, :string, 1
      optional :version, :string, 2
    end
    add_message "io.pact.plugin.CatalogueEntry" do
      optional :type, :enum, 1, "io.pact.plugin.CatalogueEntry.EntryType"
      optional :key, :string, 2
      map :values, :string, :string, 3
    end
    add_enum "io.pact.plugin.CatalogueEntry.EntryType" do
      value :CONTENT_MATCHER, 0
      value :CONTENT_GENERATOR, 1
      value :TRANSPORT, 2
      value :MATCHER, 3
      value :INTERACTION, 4
    end
    add_message "io.pact.plugin.InitPluginResponse" do
      repeated :catalogue, :message, 1, "io.pact.plugin.CatalogueEntry"
    end
    add_message "io.pact.plugin.Catalogue" do
      repeated :catalogue, :message, 1, "io.pact.plugin.CatalogueEntry"
    end
    add_message "io.pact.plugin.Body" do
      optional :contentType, :string, 1
      optional :content, :message, 2, "google.protobuf.BytesValue"
      optional :contentTypeHint, :enum, 3, "io.pact.plugin.Body.ContentTypeHint"
    end
    add_enum "io.pact.plugin.Body.ContentTypeHint" do
      value :DEFAULT, 0
      value :TEXT, 1
      value :BINARY, 2
    end
    add_message "io.pact.plugin.CompareContentsRequest" do
      optional :expected, :message, 1, "io.pact.plugin.Body"
      optional :actual, :message, 2, "io.pact.plugin.Body"
      optional :allow_unexpected_keys, :bool, 3
      map :rules, :string, :message, 4, "io.pact.plugin.MatchingRules"
      optional :pluginConfiguration, :message, 5, "io.pact.plugin.PluginConfiguration"
    end
    add_message "io.pact.plugin.ContentTypeMismatch" do
      optional :expected, :string, 1
      optional :actual, :string, 2
    end
    add_message "io.pact.plugin.ContentMismatch" do
      optional :expected, :message, 1, "google.protobuf.BytesValue"
      optional :actual, :message, 2, "google.protobuf.BytesValue"
      optional :mismatch, :string, 3
      optional :path, :string, 4
      optional :diff, :string, 5
    end
    add_message "io.pact.plugin.ContentMismatches" do
      repeated :mismatches, :message, 1, "io.pact.plugin.ContentMismatch"
    end
    add_message "io.pact.plugin.CompareContentsResponse" do
      optional :error, :string, 1
      optional :typeMismatch, :message, 2, "io.pact.plugin.ContentTypeMismatch"
      map :results, :string, :message, 3, "io.pact.plugin.ContentMismatches"
    end
    add_message "io.pact.plugin.ConfigureInteractionRequest" do
      optional :contentType, :string, 1
      optional :contentsConfig, :message, 2, "google.protobuf.Struct"
    end
    add_message "io.pact.plugin.MatchingRule" do
      optional :type, :string, 1
      optional :values, :message, 2, "google.protobuf.Struct"
    end
    add_message "io.pact.plugin.MatchingRules" do
      repeated :rule, :message, 1, "io.pact.plugin.MatchingRule"
    end
    add_message "io.pact.plugin.Generator" do
      optional :type, :string, 1
      optional :values, :message, 2, "google.protobuf.Struct"
    end
    add_message "io.pact.plugin.PluginConfiguration" do
      optional :interactionConfiguration, :message, 1, "google.protobuf.Struct"
      optional :pactConfiguration, :message, 2, "google.protobuf.Struct"
    end
    add_message "io.pact.plugin.InteractionResponse" do
      optional :contents, :message, 1, "io.pact.plugin.Body"
      map :rules, :string, :message, 2, "io.pact.plugin.MatchingRules"
      map :generators, :string, :message, 3, "io.pact.plugin.Generator"
      optional :messageMetadata, :message, 4, "google.protobuf.Struct"
      optional :pluginConfiguration, :message, 5, "io.pact.plugin.PluginConfiguration"
      optional :interactionMarkup, :string, 6
      optional :interactionMarkupType, :enum, 7, "io.pact.plugin.InteractionResponse.MarkupType"
      optional :partName, :string, 8
    end
    add_enum "io.pact.plugin.InteractionResponse.MarkupType" do
      value :COMMON_MARK, 0
      value :HTML, 1
    end
    add_message "io.pact.plugin.ConfigureInteractionResponse" do
      optional :error, :string, 1
      repeated :interaction, :message, 2, "io.pact.plugin.InteractionResponse"
      optional :pluginConfiguration, :message, 3, "io.pact.plugin.PluginConfiguration"
    end
    add_message "io.pact.plugin.GenerateContentRequest" do
      optional :contents, :message, 1, "io.pact.plugin.Body"
      map :generators, :string, :message, 2, "io.pact.plugin.Generator"
      optional :pluginConfiguration, :message, 3, "io.pact.plugin.PluginConfiguration"
    end
    add_message "io.pact.plugin.GenerateContentResponse" do
      optional :contents, :message, 1, "io.pact.plugin.Body"
    end
    add_message "io.pact.plugin.StartMockServerRequest" do
      optional :hostInterface, :string, 1
      optional :port, :uint32, 2
      optional :tls, :bool, 3
      optional :pact, :string, 4
    end
    add_message "io.pact.plugin.StartMockServerResponse" do
      oneof :response do
        optional :error, :string, 1
        optional :details, :message, 2, "io.pact.plugin.MockServerDetails"
      end
    end
    add_message "io.pact.plugin.MockServerDetails" do
      optional :key, :string, 1
      optional :port, :uint32, 2
      optional :address, :string, 3
    end
    add_message "io.pact.plugin.ShutdownMockServerRequest" do
      optional :serverKey, :string, 1
    end
    add_message "io.pact.plugin.MockServerRequest" do
      optional :serverKey, :string, 1
    end
    add_message "io.pact.plugin.MockServerResult" do
      optional :path, :string, 1
      optional :error, :string, 2
      repeated :mismatches, :message, 3, "io.pact.plugin.ContentMismatch"
    end
    add_message "io.pact.plugin.ShutdownMockServerResponse" do
      optional :ok, :bool, 1
      repeated :results, :message, 2, "io.pact.plugin.MockServerResult"
    end
    add_message "io.pact.plugin.MockServerResults" do
      optional :ok, :bool, 1
      repeated :results, :message, 2, "io.pact.plugin.MockServerResult"
    end
    add_message "io.pact.plugin.VerificationPreparationRequest" do
      optional :pact, :string, 1
      optional :interactionKey, :string, 2
      optional :config, :message, 3, "google.protobuf.Struct"
    end
    add_message "io.pact.plugin.MetadataValue" do
      oneof :value do
        optional :nonBinaryValue, :message, 1, "google.protobuf.Value"
        optional :binaryValue, :bytes, 2
      end
    end
    add_message "io.pact.plugin.InteractionData" do
      optional :body, :message, 1, "io.pact.plugin.Body"
      map :metadata, :string, :message, 2, "io.pact.plugin.MetadataValue"
    end
    add_message "io.pact.plugin.VerificationPreparationResponse" do
      oneof :response do
        optional :error, :string, 1
        optional :interactionData, :message, 2, "io.pact.plugin.InteractionData"
      end
    end
    add_message "io.pact.plugin.VerifyInteractionRequest" do
      optional :interactionData, :message, 1, "io.pact.plugin.InteractionData"
      optional :config, :message, 2, "google.protobuf.Struct"
      optional :pact, :string, 3
      optional :interactionKey, :string, 4
    end
    add_message "io.pact.plugin.VerificationResultItem" do
      oneof :result do
        optional :error, :string, 1
        optional :mismatch, :message, 2, "io.pact.plugin.ContentMismatch"
      end
    end
    add_message "io.pact.plugin.VerificationResult" do
      optional :success, :bool, 1
      optional :responseData, :message, 2, "io.pact.plugin.InteractionData"
      repeated :mismatches, :message, 3, "io.pact.plugin.VerificationResultItem"
      repeated :output, :string, 4
    end
    add_message "io.pact.plugin.VerifyInteractionResponse" do
      oneof :response do
        optional :error, :string, 1
        optional :result, :message, 2, "io.pact.plugin.VerificationResult"
      end
    end
  end
end

module Io
  module Pact
    module Plugin
      InitPluginRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.InitPluginRequest").msgclass
      CatalogueEntry = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.CatalogueEntry").msgclass
      CatalogueEntry::EntryType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.CatalogueEntry.EntryType").enummodule
      InitPluginResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.InitPluginResponse").msgclass
      Catalogue = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.Catalogue").msgclass
      Body = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.Body").msgclass
      Body::ContentTypeHint = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.Body.ContentTypeHint").enummodule
      CompareContentsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.CompareContentsRequest").msgclass
      ContentTypeMismatch = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.ContentTypeMismatch").msgclass
      ContentMismatch = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.ContentMismatch").msgclass
      ContentMismatches = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.ContentMismatches").msgclass
      CompareContentsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.CompareContentsResponse").msgclass
      ConfigureInteractionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.ConfigureInteractionRequest").msgclass
      MatchingRule = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.MatchingRule").msgclass
      MatchingRules = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.MatchingRules").msgclass
      Generator = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.Generator").msgclass
      PluginConfiguration = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.PluginConfiguration").msgclass
      InteractionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.InteractionResponse").msgclass
      InteractionResponse::MarkupType = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.InteractionResponse.MarkupType").enummodule
      ConfigureInteractionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.ConfigureInteractionResponse").msgclass
      GenerateContentRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.GenerateContentRequest").msgclass
      GenerateContentResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.GenerateContentResponse").msgclass
      StartMockServerRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.StartMockServerRequest").msgclass
      StartMockServerResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.StartMockServerResponse").msgclass
      MockServerDetails = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.MockServerDetails").msgclass
      ShutdownMockServerRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.ShutdownMockServerRequest").msgclass
      MockServerRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.MockServerRequest").msgclass
      MockServerResult = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.MockServerResult").msgclass
      ShutdownMockServerResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.ShutdownMockServerResponse").msgclass
      MockServerResults = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.MockServerResults").msgclass
      VerificationPreparationRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.VerificationPreparationRequest").msgclass
      MetadataValue = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.MetadataValue").msgclass
      InteractionData = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.InteractionData").msgclass
      VerificationPreparationResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.VerificationPreparationResponse").msgclass
      VerifyInteractionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.VerifyInteractionRequest").msgclass
      VerificationResultItem = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.VerificationResultItem").msgclass
      VerificationResult = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.VerificationResult").msgclass
      VerifyInteractionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("io.pact.plugin.VerifyInteractionResponse").msgclass
    end
  end
end
