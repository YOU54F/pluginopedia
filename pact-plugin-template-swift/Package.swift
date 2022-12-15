// swift-tools-version: 5.6
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
  name: "pact-plugin-template-swift",
  dependencies: [
    // Dependencies declare other packages that this package depends on.
    // .package(url: /* package url */, from: "1.0.0"),
    .package(url: "https://github.com/grpc/grpc-swift.git", from: "1.9.0"),
    .package(url: "https://github.com/apple/swift-protobuf.git", from: "1.6.0"),
      .package(
    url: "https://github.com/apple/swift-argument-parser.git",
    // Version is higher than in other Package@swift manifests: 1.1.0 raised the minimum Swift
    // version and indluded async support.
    from: "1.1.4"
  ),
  .package(
    url: "https://github.com/apple/swift-nio.git",
    from: "2.42.0"
  ),
  ],
  targets: [
    // Targets are the basic building blocks of a package. A target can define a module or a test suite.
    // Targets can depend on other targets in this package, and on products in packages this package depends on.
    .executableTarget(
      name: "PactPlugin",
      dependencies: [
        .target(name: "PactPluginModel"),
        .product(name: "GRPC", package: "grpc-swift"),
        .product(
    name: "ArgumentParser",
    package: "swift-argument-parser"
  )],
    path: "Sources/PactPlugin"),
    .testTarget(
      name: "PactPluginTests",
      dependencies: ["PactPlugin"]),

    .target(
      name: "PactPluginModel",
      dependencies: [
        .product(name: "SwiftProtobuf", package: "swift-protobuf"),
        .product(name: "GRPC", package: "grpc-swift"),
        .product(name: "NIOCore", package: "swift-nio"),
        .product(name: "NIOPosix", package: "swift-nio")
      ],
      path: "Sources/Model",
      exclude: [
        "plugin.proto"
      ]
    ),
  ]
)
