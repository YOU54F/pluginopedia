from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf import wrappers_pb2 as _wrappers_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Body(_message.Message):
    __slots__ = ["content", "contentType", "contentTypeHint"]
    class ContentTypeHint(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    BINARY: Body.ContentTypeHint
    CONTENTTYPEHINT_FIELD_NUMBER: _ClassVar[int]
    CONTENTTYPE_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    DEFAULT: Body.ContentTypeHint
    TEXT: Body.ContentTypeHint
    content: _wrappers_pb2.BytesValue
    contentType: str
    contentTypeHint: Body.ContentTypeHint
    def __init__(self, contentType: _Optional[str] = ..., content: _Optional[_Union[_wrappers_pb2.BytesValue, _Mapping]] = ..., contentTypeHint: _Optional[_Union[Body.ContentTypeHint, str]] = ...) -> None: ...

class Catalogue(_message.Message):
    __slots__ = ["catalogue"]
    CATALOGUE_FIELD_NUMBER: _ClassVar[int]
    catalogue: _containers.RepeatedCompositeFieldContainer[CatalogueEntry]
    def __init__(self, catalogue: _Optional[_Iterable[_Union[CatalogueEntry, _Mapping]]] = ...) -> None: ...

class CatalogueEntry(_message.Message):
    __slots__ = ["key", "type", "values"]
    class EntryType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class ValuesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    CONTENT_GENERATOR: CatalogueEntry.EntryType
    CONTENT_MATCHER: CatalogueEntry.EntryType
    INTERACTION: CatalogueEntry.EntryType
    KEY_FIELD_NUMBER: _ClassVar[int]
    MATCHER: CatalogueEntry.EntryType
    TRANSPORT: CatalogueEntry.EntryType
    TYPE_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    key: str
    type: CatalogueEntry.EntryType
    values: _containers.ScalarMap[str, str]
    def __init__(self, type: _Optional[_Union[CatalogueEntry.EntryType, str]] = ..., key: _Optional[str] = ..., values: _Optional[_Mapping[str, str]] = ...) -> None: ...

class CompareContentsRequest(_message.Message):
    __slots__ = ["actual", "allow_unexpected_keys", "expected", "pluginConfiguration", "rules"]
    class RulesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: MatchingRules
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[MatchingRules, _Mapping]] = ...) -> None: ...
    ACTUAL_FIELD_NUMBER: _ClassVar[int]
    ALLOW_UNEXPECTED_KEYS_FIELD_NUMBER: _ClassVar[int]
    EXPECTED_FIELD_NUMBER: _ClassVar[int]
    PLUGINCONFIGURATION_FIELD_NUMBER: _ClassVar[int]
    RULES_FIELD_NUMBER: _ClassVar[int]
    actual: Body
    allow_unexpected_keys: bool
    expected: Body
    pluginConfiguration: PluginConfiguration
    rules: _containers.MessageMap[str, MatchingRules]
    def __init__(self, expected: _Optional[_Union[Body, _Mapping]] = ..., actual: _Optional[_Union[Body, _Mapping]] = ..., allow_unexpected_keys: bool = ..., rules: _Optional[_Mapping[str, MatchingRules]] = ..., pluginConfiguration: _Optional[_Union[PluginConfiguration, _Mapping]] = ...) -> None: ...

class CompareContentsResponse(_message.Message):
    __slots__ = ["error", "results", "typeMismatch"]
    class ResultsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ContentMismatches
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ContentMismatches, _Mapping]] = ...) -> None: ...
    ERROR_FIELD_NUMBER: _ClassVar[int]
    RESULTS_FIELD_NUMBER: _ClassVar[int]
    TYPEMISMATCH_FIELD_NUMBER: _ClassVar[int]
    error: str
    results: _containers.MessageMap[str, ContentMismatches]
    typeMismatch: ContentTypeMismatch
    def __init__(self, error: _Optional[str] = ..., typeMismatch: _Optional[_Union[ContentTypeMismatch, _Mapping]] = ..., results: _Optional[_Mapping[str, ContentMismatches]] = ...) -> None: ...

