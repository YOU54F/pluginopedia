#if compiler(>=5.6)
import ArgumentParser
import GRPC
import NIOCore
import NIOPosix
import PactPluginModel
import Darwin

@available(macOS 10.15, iOS 13, tvOS 13, watchOS 6, *)
@main
struct PactPlugin: AsyncParsableCommand {
  // @Option(help: "The port to listen on for new connections")
  var port = 50051
  
  func run() async throws {
    setbuf(stdout, nil) // this is important to ensure we output to stdout that the plugin driver can read
    let group = MultiThreadedEventLoopGroup(numberOfThreads: 1)
    defer {
      try! group.syncShutdownGracefully()
    }

    // Start the server and print its address once it has started.
    let server = try await Server.insecure(group: group)
      .withServiceProviders([PactPluginProvider()])
      .bind(host: "127.0.0.1", port: self.port)
      .get()

    print("{\"port\": \(server.channel.localAddress!.port!), \"serverKey\": \"foo-bar\"}")

    // Wait on the server's `onClose` future to stop the program from exiting.
    try await server.onClose.get()
  }
}
#else
@main
enum PactPlugin {
  static func main() {
    fatalError("This example requires swift >= 5.6")
  }
}
#endif // compiler(>=5.6)