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

    let contentTypeKey = "matt"
    let contentType = "application/matt"

    func initPlugin(request: Io_Pact_Plugin_InitPluginRequest, context: StatusOnlyCallContext)
      -> EventLoopFuture<Io_Pact_Plugin_InitPluginResponse>
    {
      print("initPlugin:")
      print(request)

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
      print("updateCatalogue:")
      print(request)
      return context.eventLoop.makeSucceededFuture(Google_Protobuf_Empty())
    }

    func compareContents(
      request: Io_Pact_Plugin_CompareContentsRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_CompareContentsResponse> {
      print("compareContents:")
      print(request)
      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_CompareContentsResponse())
    }

    func configureInteraction(
      request: Io_Pact_Plugin_ConfigureInteractionRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_ConfigureInteractionResponse> {
      print("configureInteraction:")
      // print(request)
      var interactions: Io_Pact_Plugin_ConfigureInteractionResponse =
        Io_Pact_Plugin_ConfigureInteractionResponse.init()
      if request.contentsConfig.fields.keys.contains("request") {
      var requestPart = Io_Pact_Plugin_InteractionResponse.init()
        requestPart.partName = "request"
        requestPart.contents.contentType = contentType
        requestPart.contents.content.value = "MATThelloMATT".data(using: String.Encoding.utf8)!
        interactions.interaction.append(requestPart)
      }

      if request.contentsConfig.fields.keys.contains("response") {
      var responsePart = Io_Pact_Plugin_InteractionResponse.init()
        responsePart.partName = "response"
        responsePart.contents.contentType = contentType
        responsePart.contents.content.value = "MATThelloMATT".data(using: String.Encoding.utf8)!
        interactions.interaction.append(responsePart)

      }

      return context.eventLoop.makeSucceededFuture(
        interactions)
    }

    func generateContent(
      request: Io_Pact_Plugin_GenerateContentRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_GenerateContentResponse> {
      print("generateContent:")
      print(request)
      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_GenerateContentResponse())
    }

    func startMockServer(
      request: Io_Pact_Plugin_StartMockServerRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_StartMockServerResponse> {
      print("startMockServer:")
      print(request)
      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_StartMockServerResponse())
    }

    func shutdownMockServer(
      request: Io_Pact_Plugin_ShutdownMockServerRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_ShutdownMockServerResponse> {
      print("shutdownMockServer:")
      print(request)
      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_ShutdownMockServerResponse())
    }

    func getMockServerResults(
      request: Io_Pact_Plugin_MockServerRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_MockServerResults> {
      print("getMockServerResults:")
      print(request)
      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_MockServerResults())
    }

    func prepareInteractionForVerification(
      request: Io_Pact_Plugin_VerificationPreparationRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_VerificationPreparationResponse> {
      print("prepareInteractionForVerification:")
      print(request)
      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_VerificationPreparationResponse())
    }

    func verifyInteraction(
      request: Io_Pact_Plugin_VerifyInteractionRequest, context: StatusOnlyCallContext
    ) -> EventLoopFuture<Io_Pact_Plugin_VerifyInteractionResponse> {
      print("verifyInteraction:")
      print(request)
      return context.eventLoop.makeSucceededFuture(Io_Pact_Plugin_VerifyInteractionResponse())
    }
  }
#endif  // compiler(>=5.6)