class ConfigureInteractionRequest(_message.Message):
    __slots__ = ["contentType", "contentsConfig"]
    CONTENTSCONFIG_FIELD_NUMBER: _ClassVar[int]
    CONTENTTYPE_FIELD_NUMBER: _ClassVar[int]
    contentType: str
    contentsConfig: _struct_pb2.Struct
    def __init__(self, contentType: _Optional[str] = ..., contentsConfig: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class ConfigureInteractionResponse(_message.Message):
    __slots__ = ["error", "interaction", "pluginConfiguration"]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    INTERACTION_FIELD_NUMBER: _ClassVar[int]
    PLUGINCONFIGURATION_FIELD_NUMBER: _ClassVar[int]
    error: str
    interaction: _containers.RepeatedCompositeFieldContainer[InteractionResponse]
    pluginConfiguration: PluginConfiguration
    def __init__(self, error: _Optional[str] = ..., interaction: _Optional[_Iterable[_Union[InteractionResponse, _Mapping]]] = ..., pluginConfiguration: _Optional[_Union[PluginConfiguration, _Mapping]] = ...) -> None: ...

class ContentMismatch(_message.Message):
    __slots__ = ["actual", "diff", "expected", "mismatch", "path"]
    ACTUAL_FIELD_NUMBER: _ClassVar[int]
    DIFF_FIELD_NUMBER: _ClassVar[int]
    EXPECTED_FIELD_NUMBER: _ClassVar[int]
    MISMATCH_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    actual: _wrappers_pb2.BytesValue
    diff: str
    expected: _wrappers_pb2.BytesValue
    mismatch: str
    path: str
    def __init__(self, expected: _Optional[_Union[_wrappers_pb2.BytesValue, _Mapping]] = ..., actual: _Optional[_Union[_wrappers_pb2.BytesValue, _Mapping]] = ..., mismatch: _Optional[str] = ..., path: _Optional[str] = ..., diff: _Optional[str] = ...) -> None: ...

class ContentMismatches(_message.Message):
    __slots__ = ["mismatches"]
    MISMATCHES_FIELD_NUMBER: _ClassVar[int]
    mismatches: _containers.RepeatedCompositeFieldContainer[ContentMismatch]
    def __init__(self, mismatches: _Optional[_Iterable[_Union[ContentMismatch, _Mapping]]] = ...) -> None: ...

class ContentTypeMismatch(_message.Message):
    __slots__ = ["actual", "expected"]
    ACTUAL_FIELD_NUMBER: _ClassVar[int]
    EXPECTED_FIELD_NUMBER: _ClassVar[int]
    actual: str
    expected: str
    def __init__(self, expected: _Optional[str] = ..., actual: _Optional[str] = ...) -> None: ...

class GenerateContentRequest(_message.Message):
    __slots__ = ["contents", "generators", "pluginConfiguration"]
    class GeneratorsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Generator
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Generator, _Mapping]] = ...) -> None: ...
    CONTENTS_FIELD_NUMBER: _ClassVar[int]
    GENERATORS_FIELD_NUMBER: _ClassVar[int]
    PLUGINCONFIGURATION_FIELD_NUMBER: _ClassVar[int]
    contents: Body
    generators: _containers.MessageMap[str, Generator]
    pluginConfiguration: PluginConfiguration
    def __init__(self, contents: _Optional[_Union[Body, _Mapping]] = ..., generators: _Optional[_Mapping[str, Generator]] = ..., pluginConfiguration: _Optional[_Union[PluginConfiguration, _Mapping]] = ...) -> None: ...

class GenerateContentResponse(_message.Message):
    __slots__ = ["contents"]
    CONTENTS_FIELD_NUMBER: _ClassVar[int]
    contents: Body
    def __init__(self, contents: _Optional[_Union[Body, _Mapping]] = ...) -> None: ...

