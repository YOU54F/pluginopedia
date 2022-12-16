package io.pact.plugin

import com.google.protobuf.Empty
import io.grpc.CallOptions
import io.grpc.CallOptions.DEFAULT
import io.grpc.Channel
import io.grpc.Metadata
import io.grpc.MethodDescriptor
import io.grpc.ServerServiceDefinition
import io.grpc.ServerServiceDefinition.builder
import io.grpc.ServiceDescriptor
import io.grpc.Status
import io.grpc.Status.UNIMPLEMENTED
import io.grpc.StatusException
import io.grpc.kotlin.AbstractCoroutineServerImpl
import io.grpc.kotlin.AbstractCoroutineStub
import io.grpc.kotlin.ClientCalls
import io.grpc.kotlin.ClientCalls.unaryRpc
import io.grpc.kotlin.ServerCalls
import io.grpc.kotlin.ServerCalls.unaryServerMethodDefinition
import io.grpc.kotlin.StubFor
import io.pact.plugin.PactPluginGrpc.getServiceDescriptor
import kotlin.String
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic

/**
 * Holder for Kotlin coroutine-based client and server APIs for io.pact.plugin.PactPlugin.
 */
object PactPluginGrpcKt {
  const val SERVICE_NAME: String = PactPluginGrpc.SERVICE_NAME

  @JvmStatic
  val serviceDescriptor: ServiceDescriptor
    get() = PactPluginGrpc.getServiceDescriptor()

  val initPluginMethod: MethodDescriptor<Plugin.InitPluginRequest, Plugin.InitPluginResponse>
    @JvmStatic
    get() = PactPluginGrpc.getInitPluginMethod()

  val updateCatalogueMethod: MethodDescriptor<Plugin.Catalogue, Empty>
    @JvmStatic
    get() = PactPluginGrpc.getUpdateCatalogueMethod()

  val compareContentsMethod: MethodDescriptor<Plugin.CompareContentsRequest,
      Plugin.CompareContentsResponse>
    @JvmStatic
    get() = PactPluginGrpc.getCompareContentsMethod()

  val configureInteractionMethod: MethodDescriptor<Plugin.ConfigureInteractionRequest,
      Plugin.ConfigureInteractionResponse>
    @JvmStatic
    get() = PactPluginGrpc.getConfigureInteractionMethod()

  val generateContentMethod: MethodDescriptor<Plugin.GenerateContentRequest,
      Plugin.GenerateContentResponse>
    @JvmStatic
    get() = PactPluginGrpc.getGenerateContentMethod()

  val startMockServerMethod: MethodDescriptor<Plugin.StartMockServerRequest,
      Plugin.StartMockServerResponse>
    @JvmStatic
    get() = PactPluginGrpc.getStartMockServerMethod()

  val shutdownMockServerMethod: MethodDescriptor<Plugin.ShutdownMockServerRequest,
      Plugin.ShutdownMockServerResponse>
    @JvmStatic
    get() = PactPluginGrpc.getShutdownMockServerMethod()

  val getMockServerResultsMethod: MethodDescriptor<Plugin.MockServerRequest,
      Plugin.MockServerResults>
    @JvmStatic
    get() = PactPluginGrpc.getGetMockServerResultsMethod()

  val prepareInteractionForVerificationMethod:
      MethodDescriptor<Plugin.VerificationPreparationRequest,
      Plugin.VerificationPreparationResponse>
    @JvmStatic
    get() = PactPluginGrpc.getPrepareInteractionForVerificationMethod()

  val verifyInteractionMethod: MethodDescriptor<Plugin.VerifyInteractionRequest,
      Plugin.VerifyInteractionResponse>
    @JvmStatic
    get() = PactPluginGrpc.getVerifyInteractionMethod()

