import grpc
import plugin.plugin_pb2_grpc as pb2_grpc
import plugin.plugin_pb2 as pb2


class PactPluginClient(object):
    """
    Client for gRPC functionality
    """

    def __init__(self):
        self.host = '[::1]'
        self.server_port = 50051

        # instantiate a channel
        self.channel = grpc.insecure_channel(
            '{}:{}'.format(self.host, self.server_port))

        # bind the client and the server
        self.stub = pb2_grpc.PactPluginStub(self.channel)

    def get_url(self, message):
        """
        Client function to call the rpc for GetServerResponse
        """
        message = pb2.InitPluginRequest(implementation='pact-plugin-rust',version='0.0.1')
        print(f'{message}')
        return self.stub.InitPlugin(message)


if __name__ == '__main__':
    client = PactPluginClient()
    result = client.get_url(message={})
    print(f'{result}')