class Generator(_message.Message):
    __slots__ = ["type", "values"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    type: str
    values: _struct_pb2.Struct
    def __init__(self, type: _Optional[str] = ..., values: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class InitPluginRequest(_message.Message):
    __slots__ = ["implementation", "version"]
    IMPLEMENTATION_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    implementation: str
    version: str
    def __init__(self, implementation: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...

class InitPluginResponse(_message.Message):
    __slots__ = ["catalogue"]
    CATALOGUE_FIELD_NUMBER: _ClassVar[int]
    catalogue: _containers.RepeatedCompositeFieldContainer[CatalogueEntry]
    def __init__(self, catalogue: _Optional[_Iterable[_Union[CatalogueEntry, _Mapping]]] = ...) -> None: ...

class InteractionData(_message.Message):
    __slots__ = ["body", "metadata"]
    class MetadataEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: MetadataValue
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[MetadataValue, _Mapping]] = ...) -> None: ...
    BODY_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    body: Body
    metadata: _containers.MessageMap[str, MetadataValue]
    def __init__(self, body: _Optional[_Union[Body, _Mapping]] = ..., metadata: _Optional[_Mapping[str, MetadataValue]] = ...) -> None: ...

class InteractionResponse(_message.Message):
    __slots__ = ["contents", "generators", "interactionMarkup", "interactionMarkupType", "messageMetadata", "partName", "pluginConfiguration", "rules"]
    class MarkupType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    class GeneratorsEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Generator
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Generator, _Mapping]] = ...) -> None: ...
    class RulesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: MatchingRules
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[MatchingRules, _Mapping]] = ...) -> None: ...
    COMMON_MARK: InteractionResponse.MarkupType
    CONTENTS_FIELD_NUMBER: _ClassVar[int]
    GENERATORS_FIELD_NUMBER: _ClassVar[int]
    HTML: InteractionResponse.MarkupType
    INTERACTIONMARKUPTYPE_FIELD_NUMBER: _ClassVar[int]
    INTERACTIONMARKUP_FIELD_NUMBER: _ClassVar[int]
    MESSAGEMETADATA_FIELD_NUMBER: _ClassVar[int]
    PARTNAME_FIELD_NUMBER: _ClassVar[int]
    PLUGINCONFIGURATION_FIELD_NUMBER: _ClassVar[int]
    RULES_FIELD_NUMBER: _ClassVar[int]
    contents: Body
    generators: _containers.MessageMap[str, Generator]
    interactionMarkup: str
    interactionMarkupType: InteractionResponse.MarkupType
    messageMetadata: _struct_pb2.Struct
    partName: str
    pluginConfiguration: PluginConfiguration
    rules: _containers.MessageMap[str, MatchingRules]
    def __init__(self, contents: _Optional[_Union[Body, _Mapping]] = ..., rules: _Optional[_Mapping[str, MatchingRules]] = ..., generators: _Optional[_Mapping[str, Generator]] = ..., messageMetadata: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., pluginConfiguration: _Optional[_Union[PluginConfiguration, _Mapping]] = ..., interactionMarkup: _Optional[str] = ..., interactionMarkupType: _Optional[_Union[InteractionResponse.MarkupType, str]] = ..., partName: _Optional[str] = ...) -> None: ...