  /**
   * A stub for issuing RPCs to a(n) io.pact.plugin.PactPlugin service as suspending coroutines.
   */
  @StubFor(PactPluginGrpc::class)
  class PactPluginCoroutineStub @JvmOverloads constructor(
    channel: Channel,
    callOptions: CallOptions = DEFAULT
  ) : AbstractCoroutineStub<PactPluginCoroutineStub>(channel, callOptions) {
    override fun build(channel: Channel, callOptions: CallOptions): PactPluginCoroutineStub =
        PactPluginCoroutineStub(channel, callOptions)

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun initPlugin(request: Plugin.InitPluginRequest): Plugin.InitPluginResponse = unaryRpc(
      channel,
      PactPluginGrpc.getInitPluginMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun updateCatalogue(request: Plugin.Catalogue): Empty = unaryRpc(
      channel,
      PactPluginGrpc.getUpdateCatalogueMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun compareContents(request: Plugin.CompareContentsRequest):
        Plugin.CompareContentsResponse = unaryRpc(
      channel,
      PactPluginGrpc.getCompareContentsMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun configureInteraction(request: Plugin.ConfigureInteractionRequest):
        Plugin.ConfigureInteractionResponse = unaryRpc(
      channel,
      PactPluginGrpc.getConfigureInteractionMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun generateContent(request: Plugin.GenerateContentRequest):
        Plugin.GenerateContentResponse = unaryRpc(
      channel,
      PactPluginGrpc.getGenerateContentMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun startMockServer(request: Plugin.StartMockServerRequest):
        Plugin.StartMockServerResponse = unaryRpc(
      channel,
      PactPluginGrpc.getStartMockServerMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun shutdownMockServer(request: Plugin.ShutdownMockServerRequest):
        Plugin.ShutdownMockServerResponse = unaryRpc(
      channel,
      PactPluginGrpc.getShutdownMockServerMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun getMockServerResults(request: Plugin.MockServerRequest): Plugin.MockServerResults =
        unaryRpc(
      channel,
      PactPluginGrpc.getGetMockServerResultsMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun prepareInteractionForVerification(request: Plugin.VerificationPreparationRequest):
        Plugin.VerificationPreparationResponse = unaryRpc(
      channel,
      PactPluginGrpc.getPrepareInteractionForVerificationMethod(),
      request,
      callOptions,
      Metadata()
    )
    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @return The single response from the server.
     */
    suspend fun verifyInteraction(request: Plugin.VerifyInteractionRequest):
        Plugin.VerifyInteractionResponse = unaryRpc(
      channel,
      PactPluginGrpc.getVerifyInteractionMethod(),
      request,
      callOptions,
      Metadata()
    )}

  /**
   * Skeletal implementation of the io.pact.plugin.PactPlugin service based on Kotlin coroutines.
   */
  abstract class PactPluginCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for io.pact.plugin.PactPlugin.InitPlugin.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun initPlugin(request: Plugin.InitPluginRequest): Plugin.InitPluginResponse =
        throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.InitPlugin is unimplemented"))

    /**
     * Returns the response to an RPC for io.pact.plugin.PactPlugin.UpdateCatalogue.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun updateCatalogue(request: Plugin.Catalogue): Empty = throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.UpdateCatalogue is unimplemented"))

    /**
     * Returns the response to an RPC for io.pact.plugin.PactPlugin.CompareContents.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun compareContents(request: Plugin.CompareContentsRequest):
        Plugin.CompareContentsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.CompareContents is unimplemented"))

    /**
     * Returns the response to an RPC for io.pact.plugin.PactPlugin.ConfigureInteraction.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun configureInteraction(request: Plugin.ConfigureInteractionRequest):
        Plugin.ConfigureInteractionResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.ConfigureInteraction is unimplemented"))

    /**
     * Returns the response to an RPC for io.pact.plugin.PactPlugin.GenerateContent.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun generateContent(request: Plugin.GenerateContentRequest):
        Plugin.GenerateContentResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.GenerateContent is unimplemented"))

    /**
     * Returns the response to an RPC for io.pact.plugin.PactPlugin.StartMockServer.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun startMockServer(request: Plugin.StartMockServerRequest):
        Plugin.StartMockServerResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.StartMockServer is unimplemented"))

    /**
     * Returns the response to an RPC for io.pact.plugin.PactPlugin.ShutdownMockServer.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun shutdownMockServer(request: Plugin.ShutdownMockServerRequest):
        Plugin.ShutdownMockServerResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.ShutdownMockServer is unimplemented"))

    /**
     * Returns the response to an RPC for io.pact.plugin.PactPlugin.GetMockServerResults.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun getMockServerResults(request: Plugin.MockServerRequest):
        Plugin.MockServerResults = throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.GetMockServerResults is unimplemented"))

    /**
     * Returns the response to an RPC for
     * io.pact.plugin.PactPlugin.PrepareInteractionForVerification.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend
        fun prepareInteractionForVerification(request: Plugin.VerificationPreparationRequest):
        Plugin.VerificationPreparationResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.PrepareInteractionForVerification is unimplemented"))

    /**
     * Returns the response to an RPC for io.pact.plugin.PactPlugin.VerifyInteraction.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    open suspend fun verifyInteraction(request: Plugin.VerifyInteractionRequest):
        Plugin.VerifyInteractionResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method io.pact.plugin.PactPlugin.VerifyInteraction is unimplemented"))

    final override fun bindService(): ServerServiceDefinition = builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getInitPluginMethod(),
      implementation = ::initPlugin
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getUpdateCatalogueMethod(),
      implementation = ::updateCatalogue
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getCompareContentsMethod(),
      implementation = ::compareContents
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getConfigureInteractionMethod(),
      implementation = ::configureInteraction
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getGenerateContentMethod(),
      implementation = ::generateContent
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getStartMockServerMethod(),
      implementation = ::startMockServer
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getShutdownMockServerMethod(),
      implementation = ::shutdownMockServer
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getGetMockServerResultsMethod(),
      implementation = ::getMockServerResults
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getPrepareInteractionForVerificationMethod(),
      implementation = ::prepareInteractionForVerification
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = PactPluginGrpc.getVerifyInteractionMethod(),
      implementation = ::verifyInteraction
    )).build()
  }
}
