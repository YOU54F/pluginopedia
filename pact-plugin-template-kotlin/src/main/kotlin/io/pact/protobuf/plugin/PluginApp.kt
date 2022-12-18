package io.pact.protobuf.plugin
// import au.com.dius.pact.core.model.constructValidPath
// import au.com.dius.pact.core.model.generators.Generator
// import au.com.dius.pact.core.model.matchingrules.EachKeyMatcher
// import au.com.dius.pact.core.model.matchingrules.EachValueMatcher
// import au.com.dius.pact.core.model.matchingrules.MatchingRuleCategory
// import au.com.dius.pact.core.model.matchingrules.TypeMatcher
// import au.com.dius.pact.core.model.matchingrules.ValuesMatcher
// import au.com.dius.pact.core.model.matchingrules.expressions.MatchingRuleDefinition
// import au.com.dius.pact.core.model.matchingrules.expressions.ValueType
// import au.com.dius.pact.core.support.Either
// import au.com.dius.pact.core.support.isNotEmpty
// import com.github.michaelbull.result.Err
// import com.github.michaelbull.result.Ok

import com.google.protobuf.ByteString
import com.google.protobuf.BytesValue
import com.google.protobuf.Empty
import io.grpc.Server
import io.grpc.ServerBuilder
import io.pact.plugin.PactPluginGrpcKt
import io.pact.plugin.Plugin
import java.util.UUID.randomUUID
import kotlinx.coroutines.*
import mu.KLogging

class PluginApp(
    private val server: Server = ServerBuilder.forPort(0).addService(PactPluginService()).build(),
    private val serverKey: String = randomUUID().toString()
) {
  fun start() {
    server.start()
    println("{\"port\":${server.port}, \"serverKey\":\"$serverKey\"}")
    System.out.flush()
    Runtime.getRuntime()
        .addShutdownHook(
            Thread {
              println("*** shutting down gRPC server since JVM is shutting down")
              server.shutdownNow()
              println("*** server shut down")
            }
        )
  }

  fun stop() {
    server.shutdown()
  }

  fun blockUntilShutdown() {
    server.awaitTermination()
  }
}

class PactPluginService : PactPluginGrpcKt.PactPluginCoroutineImplBase() {
  override suspend fun initPlugin(request: Plugin.InitPluginRequest): Plugin.InitPluginResponse {
    logger.debug { "Init request from ${request.implementation}/${request.version}" }
    return Plugin.InitPluginResponse.newBuilder()
        .apply {
          this.addCatalogueBuilder()
              .setType(Plugin.CatalogueEntry.EntryType.CONTENT_MATCHER)
              .setKey("foo")
              .putValues("content-types", "application/foo")
        }
        .build()
  }

  override suspend fun updateCatalogue(request: Plugin.Catalogue): Empty {
    logger.debug { "Got update catalogue request: TODO" }
    return Empty.newBuilder().build()
  }

  override suspend fun compareContents(
      request: Plugin.CompareContentsRequest
  ): Plugin.CompareContentsResponse {
    logger.debug { "Got compareContents request $request" }
    try {
      val expectedContents = request.expected.content.value.toStringUtf8()
      val actualContents = request.actual.content.value.toStringUtf8()
      logger.debug { "Pact expectedContents: ${expectedContents}" }
      logger.debug { "Pact actualContents: ${actualContents}" }
      val response = Plugin.CompareContentsResponse.newBuilder()
      if (actualContents != expectedContents) {
        // TODO: Make this a list of mis-matchs, and pass the
        // items into the builder
        val mismatch = listOf("f")

        for (item in mismatch) {
          response
              .putResults(
                  "$",
                  Plugin.ContentMismatches.newBuilder()
                      .addAllMismatches(
                          item.map {
                            val builder =
                                Plugin.ContentMismatch.newBuilder()
                                    .setExpected(
                                        BytesValue.newBuilder()
                                            .setValue(
                                                ByteString.copyFrom(expectedContents.toByteArray())
                                            )
                                            .build()
                                    )
                                    .setActual(
                                        BytesValue.newBuilder()
                                            .setValue(
                                                ByteString.copyFrom(actualContents.toByteArray())
                                            )
                                            .build()
                                    )
                                    .setMismatch(
                                        "expected body hello is not equal to actual body world"
                                    )
                                    .setPath("$")

                            builder.diff = "diff"
                            builder.build()
                          }
                      )
                      .build()
              )
              .setTypeMismatch(
                  Plugin.ContentTypeMismatch.newBuilder()
                      .setActual(actualContents)
                      .setExpected(expectedContents)
                      .build()
              )
              .setError("actual does not meet expected")
              .build()
        }

        return response.build()
      } else {}

      return response.build()
    } catch (ex: Throwable) {
      logger.error(ex) { "Failed to generate response" }
      return Plugin.CompareContentsResponse.newBuilder().setError(ex.message).build()
    }
  }

  override suspend fun configureInteraction(
      request: Plugin.ConfigureInteractionRequest
  ): Plugin.ConfigureInteractionResponse {
    logger.debug {
      "\n\n\nReceived configureInteraction request for '${request.contentType}'\n\n\n"
    }

    try {
      val config = request.contentsConfig.fieldsMap
      val interactions: MutableList<Plugin.InteractionResponse.Builder> = mutableListOf()
      if (config.containsKey("request")) {
        logger.debug { "contentsConfig for request '${config}'" }
        val builder = Plugin.InteractionResponse.newBuilder()
        builder.contentsBuilder.setContentType("application/foo")
        builder.contentsBuilder.setContent(
            BytesValue.newBuilder().setValue(ByteString.copyFrom("hello".toByteArray())).build()
        )
        builder.partName = "request"
        interactions.add(builder)
      }
      if (config.containsKey("response")) {
        val builder = Plugin.InteractionResponse.newBuilder()
        builder.contentsBuilder.setContentType("application/foo")
        builder.contentsBuilder.setContent(
            BytesValue.newBuilder().setValue(ByteString.copyFrom("world".toByteArray())).build()
        )
        builder.partName = "response"
        interactions.add(builder)
      }
      val builder = Plugin.ConfigureInteractionResponse.newBuilder()
      for (result in interactions) {
        logger.debug { "Adding interaction $result" }
        builder.addInteraction(result)
      }

      return builder.build()
    } catch (ex: Exception) {
      logger.error(ex) { "Failed with an exception" }
      return Plugin.ConfigureInteractionResponse.newBuilder().setError(ex.message).build()
    }
  }

  companion object : KLogging() {}
}

fun main() {
  val server = PluginApp()
  server.start()
  server.blockUntilShutdown()
}
