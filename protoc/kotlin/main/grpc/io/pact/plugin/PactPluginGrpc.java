package io.pact.plugin;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.40.1)",
    comments = "Source: plugin.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class PactPluginGrpc {

  private PactPluginGrpc() {}

  public static final String SERVICE_NAME = "io.pact.plugin.PactPlugin";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.InitPluginRequest,
      io.pact.plugin.Plugin.InitPluginResponse> getInitPluginMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "InitPlugin",
      requestType = io.pact.plugin.Plugin.InitPluginRequest.class,
      responseType = io.pact.plugin.Plugin.InitPluginResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.InitPluginRequest,
      io.pact.plugin.Plugin.InitPluginResponse> getInitPluginMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.InitPluginRequest, io.pact.plugin.Plugin.InitPluginResponse> getInitPluginMethod;
    if ((getInitPluginMethod = PactPluginGrpc.getInitPluginMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getInitPluginMethod = PactPluginGrpc.getInitPluginMethod) == null) {
          PactPluginGrpc.getInitPluginMethod = getInitPluginMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.InitPluginRequest, io.pact.plugin.Plugin.InitPluginResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "InitPlugin"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.InitPluginRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.InitPluginResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("InitPlugin"))
              .build();
        }
      }
    }
    return getInitPluginMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.Catalogue,
      com.google.protobuf.Empty> getUpdateCatalogueMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateCatalogue",
      requestType = io.pact.plugin.Plugin.Catalogue.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.Catalogue,
      com.google.protobuf.Empty> getUpdateCatalogueMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.Catalogue, com.google.protobuf.Empty> getUpdateCatalogueMethod;
    if ((getUpdateCatalogueMethod = PactPluginGrpc.getUpdateCatalogueMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getUpdateCatalogueMethod = PactPluginGrpc.getUpdateCatalogueMethod) == null) {
          PactPluginGrpc.getUpdateCatalogueMethod = getUpdateCatalogueMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.Catalogue, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "UpdateCatalogue"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.Catalogue.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("UpdateCatalogue"))
              .build();
        }
      }
    }
    return getUpdateCatalogueMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.CompareContentsRequest,
      io.pact.plugin.Plugin.CompareContentsResponse> getCompareContentsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CompareContents",
      requestType = io.pact.plugin.Plugin.CompareContentsRequest.class,
      responseType = io.pact.plugin.Plugin.CompareContentsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.CompareContentsRequest,
      io.pact.plugin.Plugin.CompareContentsResponse> getCompareContentsMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.CompareContentsRequest, io.pact.plugin.Plugin.CompareContentsResponse> getCompareContentsMethod;
    if ((getCompareContentsMethod = PactPluginGrpc.getCompareContentsMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getCompareContentsMethod = PactPluginGrpc.getCompareContentsMethod) == null) {
          PactPluginGrpc.getCompareContentsMethod = getCompareContentsMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.CompareContentsRequest, io.pact.plugin.Plugin.CompareContentsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CompareContents"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.CompareContentsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.CompareContentsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("CompareContents"))
              .build();
        }
      }
    }
    return getCompareContentsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.ConfigureInteractionRequest,
      io.pact.plugin.Plugin.ConfigureInteractionResponse> getConfigureInteractionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ConfigureInteraction",
      requestType = io.pact.plugin.Plugin.ConfigureInteractionRequest.class,
      responseType = io.pact.plugin.Plugin.ConfigureInteractionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.ConfigureInteractionRequest,
      io.pact.plugin.Plugin.ConfigureInteractionResponse> getConfigureInteractionMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.ConfigureInteractionRequest, io.pact.plugin.Plugin.ConfigureInteractionResponse> getConfigureInteractionMethod;
    if ((getConfigureInteractionMethod = PactPluginGrpc.getConfigureInteractionMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getConfigureInteractionMethod = PactPluginGrpc.getConfigureInteractionMethod) == null) {
          PactPluginGrpc.getConfigureInteractionMethod = getConfigureInteractionMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.ConfigureInteractionRequest, io.pact.plugin.Plugin.ConfigureInteractionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ConfigureInteraction"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.ConfigureInteractionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.ConfigureInteractionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("ConfigureInteraction"))
              .build();
        }
      }
    }
    return getConfigureInteractionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.GenerateContentRequest,
      io.pact.plugin.Plugin.GenerateContentResponse> getGenerateContentMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GenerateContent",
      requestType = io.pact.plugin.Plugin.GenerateContentRequest.class,
      responseType = io.pact.plugin.Plugin.GenerateContentResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.GenerateContentRequest,
      io.pact.plugin.Plugin.GenerateContentResponse> getGenerateContentMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.GenerateContentRequest, io.pact.plugin.Plugin.GenerateContentResponse> getGenerateContentMethod;
    if ((getGenerateContentMethod = PactPluginGrpc.getGenerateContentMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getGenerateContentMethod = PactPluginGrpc.getGenerateContentMethod) == null) {
          PactPluginGrpc.getGenerateContentMethod = getGenerateContentMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.GenerateContentRequest, io.pact.plugin.Plugin.GenerateContentResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GenerateContent"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.GenerateContentRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.GenerateContentResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("GenerateContent"))
              .build();
        }
      }
    }
    return getGenerateContentMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.StartMockServerRequest,
      io.pact.plugin.Plugin.StartMockServerResponse> getStartMockServerMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "StartMockServer",
      requestType = io.pact.plugin.Plugin.StartMockServerRequest.class,
      responseType = io.pact.plugin.Plugin.StartMockServerResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.StartMockServerRequest,
      io.pact.plugin.Plugin.StartMockServerResponse> getStartMockServerMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.StartMockServerRequest, io.pact.plugin.Plugin.StartMockServerResponse> getStartMockServerMethod;
    if ((getStartMockServerMethod = PactPluginGrpc.getStartMockServerMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getStartMockServerMethod = PactPluginGrpc.getStartMockServerMethod) == null) {
          PactPluginGrpc.getStartMockServerMethod = getStartMockServerMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.StartMockServerRequest, io.pact.plugin.Plugin.StartMockServerResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "StartMockServer"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.StartMockServerRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.StartMockServerResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("StartMockServer"))
              .build();
        }
      }
    }
    return getStartMockServerMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.ShutdownMockServerRequest,
      io.pact.plugin.Plugin.ShutdownMockServerResponse> getShutdownMockServerMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ShutdownMockServer",
      requestType = io.pact.plugin.Plugin.ShutdownMockServerRequest.class,
      responseType = io.pact.plugin.Plugin.ShutdownMockServerResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.ShutdownMockServerRequest,
      io.pact.plugin.Plugin.ShutdownMockServerResponse> getShutdownMockServerMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.ShutdownMockServerRequest, io.pact.plugin.Plugin.ShutdownMockServerResponse> getShutdownMockServerMethod;
    if ((getShutdownMockServerMethod = PactPluginGrpc.getShutdownMockServerMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getShutdownMockServerMethod = PactPluginGrpc.getShutdownMockServerMethod) == null) {
          PactPluginGrpc.getShutdownMockServerMethod = getShutdownMockServerMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.ShutdownMockServerRequest, io.pact.plugin.Plugin.ShutdownMockServerResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ShutdownMockServer"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.ShutdownMockServerRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.ShutdownMockServerResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("ShutdownMockServer"))
              .build();
        }
      }
    }
    return getShutdownMockServerMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.MockServerRequest,
      io.pact.plugin.Plugin.MockServerResults> getGetMockServerResultsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetMockServerResults",
      requestType = io.pact.plugin.Plugin.MockServerRequest.class,
      responseType = io.pact.plugin.Plugin.MockServerResults.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.MockServerRequest,
      io.pact.plugin.Plugin.MockServerResults> getGetMockServerResultsMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.MockServerRequest, io.pact.plugin.Plugin.MockServerResults> getGetMockServerResultsMethod;
    if ((getGetMockServerResultsMethod = PactPluginGrpc.getGetMockServerResultsMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getGetMockServerResultsMethod = PactPluginGrpc.getGetMockServerResultsMethod) == null) {
          PactPluginGrpc.getGetMockServerResultsMethod = getGetMockServerResultsMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.MockServerRequest, io.pact.plugin.Plugin.MockServerResults>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetMockServerResults"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.MockServerRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.MockServerResults.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("GetMockServerResults"))
              .build();
        }
      }
    }
    return getGetMockServerResultsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.VerificationPreparationRequest,
      io.pact.plugin.Plugin.VerificationPreparationResponse> getPrepareInteractionForVerificationMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PrepareInteractionForVerification",
      requestType = io.pact.plugin.Plugin.VerificationPreparationRequest.class,
      responseType = io.pact.plugin.Plugin.VerificationPreparationResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.VerificationPreparationRequest,
      io.pact.plugin.Plugin.VerificationPreparationResponse> getPrepareInteractionForVerificationMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.VerificationPreparationRequest, io.pact.plugin.Plugin.VerificationPreparationResponse> getPrepareInteractionForVerificationMethod;
    if ((getPrepareInteractionForVerificationMethod = PactPluginGrpc.getPrepareInteractionForVerificationMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getPrepareInteractionForVerificationMethod = PactPluginGrpc.getPrepareInteractionForVerificationMethod) == null) {
          PactPluginGrpc.getPrepareInteractionForVerificationMethod = getPrepareInteractionForVerificationMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.VerificationPreparationRequest, io.pact.plugin.Plugin.VerificationPreparationResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PrepareInteractionForVerification"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.VerificationPreparationRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.VerificationPreparationResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("PrepareInteractionForVerification"))
              .build();
        }
      }
    }
    return getPrepareInteractionForVerificationMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.pact.plugin.Plugin.VerifyInteractionRequest,
      io.pact.plugin.Plugin.VerifyInteractionResponse> getVerifyInteractionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "VerifyInteraction",
      requestType = io.pact.plugin.Plugin.VerifyInteractionRequest.class,
      responseType = io.pact.plugin.Plugin.VerifyInteractionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.pact.plugin.Plugin.VerifyInteractionRequest,
      io.pact.plugin.Plugin.VerifyInteractionResponse> getVerifyInteractionMethod() {
    io.grpc.MethodDescriptor<io.pact.plugin.Plugin.VerifyInteractionRequest, io.pact.plugin.Plugin.VerifyInteractionResponse> getVerifyInteractionMethod;
    if ((getVerifyInteractionMethod = PactPluginGrpc.getVerifyInteractionMethod) == null) {
      synchronized (PactPluginGrpc.class) {
        if ((getVerifyInteractionMethod = PactPluginGrpc.getVerifyInteractionMethod) == null) {
          PactPluginGrpc.getVerifyInteractionMethod = getVerifyInteractionMethod =
              io.grpc.MethodDescriptor.<io.pact.plugin.Plugin.VerifyInteractionRequest, io.pact.plugin.Plugin.VerifyInteractionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "VerifyInteraction"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.VerifyInteractionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.pact.plugin.Plugin.VerifyInteractionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new PactPluginMethodDescriptorSupplier("VerifyInteraction"))
              .build();
        }
      }
    }
    return getVerifyInteractionMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static PactPluginStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PactPluginStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PactPluginStub>() {
        @java.lang.Override
        public PactPluginStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PactPluginStub(channel, callOptions);
        }
      };
    return PactPluginStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static PactPluginBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PactPluginBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PactPluginBlockingStub>() {
        @java.lang.Override
        public PactPluginBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PactPluginBlockingStub(channel, callOptions);
        }
      };
    return PactPluginBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static PactPluginFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<PactPluginFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<PactPluginFutureStub>() {
        @java.lang.Override
        public PactPluginFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new PactPluginFutureStub(channel, callOptions);
        }
      };
    return PactPluginFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class PactPluginImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Check that the plugin loaded OK. Returns the catalogue entries describing what the plugin provides
     * </pre>
     */
    public void initPlugin(io.pact.plugin.Plugin.InitPluginRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.InitPluginResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getInitPluginMethod(), responseObserver);
    }

    /**
     * <pre>
     * Updated catalogue. This will be sent when the core catalogue has been updated (probably by a plugin loading).
     * </pre>
     */
    public void updateCatalogue(io.pact.plugin.Plugin.Catalogue request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getUpdateCatalogueMethod(), responseObserver);
    }

    /**
     * <pre>
     * Request to perform a comparison of some contents (matching request)
     * </pre>
     */
    public void compareContents(io.pact.plugin.Plugin.CompareContentsRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.CompareContentsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCompareContentsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Request to configure/setup the interaction for later verification. Data returned will be persisted in the pact file.
     * </pre>
     */
    public void configureInteraction(io.pact.plugin.Plugin.ConfigureInteractionRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.ConfigureInteractionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getConfigureInteractionMethod(), responseObserver);
    }

    /**
     * <pre>
     * Request to generate the content using any defined generators
     * </pre>
     */
    public void generateContent(io.pact.plugin.Plugin.GenerateContentRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.GenerateContentResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGenerateContentMethod(), responseObserver);
    }

    /**
     * <pre>
     * Start a mock server
     * </pre>
     */
    public void startMockServer(io.pact.plugin.Plugin.StartMockServerRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.StartMockServerResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getStartMockServerMethod(), responseObserver);
    }

    /**
     * <pre>
     * Shutdown a running mock server
     * TODO: Replace the message types with MockServerRequest and MockServerResults in the next major version
     * </pre>
     */
    public void shutdownMockServer(io.pact.plugin.Plugin.ShutdownMockServerRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.ShutdownMockServerResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getShutdownMockServerMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get the matching results from a running mock server
     * </pre>
     */
    public void getMockServerResults(io.pact.plugin.Plugin.MockServerRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.MockServerResults> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetMockServerResultsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Prepare an interaction for verification. This should return any data required to construct any request
     * so that it can be amended before the verification is run
     * </pre>
     */
    public void prepareInteractionForVerification(io.pact.plugin.Plugin.VerificationPreparationRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.VerificationPreparationResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepareInteractionForVerificationMethod(), responseObserver);
    }

    /**
     * <pre>
     * Execute the verification for the interaction.
     * </pre>
     */
    public void verifyInteraction(io.pact.plugin.Plugin.VerifyInteractionRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.VerifyInteractionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getVerifyInteractionMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getInitPluginMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.InitPluginRequest,
                io.pact.plugin.Plugin.InitPluginResponse>(
                  this, METHODID_INIT_PLUGIN)))
          .addMethod(
            getUpdateCatalogueMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.Catalogue,
                com.google.protobuf.Empty>(
                  this, METHODID_UPDATE_CATALOGUE)))
          .addMethod(
            getCompareContentsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.CompareContentsRequest,
                io.pact.plugin.Plugin.CompareContentsResponse>(
                  this, METHODID_COMPARE_CONTENTS)))
          .addMethod(
            getConfigureInteractionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.ConfigureInteractionRequest,
                io.pact.plugin.Plugin.ConfigureInteractionResponse>(
                  this, METHODID_CONFIGURE_INTERACTION)))
          .addMethod(
            getGenerateContentMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.GenerateContentRequest,
                io.pact.plugin.Plugin.GenerateContentResponse>(
                  this, METHODID_GENERATE_CONTENT)))
          .addMethod(
            getStartMockServerMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.StartMockServerRequest,
                io.pact.plugin.Plugin.StartMockServerResponse>(
                  this, METHODID_START_MOCK_SERVER)))
          .addMethod(
            getShutdownMockServerMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.ShutdownMockServerRequest,
                io.pact.plugin.Plugin.ShutdownMockServerResponse>(
                  this, METHODID_SHUTDOWN_MOCK_SERVER)))
          .addMethod(
            getGetMockServerResultsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.MockServerRequest,
                io.pact.plugin.Plugin.MockServerResults>(
                  this, METHODID_GET_MOCK_SERVER_RESULTS)))
          .addMethod(
            getPrepareInteractionForVerificationMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.VerificationPreparationRequest,
                io.pact.plugin.Plugin.VerificationPreparationResponse>(
                  this, METHODID_PREPARE_INTERACTION_FOR_VERIFICATION)))
          .addMethod(
            getVerifyInteractionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.pact.plugin.Plugin.VerifyInteractionRequest,
                io.pact.plugin.Plugin.VerifyInteractionResponse>(
                  this, METHODID_VERIFY_INTERACTION)))
          .build();
    }
  }

  /**
   */
  public static final class PactPluginStub extends io.grpc.stub.AbstractAsyncStub<PactPluginStub> {
    private PactPluginStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PactPluginStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PactPluginStub(channel, callOptions);
    }

    /**
     * <pre>
     * Check that the plugin loaded OK. Returns the catalogue entries describing what the plugin provides
     * </pre>
     */
    public void initPlugin(io.pact.plugin.Plugin.InitPluginRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.InitPluginResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getInitPluginMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Updated catalogue. This will be sent when the core catalogue has been updated (probably by a plugin loading).
     * </pre>
     */
    public void updateCatalogue(io.pact.plugin.Plugin.Catalogue request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getUpdateCatalogueMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Request to perform a comparison of some contents (matching request)
     * </pre>
     */
    public void compareContents(io.pact.plugin.Plugin.CompareContentsRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.CompareContentsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCompareContentsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Request to configure/setup the interaction for later verification. Data returned will be persisted in the pact file.
     * </pre>
     */
    public void configureInteraction(io.pact.plugin.Plugin.ConfigureInteractionRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.ConfigureInteractionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getConfigureInteractionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Request to generate the content using any defined generators
     * </pre>
     */
    public void generateContent(io.pact.plugin.Plugin.GenerateContentRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.GenerateContentResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGenerateContentMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Start a mock server
     * </pre>
     */
    public void startMockServer(io.pact.plugin.Plugin.StartMockServerRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.StartMockServerResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getStartMockServerMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Shutdown a running mock server
     * TODO: Replace the message types with MockServerRequest and MockServerResults in the next major version
     * </pre>
     */
    public void shutdownMockServer(io.pact.plugin.Plugin.ShutdownMockServerRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.ShutdownMockServerResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getShutdownMockServerMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get the matching results from a running mock server
     * </pre>
     */
    public void getMockServerResults(io.pact.plugin.Plugin.MockServerRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.MockServerResults> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetMockServerResultsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Prepare an interaction for verification. This should return any data required to construct any request
     * so that it can be amended before the verification is run
     * </pre>
     */
    public void prepareInteractionForVerification(io.pact.plugin.Plugin.VerificationPreparationRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.VerificationPreparationResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPrepareInteractionForVerificationMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Execute the verification for the interaction.
     * </pre>
     */
    public void verifyInteraction(io.pact.plugin.Plugin.VerifyInteractionRequest request,
        io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.VerifyInteractionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getVerifyInteractionMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class PactPluginBlockingStub extends io.grpc.stub.AbstractBlockingStub<PactPluginBlockingStub> {
    private PactPluginBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PactPluginBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PactPluginBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Check that the plugin loaded OK. Returns the catalogue entries describing what the plugin provides
     * </pre>
     */
    public io.pact.plugin.Plugin.InitPluginResponse initPlugin(io.pact.plugin.Plugin.InitPluginRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getInitPluginMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Updated catalogue. This will be sent when the core catalogue has been updated (probably by a plugin loading).
     * </pre>
     */
    public com.google.protobuf.Empty updateCatalogue(io.pact.plugin.Plugin.Catalogue request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getUpdateCatalogueMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Request to perform a comparison of some contents (matching request)
     * </pre>
     */
    public io.pact.plugin.Plugin.CompareContentsResponse compareContents(io.pact.plugin.Plugin.CompareContentsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCompareContentsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Request to configure/setup the interaction for later verification. Data returned will be persisted in the pact file.
     * </pre>
     */
    public io.pact.plugin.Plugin.ConfigureInteractionResponse configureInteraction(io.pact.plugin.Plugin.ConfigureInteractionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getConfigureInteractionMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Request to generate the content using any defined generators
     * </pre>
     */
    public io.pact.plugin.Plugin.GenerateContentResponse generateContent(io.pact.plugin.Plugin.GenerateContentRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGenerateContentMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Start a mock server
     * </pre>
     */
    public io.pact.plugin.Plugin.StartMockServerResponse startMockServer(io.pact.plugin.Plugin.StartMockServerRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getStartMockServerMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Shutdown a running mock server
     * TODO: Replace the message types with MockServerRequest and MockServerResults in the next major version
     * </pre>
     */
    public io.pact.plugin.Plugin.ShutdownMockServerResponse shutdownMockServer(io.pact.plugin.Plugin.ShutdownMockServerRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getShutdownMockServerMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get the matching results from a running mock server
     * </pre>
     */
    public io.pact.plugin.Plugin.MockServerResults getMockServerResults(io.pact.plugin.Plugin.MockServerRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetMockServerResultsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Prepare an interaction for verification. This should return any data required to construct any request
     * so that it can be amended before the verification is run
     * </pre>
     */
    public io.pact.plugin.Plugin.VerificationPreparationResponse prepareInteractionForVerification(io.pact.plugin.Plugin.VerificationPreparationRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPrepareInteractionForVerificationMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Execute the verification for the interaction.
     * </pre>
     */
    public io.pact.plugin.Plugin.VerifyInteractionResponse verifyInteraction(io.pact.plugin.Plugin.VerifyInteractionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getVerifyInteractionMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class PactPluginFutureStub extends io.grpc.stub.AbstractFutureStub<PactPluginFutureStub> {
    private PactPluginFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected PactPluginFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new PactPluginFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Check that the plugin loaded OK. Returns the catalogue entries describing what the plugin provides
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.pact.plugin.Plugin.InitPluginResponse> initPlugin(
        io.pact.plugin.Plugin.InitPluginRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getInitPluginMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Updated catalogue. This will be sent when the core catalogue has been updated (probably by a plugin loading).
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> updateCatalogue(
        io.pact.plugin.Plugin.Catalogue request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getUpdateCatalogueMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Request to perform a comparison of some contents (matching request)
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.pact.plugin.Plugin.CompareContentsResponse> compareContents(
        io.pact.plugin.Plugin.CompareContentsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCompareContentsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Request to configure/setup the interaction for later verification. Data returned will be persisted in the pact file.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.pact.plugin.Plugin.ConfigureInteractionResponse> configureInteraction(
        io.pact.plugin.Plugin.ConfigureInteractionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getConfigureInteractionMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Request to generate the content using any defined generators
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.pact.plugin.Plugin.GenerateContentResponse> generateContent(
        io.pact.plugin.Plugin.GenerateContentRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGenerateContentMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Start a mock server
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.pact.plugin.Plugin.StartMockServerResponse> startMockServer(
        io.pact.plugin.Plugin.StartMockServerRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getStartMockServerMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Shutdown a running mock server
     * TODO: Replace the message types with MockServerRequest and MockServerResults in the next major version
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.pact.plugin.Plugin.ShutdownMockServerResponse> shutdownMockServer(
        io.pact.plugin.Plugin.ShutdownMockServerRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getShutdownMockServerMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get the matching results from a running mock server
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.pact.plugin.Plugin.MockServerResults> getMockServerResults(
        io.pact.plugin.Plugin.MockServerRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetMockServerResultsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Prepare an interaction for verification. This should return any data required to construct any request
     * so that it can be amended before the verification is run
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.pact.plugin.Plugin.VerificationPreparationResponse> prepareInteractionForVerification(
        io.pact.plugin.Plugin.VerificationPreparationRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPrepareInteractionForVerificationMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Execute the verification for the interaction.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.pact.plugin.Plugin.VerifyInteractionResponse> verifyInteraction(
        io.pact.plugin.Plugin.VerifyInteractionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getVerifyInteractionMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_INIT_PLUGIN = 0;
  private static final int METHODID_UPDATE_CATALOGUE = 1;
  private static final int METHODID_COMPARE_CONTENTS = 2;
  private static final int METHODID_CONFIGURE_INTERACTION = 3;
  private static final int METHODID_GENERATE_CONTENT = 4;
  private static final int METHODID_START_MOCK_SERVER = 5;
  private static final int METHODID_SHUTDOWN_MOCK_SERVER = 6;
  private static final int METHODID_GET_MOCK_SERVER_RESULTS = 7;
  private static final int METHODID_PREPARE_INTERACTION_FOR_VERIFICATION = 8;
  private static final int METHODID_VERIFY_INTERACTION = 9;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final PactPluginImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(PactPluginImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_INIT_PLUGIN:
          serviceImpl.initPlugin((io.pact.plugin.Plugin.InitPluginRequest) request,
              (io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.InitPluginResponse>) responseObserver);
          break;
        case METHODID_UPDATE_CATALOGUE:
          serviceImpl.updateCatalogue((io.pact.plugin.Plugin.Catalogue) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        case METHODID_COMPARE_CONTENTS:
          serviceImpl.compareContents((io.pact.plugin.Plugin.CompareContentsRequest) request,
              (io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.CompareContentsResponse>) responseObserver);
          break;
        case METHODID_CONFIGURE_INTERACTION:
          serviceImpl.configureInteraction((io.pact.plugin.Plugin.ConfigureInteractionRequest) request,
              (io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.ConfigureInteractionResponse>) responseObserver);
          break;
        case METHODID_GENERATE_CONTENT:
          serviceImpl.generateContent((io.pact.plugin.Plugin.GenerateContentRequest) request,
              (io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.GenerateContentResponse>) responseObserver);
          break;
        case METHODID_START_MOCK_SERVER:
          serviceImpl.startMockServer((io.pact.plugin.Plugin.StartMockServerRequest) request,
              (io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.StartMockServerResponse>) responseObserver);
          break;
        case METHODID_SHUTDOWN_MOCK_SERVER:
          serviceImpl.shutdownMockServer((io.pact.plugin.Plugin.ShutdownMockServerRequest) request,
              (io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.ShutdownMockServerResponse>) responseObserver);
          break;
        case METHODID_GET_MOCK_SERVER_RESULTS:
          serviceImpl.getMockServerResults((io.pact.plugin.Plugin.MockServerRequest) request,
              (io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.MockServerResults>) responseObserver);
          break;
        case METHODID_PREPARE_INTERACTION_FOR_VERIFICATION:
          serviceImpl.prepareInteractionForVerification((io.pact.plugin.Plugin.VerificationPreparationRequest) request,
              (io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.VerificationPreparationResponse>) responseObserver);
          break;
        case METHODID_VERIFY_INTERACTION:
          serviceImpl.verifyInteraction((io.pact.plugin.Plugin.VerifyInteractionRequest) request,
              (io.grpc.stub.StreamObserver<io.pact.plugin.Plugin.VerifyInteractionResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class PactPluginBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    PactPluginBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return io.pact.plugin.Plugin.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("PactPlugin");
    }
  }

  private static final class PactPluginFileDescriptorSupplier
      extends PactPluginBaseDescriptorSupplier {
    PactPluginFileDescriptorSupplier() {}
  }

  private static final class PactPluginMethodDescriptorSupplier
      extends PactPluginBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    PactPluginMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (PactPluginGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new PactPluginFileDescriptorSupplier())
              .addMethod(getInitPluginMethod())
              .addMethod(getUpdateCatalogueMethod())
              .addMethod(getCompareContentsMethod())
              .addMethod(getConfigureInteractionMethod())
              .addMethod(getGenerateContentMethod())
              .addMethod(getStartMockServerMethod())
              .addMethod(getShutdownMockServerMethod())
              .addMethod(getGetMockServerResultsMethod())
              .addMethod(getPrepareInteractionForVerificationMethod())
              .addMethod(getVerifyInteractionMethod())
              .build();
        }
      }
    }
    return result;
  }
}
