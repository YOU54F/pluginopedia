require 'pact_ruby_ffi'
require_relative '../consumer'
include PactRubyPluginConsumer
require 'grpc'
require 'json'

RSpec.describe 'test pact plugin protobuf consumer' do
  describe 'InitPluginRequest' do
    let(:contents) do
      {
        "pact:proto": File.expand_path('./proto/plugin.proto'),
        "pact:message-type": 'InitPluginRequest',
        "pact:content-type": 'application/protobuf',
        "implementation": "notEmpty('pact-jvm-driver')",
        "version": "matching(semver, '0.0.0')"
      }
    end

    let(:pact) { PactRubyFfi.pactffi_new_pact('protobuf-consumer-ruby', 'protobuf-provider') }
    let(:message_pact) do
      PactRubyFfi.pactffi_new_sync_message_interaction(pact, 'init plugin message')
    end
    let(:spec_version) do
      PactRubyFfi.pactffi_with_specification(pact, PactRubyFfi::FfiSpecificationVersion['SPECIFICATION_VERSION_V4'])
    end

    it 'executes the pact test without errors' do
      PactRubyFfi.pactffi_with_pact_metadata(pact, 'pact-ruby', 'ffi', PactRubyFfi.pactffi_version)
      # Test fails with v0.1.16 of protobuf plugin, if logger is enabled.
      PactRubyFfi.pactffi_logger_init
      PactRubyFfi.pactffi_logger_attach_sink('stdout', PactRubyFfi::FfiLogLevelFilter['LOG_LEVEL_INFO'])
      PactRubyFfi.pactffi_logger_attach_sink('stderr', PactRubyFfi::FfiLogLevelFilter['LOG_LEVEL_DEBUG'])
      PactRubyFfi.pactffi_logger_apply
      PactRubyFfi.pactffi_log_message('pact_ruby', 'INFO', 'pact ruby grpc is alive')
      PactRubyFfi.pactffi_using_plugin(pact, 'pact_ruby_plugin', '0.0.0')
      # PactRubyFfi.pactffi_using_plugin(pact, 'pact-protobuf-plugin', '0.1.15')
      p 'sending pre foo'
      p 'sending foo'
      PactRubyFfi.pactffi_interaction_contents(message_pact, 0, 'application/saf', JSON.dump(contents))
      mock_server_port = PactRubyFfi.pactffi_create_mock_server_for_transport(pact, '127.0.0.1', 50051, 'http', nil)
      p mock_server_port
      res = PactRubyPluginConsumer.init_plugin("localhost:#{mock_server_port}")
      expect(res.to_h).to eq({ catalogue: [{ key: 'saf', type: :CONTENT_MATCHER,
                                             values: { 'content-types' => 'application/saf' } }] })
      # pp 'safbomb'
      # pp mock_server_port
      # result = PactRubyFfi.pactffi_mock_server_mismatches(mock_server_port)
      # pp 'mock_server_port'
      # if result == true
        # p "pactffi_mock_server_matched: #{result}"
        res_write_pact = PactRubyFfi.pactffi_write_pact_file(mock_server_port, './pacts', false)
        if res_write_pact == 0
          p 'pact file generated'
        else
          p "Failed to write pact file: #{res_write_pact}"
        end
      # else
        # p "pactffi_mock_server_matched failed: #{result}"
        # mismatchers = PactRubyFfi.pactffi_mock_server_mismatches(mock_server_port)
        # p mismatchers
        # if mismatchers && JSON.parse(mismatchers).length == 0
        #   raise 'the mock server returned matched false, but there are no mismatches to report, this shouldn\t be the case'
        # end

        # p "Failed to match all pacts: #{mismatchers}"
        # puts JSON.parse(mismatchers)
        # PactRubyFfi.pactffi_cleanup_mock_server(mock_server_port)
        PactRubyFfi.pactffi_cleanup_plugins(pact)
      # end
    end
  end
end

