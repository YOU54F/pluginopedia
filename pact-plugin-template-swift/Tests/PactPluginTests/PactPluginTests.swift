import XCTest

import class Foundation.Bundle
 import Darwin

final class pact_plugin_template_swiftTests: XCTestCase {
  func testExample() throws {
    // This is an example of a functional test case.
    // Use XCTAssert and related functions to verify your tests produce the correct
    // results.

    // Some of the APIs that we use below are available in macOS 10.13 and above.
    guard #available(macOS 10.13, *) else {
      return
    }

    // Mac Catalyst won't have `Process`, but it is supported for executables.
    #if !targetEnvironment(macCatalyst)
      setbuf(stdout, nil)
      let fooBinary = productsDirectory.appendingPathComponent("PactPlugin")

      let process = Process()
      process.executableURL = fooBinary

      let pipe = Pipe()
      process.standardOutput = pipe

      try process.run()
      print("Launched PactPlugin - PID: ",process.processIdentifier)
      DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
        print("Killing PactPlugin - PID: ",process.processIdentifier)
        let killPipe = Pipe()

        let killTask = Process()
        killTask.launchPath = "/usr/bin/killall"
        killTask.arguments = ["PactPlugin"]
        killTask.standardOutput = killPipe
        killTask.standardError = killPipe
        killTask.launch()
        killTask.waitUntilExit()
        let killData = killPipe.fileHandleForReading.readDataToEndOfFile()
        if let killOutput = String(data: killData, encoding: .utf8) {
          print(killOutput)
        }
      }
      process.waitUntilExit()

      let data = pipe.fileHandleForReading.readDataToEndOfFile()
      let output = String(data: data, encoding: .utf8)
      print("Output from PactPlugin: "+output!)
      XCTAssertEqual(output, "server started on port 50051\n")

    #endif
  }

  /// Returns path to the built products directory.
  var productsDirectory: URL {
    #if os(macOS)
      for bundle in Bundle.allBundles where bundle.bundlePath.hasSuffix(".xctest") {
        return bundle.bundleURL.deletingLastPathComponent()
      }
      fatalError("couldn't find the products directory")
    #else
      return Bundle.main.bundleURL
    #endif
  }
}
