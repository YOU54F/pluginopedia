/*
 * Copyright 2019, gRPC Authors All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the"License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an"AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
#if compiler(>=5.6)
  import GRPC
  import NIOCore
  import SwiftProtobuf
  import PactPluginModel

  @available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
  final class PactPluginProvider: Io_Pact_Plugin_PactPluginProvider {
    var interceptors: Io_Pact_Plugin_PactPluginServerInterceptorFactoryProtocol?

    let contentTypeKey = "foo"
    let contentType = "application/foo"

    func initPlugin(request: Io_Pact_Plugin_InitPluginRequest, context: StatusOnlyCallContext)
      -> EventLoopFuture<Io_Pact_Plugin_InitPluginResponse>
    {
       return context.eventLoop.makeSucceededFuture(
        Io_Pact_Plugin_InitPluginResponse.with {
          $0.catalogue =
            [
              Io_Pact_Plugin_CatalogueEntry.with {
                $0.key = contentTypeKey
                $0.type = Io_Pact_Plugin_CatalogueEntry.EntryType.contentMatcher
                $0.values = ["content-types": contentType]
              }
            ]

        })

    }

    func updateCatalogue(request: Io_Pact_Plugin_Catalogue, context: StatusOnlyCallContext)
      -> EventLoopFuture<Google_Protobuf_Empty>
    {
      return context.eventLoop.makeSucceededFuture(Google_Protobuf_Empty())
    }

    func compareContents(
      request: Io_Pact_Plugin_CompareContentsRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_CompareContentsResponse> {
      // for some reason, logging out here causes the plugin pact tests to fail, 
      // so print statements have been removed.
      let actual = request.actual.content.value
      let expected = request.expected.content.value

      if actual != expected {

        var compareContentsResponse = Io_Pact_Plugin_CompareContentsResponse()
        compareContentsResponse.error = "actual does not meet expected"
        compareContentsResponse.typeMismatch.actual = String(data: actual, encoding: .utf8)!
        compareContentsResponse.typeMismatch.expected = String(data: expected, encoding: .utf8)!
        var contentMismatches = Io_Pact_Plugin_ContentMismatches()
        var contentMismatch = Io_Pact_Plugin_ContentMismatch()
        contentMismatch.diff = "diff"
        contentMismatch.path = "$"
        contentMismatch.actual.value = actual
        contentMismatch.expected.value = expected
        contentMismatch.mismatch = "expected body \(String(data: expected, encoding: .utf8)!) is not equal to actual body \(String(data: actual, encoding: .utf8)!)"
        contentMismatches.mismatches = [contentMismatch]
        compareContentsResponse.results = ["$": contentMismatches]
        return context.eventLoop.makeSucceededFuture(compareContentsResponse)

      } else {
        return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_CompareContentsResponse())

      }
    }

    func configureInteraction(
      request: Io_Pact_Plugin_ConfigureInteractionRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_ConfigureInteractionResponse> {
      var interactions: Io_Pact_Plugin_ConfigureInteractionResponse =
        Io_Pact_Plugin_ConfigureInteractionResponse.init()
      if request.contentsConfig.fields.keys.contains("request") {
        var requestPart = Io_Pact_Plugin_InteractionResponse.init()
        requestPart.partName = "request"
        requestPart.contents.contentType = contentType
        requestPart.contents.content.value = "hello".data(using: String.Encoding.utf8)!
        interactions.interaction.append(requestPart)
      }

      if request.contentsConfig.fields.keys.contains("response") {
        var responsePart = Io_Pact_Plugin_InteractionResponse.init()
        responsePart.partName = "response"
        responsePart.contents.contentType = contentType
        responsePart.contents.content.value = "world".data(using: String.Encoding.utf8)!
        interactions.interaction.append(responsePart)

      }

      return context.eventLoop.makeSucceededFuture(
        interactions)
    }

    func generateContent(
      request: Io_Pact_Plugin_GenerateContentRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_GenerateContentResponse> {

      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_GenerateContentResponse())
    }

    func startMockServer(
      request: Io_Pact_Plugin_StartMockServerRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_StartMockServerResponse> {

      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_StartMockServerResponse())
    }

    func shutdownMockServer(
      request: Io_Pact_Plugin_ShutdownMockServerRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_ShutdownMockServerResponse> {

      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_ShutdownMockServerResponse())
    }

    func getMockServerResults(
      request: Io_Pact_Plugin_MockServerRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_MockServerResults> {

      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_MockServerResults())
    }

    func prepareInteractionForVerification(
      request: Io_Pact_Plugin_VerificationPreparationRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_VerificationPreparationResponse> {

      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_VerificationPreparationResponse())
    }

    func verifyInteraction(
      request: Io_Pact_Plugin_VerifyInteractionRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_VerifyInteractionResponse> {
      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_VerifyInteractionResponse())
    }
  }
#endif  // compiler(>=5.6)
