/* tslint:disable:no-unused-expression no-empty */
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { SpecificationVersion, PactV4, LogLevel } from "@pact-foundation/pact";
import axios from "axios";

chai.use(chaiAsPromised);

const { expect } = chai;

describe("Plugins - Foo Protocol", () => {
  describe("HTTP interface", () => {
    const pact = new PactV4({
      consumer: "myconsumer",
      provider: "myprovider",
      spec: SpecificationVersion.SPECIFICATION_VERSION_V4,
      logLevel: (process.env.LOG_LEVEL as LogLevel) || "error",
    });
    it("returns a valid FooBar message over HTTP", async () => {
      const foobarRequest = `{"request": {"body": "hello"}}`;
      const foobarResponse = `{"response":{"body":"world"}}`;

      await pact
        .addInteraction()
        .given("the Foobar protocol exists")
        .uponReceiving("an HTTP request to /foobar")
        .usingPlugin({
          plugin: "node-template",
          version: "0.0.0",
        })
        .withRequest("POST", "/foobar", (builder) => {
          builder.pluginContents("application/foo", foobarRequest);
        })
        .willRespondWith(200, (builder) => {
          builder.pluginContents("application/foo", foobarResponse);
        })
        .executeTest((mockserver) => {
          return axios
            .request({
              baseURL: mockserver.url,
              headers: {
                "content-type": "application/foo",
                Accept: "application/foo",
              },
              data: "hello",
              method: "POST",
              url: "/foobar",
            })
            .then((res) => {
              expect(res.data).to.eq("world");
            });
        });
    });
  });
});
