# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: plugin.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2
from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0cplugin.proto\x12\x0eio.pact.plugin\x1a\x1cgoogle/protobuf/struct.proto\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x1bgoogle/protobuf/empty.proto\"<\n\x11InitPluginRequest\x12\x16\n\x0eimplementation\x18\x01 \x01(\t\x12\x0f\n\x07version\x18\x02 \x01(\t\"\xa6\x02\n\x0e\x43\x61talogueEntry\x12\x36\n\x04type\x18\x01 \x01(\x0e\x32(.io.pact.plugin.CatalogueEntry.EntryType\x12\x0b\n\x03key\x18\x02 \x01(\t\x12:\n\x06values\x18\x03 \x03(\x0b\x32*.io.pact.plugin.CatalogueEntry.ValuesEntry\x1a-\n\x0bValuesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"d\n\tEntryType\x12\x13\n\x0f\x43ONTENT_MATCHER\x10\x00\x12\x15\n\x11\x43ONTENT_GENERATOR\x10\x01\x12\r\n\tTRANSPORT\x10\x02\x12\x0b\n\x07MATCHER\x10\x03\x12\x0f\n\x0bINTERACTION\x10\x04\"G\n\x12InitPluginResponse\x12\x31\n\tcatalogue\x18\x01 \x03(\x0b\x32\x1e.io.pact.plugin.CatalogueEntry\">\n\tCatalogue\x12\x31\n\tcatalogue\x18\x01 \x03(\x0b\x32\x1e.io.pact.plugin.CatalogueEntry\"\xbe\x01\n\x04\x42ody\x12\x13\n\x0b\x63ontentType\x18\x01 \x01(\t\x12,\n\x07\x63ontent\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.BytesValue\x12=\n\x0f\x63ontentTypeHint\x18\x03 \x01(\x0e\x32$.io.pact.plugin.Body.ContentTypeHint\"4\n\x0f\x43ontentTypeHint\x12\x0b\n\x07\x44\x45\x46\x41ULT\x10\x00\x12\x08\n\x04TEXT\x10\x01\x12\n\n\x06\x42INARY\x10\x02\"\xd6\x02\n\x16\x43ompareContentsRequest\x12&\n\x08\x65xpected\x18\x01 \x01(\x0b\x32\x14.io.pact.plugin.Body\x12$\n\x06\x61\x63tual\x18\x02 \x01(\x0b\x32\x14.io.pact.plugin.Body\x12\x1d\n\x15\x61llow_unexpected_keys\x18\x03 \x01(\x08\x12@\n\x05rules\x18\x04 \x03(\x0b\x32\x31.io.pact.plugin.CompareContentsRequest.RulesEntry\x12@\n\x13pluginConfiguration\x18\x05 \x01(\x0b\x32#.io.pact.plugin.PluginConfiguration\x1aK\n\nRulesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12,\n\x05value\x18\x02 \x01(\x0b\x32\x1d.io.pact.plugin.MatchingRules:\x02\x38\x01\"7\n\x13\x43ontentTypeMismatch\x12\x10\n\x08\x65xpected\x18\x01 \x01(\t\x12\x0e\n\x06\x61\x63tual\x18\x02 \x01(\t\"\x9b\x01\n\x0f\x43ontentMismatch\x12-\n\x08\x65xpected\x18\x01 \x01(\x0b\x32\x1b.google.protobuf.BytesValue\x12+\n\x06\x61\x63tual\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.BytesValue\x12\x10\n\x08mismatch\x18\x03 \x01(\t\x12\x0c\n\x04path\x18\x04 \x01(\t\x12\x0c\n\x04\x64iff\x18\x05 \x01(\t\"H\n\x11\x43ontentMismatches\x12\x33\n\nmismatches\x18\x01 \x03(\x0b\x32\x1f.io.pact.plugin.ContentMismatch\"\xfd\x01\n\x17\x43ompareContentsResponse\x12\r\n\x05\x65rror\x18\x01 \x01(\t\x12\x39\n\x0ctypeMismatch\x18\x02 \x01(\x0b\x32#.io.pact.plugin.ContentTypeMismatch\x12\x45\n\x07results\x18\x03 \x03(\x0b\x32\x34.io.pact.plugin.CompareContentsResponse.ResultsEntry\x1aQ\n\x0cResultsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x30\n\x05value\x18\x02 \x01(\x0b\x32!.io.pact.plugin.ContentMismatches:\x02\x38\x01\"c\n\x1b\x43onfigureInteractionRequest\x12\x13\n\x0b\x63ontentType\x18\x01 \x01(\t\x12/\n\x0e\x63ontentsConfig\x18\x02 \x01(\x0b\x32\x17.google.protobuf.Struct\"E\n\x0cMatchingRule\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\'\n\x06values\x18\x02 \x01(\x0b\x32\x17.google.protobuf.Struct\";\n\rMatchingRules\x12*\n\x04rule\x18\x01 \x03(\x0b\x32\x1c.io.pact.plugin.MatchingRule\"B\n\tGenerator\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\'\n\x06values\x18\x02 \x01(\x0b\x32\x17.google.protobuf.Struct\"\x84\x01\n\x13PluginConfiguration\x12\x39\n\x18interactionConfiguration\x18\x01 \x01(\x0b\x32\x17.google.protobuf.Struct\x12\x32\n\x11pactConfiguration\x18\x02 \x01(\x0b\x32\x17.google.protobuf.Struct\"\xf9\x04\n\x13InteractionResponse\x12&\n\x08\x63ontents\x18\x01 \x01(\x0b\x32\x14.io.pact.plugin.Body\x12=\n\x05rules\x18\x02 \x03(\x0b\x32..io.pact.plugin.InteractionResponse.RulesEntry\x12G\n\ngenerators\x18\x03 \x03(\x0b\x32\x33.io.pact.plugin.InteractionResponse.GeneratorsEntry\x12\x30\n\x0fmessageMetadata\x18\x04 \x01(\x0b\x32\x17.google.protobuf.Struct\x12@\n\x13pluginConfiguration\x18\x05 \x01(\x0b\x32#.io.pact.plugin.PluginConfiguration\x12\x19\n\x11interactionMarkup\x18\x06 \x01(\t\x12M\n\x15interactionMarkupType\x18\x07 \x01(\x0e\x32..io.pact.plugin.InteractionResponse.MarkupType\x12\x10\n\x08partName\x18\x08 \x01(\t\x1aK\n\nRulesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12,\n\x05value\x18\x02 \x01(\x0b\x32\x1d.io.pact.plugin.MatchingRules:\x02\x38\x01\x1aL\n\x0fGeneratorsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12(\n\x05value\x18\x02 \x01(\x0b\x32\x19.io.pact.plugin.Generator:\x02\x38\x01\"\'\n\nMarkupType\x12\x0f\n\x0b\x43OMMON_MARK\x10\x00\x12\x08\n\x04HTML\x10\x01\"\xa9\x01\n\x1c\x43onfigureInteractionResponse\x12\r\n\x05\x65rror\x18\x01 \x01(\t\x12\x38\n\x0binteraction\x18\x02 \x03(\x0b\x32#.io.pact.plugin.InteractionResponse\x12@\n\x13pluginConfiguration\x18\x03 \x01(\x0b\x32#.io.pact.plugin.PluginConfiguration\"\x9c\x02\n\x16GenerateContentRequest\x12&\n\x08\x63ontents\x18\x01 \x01(\x0b\x32\x14.io.pact.plugin.Body\x12J\n\ngenerators\x18\x02 \x03(\x0b\x32\x36.io.pact.plugin.GenerateContentRequest.GeneratorsEntry\x12@\n\x13pluginConfiguration\x18\x03 \x01(\x0b\x32#.io.pact.plugin.PluginConfiguration\x1aL\n\x0fGeneratorsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12(\n\x05value\x18\x02 \x01(\x0b\x32\x19.io.pact.plugin.Generator:\x02\x38\x01\"A\n\x17GenerateContentResponse\x12&\n\x08\x63ontents\x18\x01 \x01(\x0b\x32\x14.io.pact.plugin.Body\"X\n\x16StartMockServerRequest\x12\x15\n\rhostInterface\x18\x01 \x01(\t\x12\x0c\n\x04port\x18\x02 \x01(\r\x12\x0b\n\x03tls\x18\x03 \x01(\x08\x12\x0c\n\x04pact\x18\x04 \x01(\t\"l\n\x17StartMockServerResponse\x12\x0f\n\x05\x65rror\x18\x01 \x01(\tH\x00\x12\x34\n\x07\x64\x65tails\x18\x02 \x01(\x0b\x32!.io.pact.plugin.MockServerDetailsH\x00\x42\n\n\x08response\"?\n\x11MockServerDetails\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x0c\n\x04port\x18\x02 \x01(\r\x12\x0f\n\x07\x61\x64\x64ress\x18\x03 \x01(\t\".\n\x19ShutdownMockServerRequest\x12\x11\n\tserverKey\x18\x01 \x01(\t\"&\n\x11MockServerRequest\x12\x11\n\tserverKey\x18\x01 \x01(\t\"d\n\x10MockServerResult\x12\x0c\n\x04path\x18\x01 \x01(\t\x12\r\n\x05\x65rror\x18\x02 \x01(\t\x12\x33\n\nmismatches\x18\x03 \x03(\x0b\x32\x1f.io.pact.plugin.ContentMismatch\"[\n\x1aShutdownMockServerResponse\x12\n\n\x02ok\x18\x01 \x01(\x08\x12\x31\n\x07results\x18\x02 \x03(\x0b\x32 .io.pact.plugin.MockServerResult\"R\n\x11MockServerResults\x12\n\n\x02ok\x18\x01 \x01(\x08\x12\x31\n\x07results\x18\x02 \x03(\x0b\x32 .io.pact.plugin.MockServerResult\"o\n\x1eVerificationPreparationRequest\x12\x0c\n\x04pact\x18\x01 \x01(\t\x12\x16\n\x0einteractionKey\x18\x02 \x01(\t\x12\'\n\x06\x63onfig\x18\x03 \x01(\x0b\x32\x17.google.protobuf.Struct\"a\n\rMetadataValue\x12\x30\n\x0enonBinaryValue\x18\x01 \x01(\x0b\x32\x16.google.protobuf.ValueH\x00\x12\x15\n\x0b\x62inaryValue\x18\x02 \x01(\x0cH\x00\x42\x07\n\x05value\"\xc6\x01\n\x0fInteractionData\x12\"\n\x04\x62ody\x18\x01 \x01(\x0b\x32\x14.io.pact.plugin.Body\x12?\n\x08metadata\x18\x02 \x03(\x0b\x32-.io.pact.plugin.InteractionData.MetadataEntry\x1aN\n\rMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12,\n\x05value\x18\x02 \x01(\x0b\x32\x1d.io.pact.plugin.MetadataValue:\x02\x38\x01\"z\n\x1fVerificationPreparationResponse\x12\x0f\n\x05\x65rror\x18\x01 \x01(\tH\x00\x12:\n\x0finteractionData\x18\x02 \x01(\x0b\x32\x1f.io.pact.plugin.InteractionDataH\x00\x42\n\n\x08response\"\xa3\x01\n\x18VerifyInteractionRequest\x12\x38\n\x0finteractionData\x18\x01 \x01(\x0b\x32\x1f.io.pact.plugin.InteractionData\x12\'\n\x06\x63onfig\x18\x02 \x01(\x0b\x32\x17.google.protobuf.Struct\x12\x0c\n\x04pact\x18\x03 \x01(\t\x12\x16\n\x0einteractionKey\x18\x04 \x01(\t\"h\n\x16VerificationResultItem\x12\x0f\n\x05\x65rror\x18\x01 \x01(\tH\x00\x12\x33\n\x08mismatch\x18\x02 \x01(\x0b\x32\x1f.io.pact.plugin.ContentMismatchH\x00\x42\x08\n\x06result\"\xa8\x01\n\x12VerificationResult\x12\x0f\n\x07success\x18\x01 \x01(\x08\x12\x35\n\x0cresponseData\x18\x02 \x01(\x0b\x32\x1f.io.pact.plugin.InteractionData\x12:\n\nmismatches\x18\x03 \x03(\x0b\x32&.io.pact.plugin.VerificationResultItem\x12\x0e\n\x06output\x18\x04 \x03(\t\"n\n\x19VerifyInteractionResponse\x12\x0f\n\x05\x65rror\x18\x01 \x01(\tH\x00\x12\x34\n\x06result\x18\x02 \x01(\x0b\x32\".io.pact.plugin.VerificationResultH\x00\x42\n\n\x08response2\x82\x08\n\nPactPlugin\x12S\n\nInitPlugin\x12!.io.pact.plugin.InitPluginRequest\x1a\".io.pact.plugin.InitPluginResponse\x12\x44\n\x0fUpdateCatalogue\x12\x19.io.pact.plugin.Catalogue\x1a\x16.google.protobuf.Empty\x12\x62\n\x0f\x43ompareContents\x12&.io.pact.plugin.CompareContentsRequest\x1a\'.io.pact.plugin.CompareContentsResponse\x12q\n\x14\x43onfigureInteraction\x12+.io.pact.plugin.ConfigureInteractionRequest\x1a,.io.pact.plugin.ConfigureInteractionResponse\x12\x62\n\x0fGenerateContent\x12&.io.pact.plugin.GenerateContentRequest\x1a\'.io.pact.plugin.GenerateContentResponse\x12\x62\n\x0fStartMockServer\x12&.io.pact.plugin.StartMockServerRequest\x1a\'.io.pact.plugin.StartMockServerResponse\x12k\n\x12ShutdownMockServer\x12).io.pact.plugin.ShutdownMockServerRequest\x1a*.io.pact.plugin.ShutdownMockServerResponse\x12\\\n\x14GetMockServerResults\x12!.io.pact.plugin.MockServerRequest\x1a!.io.pact.plugin.MockServerResults\x12\x84\x01\n!PrepareInteractionForVerification\x12..io.pact.plugin.VerificationPreparationRequest\x1a/.io.pact.plugin.VerificationPreparationResponse\x12h\n\x11VerifyInteraction\x12(.io.pact.plugin.VerifyInteractionRequest\x1a).io.pact.plugin.VerifyInteractionResponseB\x10Z\x0eio.pact.pluginb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'plugin_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z\016io.pact.plugin'
  _CATALOGUEENTRY_VALUESENTRY._options = None
  _CATALOGUEENTRY_VALUESENTRY._serialized_options = b'8\001'
  _COMPARECONTENTSREQUEST_RULESENTRY._options = None
  _COMPARECONTENTSREQUEST_RULESENTRY._serialized_options = b'8\001'
  _COMPARECONTENTSRESPONSE_RESULTSENTRY._options = None
  _COMPARECONTENTSRESPONSE_RESULTSENTRY._serialized_options = b'8\001'
  _INTERACTIONRESPONSE_RULESENTRY._options = None
  _INTERACTIONRESPONSE_RULESENTRY._serialized_options = b'8\001'
  _INTERACTIONRESPONSE_GENERATORSENTRY._options = None
  _INTERACTIONRESPONSE_GENERATORSENTRY._serialized_options = b'8\001'
  _GENERATECONTENTREQUEST_GENERATORSENTRY._options = None
  _GENERATECONTENTREQUEST_GENERATORSENTRY._serialized_options = b'8\001'
  _INTERACTIONDATA_METADATAENTRY._options = None
  _INTERACTIONDATA_METADATAENTRY._serialized_options = b'8\001'
  _INITPLUGINREQUEST._serialized_start=123
  _INITPLUGINREQUEST._serialized_end=183
  _CATALOGUEENTRY._serialized_start=186
  _CATALOGUEENTRY._serialized_end=480
  _CATALOGUEENTRY_VALUESENTRY._serialized_start=333
  _CATALOGUEENTRY_VALUESENTRY._serialized_end=378
  _CATALOGUEENTRY_ENTRYTYPE._serialized_start=380
  _CATALOGUEENTRY_ENTRYTYPE._serialized_end=480
  _INITPLUGINRESPONSE._serialized_start=482
  _INITPLUGINRESPONSE._serialized_end=553
  _CATALOGUE._serialized_start=555
  _CATALOGUE._serialized_end=617
  _BODY._serialized_start=620
  _BODY._serialized_end=810
  _BODY_CONTENTTYPEHINT._serialized_start=758
  _BODY_CONTENTTYPEHINT._serialized_end=810
  _COMPARECONTENTSREQUEST._serialized_start=813
  _COMPARECONTENTSREQUEST._serialized_end=1155
  _COMPARECONTENTSREQUEST_RULESENTRY._serialized_start=1080
  _COMPARECONTENTSREQUEST_RULESENTRY._serialized_end=1155
  _CONTENTTYPEMISMATCH._serialized_start=1157
  _CONTENTTYPEMISMATCH._serialized_end=1212
  _CONTENTMISMATCH._serialized_start=1215
  _CONTENTMISMATCH._serialized_end=1370
  _CONTENTMISMATCHES._serialized_start=1372
  _CONTENTMISMATCHES._serialized_end=1444
  _COMPARECONTENTSRESPONSE._serialized_start=1447
  _COMPARECONTENTSRESPONSE._serialized_end=1700
  _COMPARECONTENTSRESPONSE_RESULTSENTRY._serialized_start=1619
  _COMPARECONTENTSRESPONSE_RESULTSENTRY._serialized_end=1700
  _CONFIGUREINTERACTIONREQUEST._serialized_start=1702
  _CONFIGUREINTERACTIONREQUEST._serialized_end=1801
  _MATCHINGRULE._serialized_start=1803
  _MATCHINGRULE._serialized_end=1872
  _MATCHINGRULES._serialized_start=1874
  _MATCHINGRULES._serialized_end=1933
  _GENERATOR._serialized_start=1935
  _GENERATOR._serialized_end=2001
  _PLUGINCONFIGURATION._serialized_start=2004
  _PLUGINCONFIGURATION._serialized_end=2136
  _INTERACTIONRESPONSE._serialized_start=2139
  _INTERACTIONRESPONSE._serialized_end=2772
  _INTERACTIONRESPONSE_RULESENTRY._serialized_start=1080
  _INTERACTIONRESPONSE_RULESENTRY._serialized_end=1155
  _INTERACTIONRESPONSE_GENERATORSENTRY._serialized_start=2655
  _INTERACTIONRESPONSE_GENERATORSENTRY._serialized_end=2731
  _INTERACTIONRESPONSE_MARKUPTYPE._serialized_start=2733
  _INTERACTIONRESPONSE_MARKUPTYPE._serialized_end=2772
  _CONFIGUREINTERACTIONRESPONSE._serialized_start=2775
  _CONFIGUREINTERACTIONRESPONSE._serialized_end=2944
  _GENERATECONTENTREQUEST._serialized_start=2947
  _GENERATECONTENTREQUEST._serialized_end=3231
  _GENERATECONTENTREQUEST_GENERATORSENTRY._serialized_start=2655
  _GENERATECONTENTREQUEST_GENERATORSENTRY._serialized_end=2731
  _GENERATECONTENTRESPONSE._serialized_start=3233
  _GENERATECONTENTRESPONSE._serialized_end=3298
  _STARTMOCKSERVERREQUEST._serialized_start=3300
  _STARTMOCKSERVERREQUEST._serialized_end=3388
  _STARTMOCKSERVERRESPONSE._serialized_start=3390
  _STARTMOCKSERVERRESPONSE._serialized_end=3498
  _MOCKSERVERDETAILS._serialized_start=3500
  _MOCKSERVERDETAILS._serialized_end=3563
  _SHUTDOWNMOCKSERVERREQUEST._serialized_start=3565
  _SHUTDOWNMOCKSERVERREQUEST._serialized_end=3611
  _MOCKSERVERREQUEST._serialized_start=3613
  _MOCKSERVERREQUEST._serialized_end=3651
  _MOCKSERVERRESULT._serialized_start=3653
  _MOCKSERVERRESULT._serialized_end=3753
  _SHUTDOWNMOCKSERVERRESPONSE._serialized_start=3755
  _SHUTDOWNMOCKSERVERRESPONSE._serialized_end=3846
  _MOCKSERVERRESULTS._serialized_start=3848
  _MOCKSERVERRESULTS._serialized_end=3930
  _VERIFICATIONPREPARATIONREQUEST._serialized_start=3932
  _VERIFICATIONPREPARATIONREQUEST._serialized_end=4043
  _METADATAVALUE._serialized_start=4045
  _METADATAVALUE._serialized_end=4142
  _INTERACTIONDATA._serialized_start=4145
  _INTERACTIONDATA._serialized_end=4343
  _INTERACTIONDATA_METADATAENTRY._serialized_start=4265
  _INTERACTIONDATA_METADATAENTRY._serialized_end=4343
  _VERIFICATIONPREPARATIONRESPONSE._serialized_start=4345
  _VERIFICATIONPREPARATIONRESPONSE._serialized_end=4467
  _VERIFYINTERACTIONREQUEST._serialized_start=4470
  _VERIFYINTERACTIONREQUEST._serialized_end=4633
  _VERIFICATIONRESULTITEM._serialized_start=4635
  _VERIFICATIONRESULTITEM._serialized_end=4739
  _VERIFICATIONRESULT._serialized_start=4742
  _VERIFICATIONRESULT._serialized_end=4910
  _VERIFYINTERACTIONRESPONSE._serialized_start=4912
  _VERIFYINTERACTIONRESPONSE._serialized_end=5022
  _PACTPLUGIN._serialized_start=5025
  _PACTPLUGIN._serialized_end=6051
# @@protoc_insertion_point(module_scope)
