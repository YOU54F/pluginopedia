#!/usr/bin/env ruby
this_dir = __dir__
lib_dir = File.join(this_dir, 'lib')
$LOAD_PATH.unshift(lib_dir) unless $LOAD_PATH.include?(lib_dir)

require 'bundler/setup'
require 'grpc'
require 'plugin_services_pb'
require 'json'
require 'securerandom'
require 'socket'
require 'logger'

class PactRubyPluginServer < Io::Pact::Plugin::PactPlugin::Service
  # include Logging
  # add_enum "io.pact.plugin.CatalogueEntry.EntryType" do
  #   value :CONTENT_MATCHER, 0
  #   value :CONTENT_GENERATOR, 1
  #   value :TRANSPORT, 2
  #   value :MATCHER, 3
  #   value :INTERACTION, 4
  # end
  def init_plugin(init_plugin_req, _unused_call)
    puts "Received InitPluginRequest: #{init_plugin_req}"
    content_matcher_req = [{
      'key' => 'foo',
      'type' => 0,
      'values' => { 'content-types' => 'application/foo' }
    }]
    Io::Pact::Plugin::InitPluginResponse.new(catalogue: content_matcher_req)
  end

  def update_catalogue(update_catalogue_req, _unused_call)
    catalogue_req = update_catalogue_req.to_h
    puts "Received Updated Catalogue: #{JSON.pretty_generate(catalogue_req[:catalogue])}"
    Google::Protobuf::Empty.new
  end

  def compare_contents(compare_contents_req, _unused_call)
    compare_contents = compare_contents_req.to_h
    puts "Received compare_contents_req: #{JSON.pretty_generate(compare_contents)}"
    actual = compare_contents[:actual][:content][:value]
    expected = compare_contents[:expected][:content][:value]
    if actual != expected
      mismatch = "expected body #{expected} is not equal to actual body #{actual}"
      puts "Mismatch found: #{mismatch}"
      Io::Pact::Plugin::CompareContentsResponse.new({
                                                      results: { "$": {
                                                        mismatches:
                                                      [{
                                                        expected: Google::Protobuf::BytesValue.new(value: expected),
                                                        actual: Google::Protobuf::BytesValue.new(value: actual),
                                                        mismatch: mismatch,
                                                        path: '$',
                                                        diff: 'diff'
                                                      }]
                                                      } },
                                                      error: 'actual does not meet expected',
                                                      typeMismatch: {
                                                        actual: actual,
                                                        expected: expected

                                                      }
                                                    })
    else
      Io::Pact::Plugin::CompareContentsResponse.new
    end
  end

  # TODO
  # Request to configure/setup the interaction for later verification. Data returned will be persisted in the pact file.
  def configure_interaction(configure_interaction_req, _unused_call)
    print "Received configure_interaction_req: #{JSON.pretty_generate(configure_interaction_req.to_h)}"
    contents_config = configure_interaction_req.to_h
    puts contents_config[:contentsConfig][:fields]
    interactions = []

    if contents_config[:contentsConfig][:fields]['request']
      pp 'got a request interaction'
      puts contents_config[:contentsConfig][:fields][:request]
      request_body = contents_config[:contentsConfig][:fields]['request'][:struct_value][:fields]['body'][:string_value]
      interactions.push(Io::Pact::Plugin::InteractionResponse.new(contents: {
                                                                    contentType: 'application/foo',
                                                                    content: Google::Protobuf::BytesValue.new(value: request_body)
                                                                  },
                                                                  partName: 'request'))
    end
    if contents_config[:contentsConfig][:fields]['response']
      pp 'got a response interaction'
      puts contents_config[:contentsConfig][:fields][:response]
      response_body = contents_config[:contentsConfig][:fields]['response'][:struct_value][:fields]['body'][:string_value]
      interactions.push(Io::Pact::Plugin::InteractionResponse.new(contents: {
                                                                    contentType: 'application/foo',
                                                                    content: Google::Protobuf::BytesValue.new(value: response_body)
                                                                  },
                                                                  partName: 'response'))
    end
    Io::Pact::Plugin::ConfigureInteractionResponse.new(interaction: interactions)
  end

  # Request to generate the content using any defined generators
  # construct your buff strings https://onlinestringtools.com/convert-string-to-decimal
  def generate_content(generate_content_req, _unused_call)
    generate_content = generate_content_req.to_h
    puts "Received GenerateContent request: #{JSON.pretty_generate(generate_content)}"
    # generators = generate_content[:generators]
    # plugin_configuration = generate_content[:pluginConfiguration]
    content = generate_content[:contents][:content]
    return unless content[:value]

    response_body = content[:value]
    puts "Returning GenerateContent response: #{JSON.pretty_generate(response_body)}"
    Io::Pact::Plugin::GenerateContentResponse.new(contents: {
                                                    contentType: 'application/foo',
                                                    content: Google::Protobuf::BytesValue.new(value: response_body)
                                                  })
  end

  # TODO
  def start_mock_server(_start_mock_server_req, _unused_call)
    print "Received start_mock_server_req: #{JSON.pretty_generate(start_mock_server.to_h)}"
    Io::Pact::Plugin::StartMockServerResponse.new
  end

  # TODO
  def shutdown_mock_server(shutdown_mock_server_req, _unused_call)
    print "Received shutdown_mock_server_req: #{JSON.pretty_generate(shutdown_mock_server_req.to_h)}"
    Io::Pact::Plugin::ShutdownMockServerResponse.new
  end

  # TODO
  def get_mock_server_results(get_mock_server_results_req, _unused_call)
    print "Received get_mock_server_results_req: #{JSON.pretty_generate(get_mock_server_results_req.to_h)}"
    Io::Pact::Plugin::MockServerResults.new
  end

  # TODO
  def prepare_interaction_for_verification(prepare_interaction_for_verification_req, _unused_call)
    print "Received prepare_interaction_for_verification: #{JSON.pretty_generate(prepare_interaction_for_verification_req.to_h)}"
    Io::Pact::Plugin::VerificationPreparationResponse.new
  end

  # TODO
  def verify_interaction_response(verify_interaction_response_req, _unused_call)
    print "Received get_mock_server_results_req: #{JSON.pretty_generate(verify_interaction_response_req.to_h)}"
    Io::Pact::Plugin::VerifyInteractionResponse.new
  end
end

def main
  # include Logging
  # server = TCPServer.new('127.0.0.1', 0)
  # port = server.addr[1]
  # server.close()
  port = ENV["PORT"] || 50051
  # pp port
  host = "0.0.0.0:#{port}"
  server_key = SecureRandom.uuid
  s = GRPC::RpcServer.new
  s.add_http2_port(host, :this_port_is_insecure)

  s.handle(PactRubyPluginServer)

  begin
    $stdout.puts("{\"port\": #{port}, \"serverKey\": \"#{server_key}\"}\n")
    if (/cygwin|mswin|mingw|bccwin|wince|emx/ =~ RbConfig::CONFIG['arch']) != nil

      s.run_till_terminated
    else
      s.run_till_terminated_or_interrupted([1, 'int', 'SIGINT', 'SIGTERM'])
    end
  rescue StandardError => e
    puts e
  end
end

main

def is_port_open?(host, port, timeout, sleep_period)
  Timeout.timeout(timeout) do
    s = TCPSocket.new(host, port)
    s.close
    return true
  rescue Errno::ECONNREFUSED, Errno::EHOSTUNREACH
    sleep(sleep_period)
    retry
  end
rescue Timeout::Error
  false
end
