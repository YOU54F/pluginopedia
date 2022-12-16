#!/usr/bin/env /Users/saf/.pyenv/shims/python
import sys
import grpc
from concurrent import futures
import plugin.plugin_pb2_grpc as pb2_grpc
import plugin.plugin_pb2 as pb2
import json

# raise Exception('Test to standard error')
class PactPluginService(pb2_grpc.PactPluginServicer):

    def __init__(self, *args, **kwargs):
        pass

    def InitPlugin(self, request, context):

        # get the string from the incoming request
        print(request)
        # result = f'received InitPlugin "{request}"'
        result = {'catalogue': []}

        return pb2.InitPluginResponse(**result)
# {"port": 50051, "serverKey": "foo"}
# {"port":9090,"serverKey":"3511862a-5854-4540-848e-0ea2316164de"}
def serve():
    print(str(json.dumps({"port":50051,"serverKey":"3511862a-5854-4540-848e-0ea2316164de"})))
    print(json.dumps({"port":50051,"serverKey":"3511862a-5854-4540-848e-0ea2316164de"}))
    sys.stdout.write(str(json.dumps({"port":50051,"serverKey":"3511862a-5854-4540-848e-0ea2316164de"})))
    # sys.stderr.write(json.dumps({"port":50051,"serverKey":"3511862a-5854-4540-848e-0ea2316164de"}))
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    pb2_grpc.add_PactPluginServicer_to_server(PactPluginService(), server)
    server.add_insecure_port('[::]:50051')

    # sys.stdout.write({"port":50051,"serverKey":"3511862a-5854-4540-848e-0ea2316164de"})
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    serve()