# RSpec.describe 'pactffi_new_plugin spec' do
#   describe 'with ruby - calculateOne' do
#     let(:contents) do
#       {
#         "pact:content-type": 'application/saf',
#         "request": {
#           "shapes": [
#             {
#               "rectangle": {
#                 "length": 'matching(number, 3)',
#                 "width": 'matching(number, 4)'
#               }
#             },
#             {
#               "square": {
#                 "edge_length": 'matching(number, 3)'
#               }
#             }
#           ]
#         },
#         "response": {
#           "value": ['matching(number, 12)', 'matching(number, 9)']
#         }
#       }
#     end

#     let(:pact) { PactRubyFfi.pactffi_new_pact("protobuf-consumer-ruby", 'protobuf-provider') }
#     let(:message_pact) do
#       PactRubyFfi.pactffi_new_sync_message_interaction(pact, 'init plugin message')
#     end
#     let(:spec_version) do
#       PactRubyFfi.pactffi_with_specification(pact, PactRubyFfi::FfiSpecificationVersion['SPECIFICATION_VERSION_V4'])
#     end
#     let(:mock_server_port) { PactRubyFfi.pactffi_create_mock_server_for_transport(pact, '0.0.0.0', 5001, 'http', nil) }

#     before do
#       # PactRubyFfi.pactffi_with_pact_metadata(pact, 'pact-ruby', 'ffi', PactRubyFfi.pactffi_version)
#       code = PactRubyFfi.pactffi_using_plugin(pact, 'protobuf', nil)

#       PactRubyFfi.pactffi_logger_init
#       # PactRubyFfi.pactffi_logger_attach_sink('stderr', PactRubyFfi::FfiLogLevelFilter['LOG_LEVEL_ERROR'])
#       PactRubyFfi.pactffi_logger_attach_sink('stdout', PactRubyFfi::FfiLogLevelFilter['LOG_LEVEL_TRACE'])
#       # PactRubyFfi.pactffi_logger_attach_sink('stderr', PactRubyFfi::FfiLogLevelFilter['LOG_LEVEL_DEBUG'])
#       PactRubyFfi.pactffi_logger_apply
#       PactRubyFfi.pactffi_log_message('pact_ruby', 'INFO', 'pact ruby grpc is alive')
#       # code = PactRubyFfi.pactffi_using_plugin(pact, 'pact_ruby_plugin', '0.0.0')
#       PactRubyFfi.pactffi_interaction_contents(message_pact, 0, 'application/saf', JSON.dump(contents))
#       loop do
#         # mismatchers = PactRubyFfi.pactffi_mock_server_mismatches(mock_server_port)
#         puts 'codeynode'
#         puts code
#         break if code.is_a? Integer
#       end
#       puts "exit code of plugin #{code}"
#     end
#     after do

#       # result = PactRubyFfi.pactffi_mock_server_matched(mock_server_port)
#       # if result == true
#       #   p "pactffi_mock_server_matched: #{result}"
#       #   res_write_pact = PactRubyFfi.pactffi_write_pact_file(mock_server_port, './pacts', false)
#       #   if res_write_pact == 0
#       #     p 'pact file generated'
#       #   else
#       #     p "Failed to write pact file: #{res_write_pact}"
#       #   end
#       # else
#       #   p "pactffi_mock_server_matched: #{result}"
#       #   mismatchers = PactRubyFfi.pactffi_mock_server_mismatches(mock_server_port)
#       #   if JSON.parse(mismatchers).length == 0
#       #     raise 'the mock server returned matched false, but there are no mismatches to report, this shouldn\t be the case'
#       #   end
#       #   p "Failed to match all pacts: #{mismatchers}"
#       #   puts JSON.parse(mismatchers)
#       # end

#       PactRubyFfi.pactffi_cleanup_mock_server(mock_server_port)
#       PactRubyFfi.pactffi_cleanup_plugins(pact)

#       # Should this be using write message pact
#       # res_write_message_pact = PactRubyFfi.pactffi_write_message_pact_file(message_pact, './pacts', false)
#       # puts "res_write_message_pact: #{res_write_message_pact}"
#     end
#     it 'executes the pact test without errors' do
#       # result = true
#       # while result == true
#       #   sleep(100)
#       # end
#       # res = AreaCalculatorConsumer.get_rectangle_area("localhost:#{mock_server_port}")
#       # expect(res).to eq([12.0])

#       expect(true).to be(true)
#     end
#   end
# end