class MatchingRule(_message.Message):
    __slots__ = ["type", "values"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    type: str
    values: _struct_pb2.Struct
    def __init__(self, type: _Optional[str] = ..., values: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class MatchingRules(_message.Message):
    __slots__ = ["rule"]
    RULE_FIELD_NUMBER: _ClassVar[int]
    rule: _containers.RepeatedCompositeFieldContainer[MatchingRule]
    def __init__(self, rule: _Optional[_Iterable[_Union[MatchingRule, _Mapping]]] = ...) -> None: ...

class MetadataValue(_message.Message):
    __slots__ = ["binaryValue", "nonBinaryValue"]
    BINARYVALUE_FIELD_NUMBER: _ClassVar[int]
    NONBINARYVALUE_FIELD_NUMBER: _ClassVar[int]
    binaryValue: bytes
    nonBinaryValue: _struct_pb2.Value
    def __init__(self, nonBinaryValue: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ..., binaryValue: _Optional[bytes] = ...) -> None: ...

class MockServerDetails(_message.Message):
    __slots__ = ["address", "key", "port"]
    ADDRESS_FIELD_NUMBER: _ClassVar[int]
    KEY_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    address: str
    key: str
    port: int
    def __init__(self, key: _Optional[str] = ..., port: _Optional[int] = ..., address: _Optional[str] = ...) -> None: ...

class MockServerRequest(_message.Message):
    __slots__ = ["serverKey"]
    SERVERKEY_FIELD_NUMBER: _ClassVar[int]
    serverKey: str
    def __init__(self, serverKey: _Optional[str] = ...) -> None: ...

class MockServerResult(_message.Message):
    __slots__ = ["error", "mismatches", "path"]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    MISMATCHES_FIELD_NUMBER: _ClassVar[int]
    PATH_FIELD_NUMBER: _ClassVar[int]
    error: str
    mismatches: _containers.RepeatedCompositeFieldContainer[ContentMismatch]
    path: str
    def __init__(self, path: _Optional[str] = ..., error: _Optional[str] = ..., mismatches: _Optional[_Iterable[_Union[ContentMismatch, _Mapping]]] = ...) -> None: ...

class MockServerResults(_message.Message):
    __slots__ = ["ok", "results"]
    OK_FIELD_NUMBER: _ClassVar[int]
    RESULTS_FIELD_NUMBER: _ClassVar[int]
    ok: bool
    results: _containers.RepeatedCompositeFieldContainer[MockServerResult]
    def __init__(self, ok: bool = ..., results: _Optional[_Iterable[_Union[MockServerResult, _Mapping]]] = ...) -> None: ...

class PluginConfiguration(_message.Message):
    __slots__ = ["interactionConfiguration", "pactConfiguration"]
    INTERACTIONCONFIGURATION_FIELD_NUMBER: _ClassVar[int]
    PACTCONFIGURATION_FIELD_NUMBER: _ClassVar[int]
    interactionConfiguration: _struct_pb2.Struct
    pactConfiguration: _struct_pb2.Struct
    def __init__(self, interactionConfiguration: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., pactConfiguration: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class ShutdownMockServerRequest(_message.Message):
    __slots__ = ["serverKey"]
    SERVERKEY_FIELD_NUMBER: _ClassVar[int]
    serverKey: str
    def __init__(self, serverKey: _Optional[str] = ...) -> None: ...

class ShutdownMockServerResponse(_message.Message):
    __slots__ = ["ok", "results"]
    OK_FIELD_NUMBER: _ClassVar[int]
    RESULTS_FIELD_NUMBER: _ClassVar[int]
    ok: bool
    results: _containers.RepeatedCompositeFieldContainer[MockServerResult]
    def __init__(self, ok: bool = ..., results: _Optional[_Iterable[_Union[MockServerResult, _Mapping]]] = ...) -> None: ...

class StartMockServerRequest(_message.Message):
    __slots__ = ["hostInterface", "pact", "port", "tls"]
    HOSTINTERFACE_FIELD_NUMBER: _ClassVar[int]
    PACT_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    TLS_FIELD_NUMBER: _ClassVar[int]
    hostInterface: str
    pact: str
    port: int
    tls: bool
    def __init__(self, hostInterface: _Optional[str] = ..., port: _Optional[int] = ..., tls: bool = ..., pact: _Optional[str] = ...) -> None: ...

class StartMockServerResponse(_message.Message):
    __slots__ = ["details", "error"]
    DETAILS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    details: MockServerDetails
    error: str
    def __init__(self, error: _Optional[str] = ..., details: _Optional[_Union[MockServerDetails, _Mapping]] = ...) -> None: ...

class VerificationPreparationRequest(_message.Message):
    __slots__ = ["config", "interactionKey", "pact"]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    INTERACTIONKEY_FIELD_NUMBER: _ClassVar[int]
    PACT_FIELD_NUMBER: _ClassVar[int]
    config: _struct_pb2.Struct
    interactionKey: str
    pact: str
    def __init__(self, pact: _Optional[str] = ..., interactionKey: _Optional[str] = ..., config: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class VerificationPreparationResponse(_message.Message):
    __slots__ = ["error", "interactionData"]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    INTERACTIONDATA_FIELD_NUMBER: _ClassVar[int]
    error: str
    interactionData: InteractionData
    def __init__(self, error: _Optional[str] = ..., interactionData: _Optional[_Union[InteractionData, _Mapping]] = ...) -> None: ...

class VerificationResult(_message.Message):
    __slots__ = ["mismatches", "output", "responseData", "success"]
    MISMATCHES_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_FIELD_NUMBER: _ClassVar[int]
    RESPONSEDATA_FIELD_NUMBER: _ClassVar[int]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    mismatches: _containers.RepeatedCompositeFieldContainer[VerificationResultItem]
    output: _containers.RepeatedScalarFieldContainer[str]
    responseData: InteractionData
    success: bool
    def __init__(self, success: bool = ..., responseData: _Optional[_Union[InteractionData, _Mapping]] = ..., mismatches: _Optional[_Iterable[_Union[VerificationResultItem, _Mapping]]] = ..., output: _Optional[_Iterable[str]] = ...) -> None: ...

class VerificationResultItem(_message.Message):
    __slots__ = ["error", "mismatch"]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    MISMATCH_FIELD_NUMBER: _ClassVar[int]
    error: str
    mismatch: ContentMismatch
    def __init__(self, error: _Optional[str] = ..., mismatch: _Optional[_Union[ContentMismatch, _Mapping]] = ...) -> None: ...

class VerifyInteractionRequest(_message.Message):
    __slots__ = ["config", "interactionData", "interactionKey", "pact"]
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    INTERACTIONDATA_FIELD_NUMBER: _ClassVar[int]
    INTERACTIONKEY_FIELD_NUMBER: _ClassVar[int]
    PACT_FIELD_NUMBER: _ClassVar[int]
    config: _struct_pb2.Struct
    interactionData: InteractionData
    interactionKey: str
    pact: str
    def __init__(self, interactionData: _Optional[_Union[InteractionData, _Mapping]] = ..., config: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., pact: _Optional[str] = ..., interactionKey: _Optional[str] = ...) -> None: ...

class VerifyInteractionResponse(_message.Message):
    __slots__ = ["error", "result"]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    error: str
    result: VerificationResult
    def __init__(self, error: _Optional[str] = ..., result: _Optional[_Union[VerificationResult, _Mapping]] = ...) -> None: ...
