#!/usr/bin/env ruby

# Copyright 2015 gRPC authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Sample app that connects to a Greeter service.
#
# Usage: $ path/to/greeter_client.rb

this_dir = __dir__
lib_dir = File.join(this_dir, 'lib')
$LOAD_PATH.unshift(lib_dir) unless $LOAD_PATH.include?(lib_dir)

require 'grpc'
require 'plugin_services_pb'
require 'json'
  module PactRubyPluginConsumer
    def self.init_plugin(address)
      # Set up a connection to the server.
      stub = Io::Pact::Plugin::PactPlugin::Stub.new(address, :this_channel_is_insecure)
      begin
        content = {
          "implementation": "1",
          "version": "0.0.0"
        }
        p "Sending init plugin request #{address} #{stub}"
        message = stub.init_plugin(Io::Pact::Plugin::InitPluginRequest.new(content))
        p 'Receieved init plugin response'
        p message
        # p "Area: #{message[0]}"
        # message[0]
        message
      end
    end

    def self.main
      hostname = 'localhost:50051'
      init_plugin(hostname)
    rescue GRPC::BadStatus => e
      abort "ERROR: #{e.message}"
    end
  end

# PactRubyPluginConsumer.main