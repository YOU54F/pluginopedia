# -*- ruby -*-
# encoding: utf-8

Gem::Specification.new do |s|
  s.name          = 'pact_ruby_plugin'
  s.version       = '1.0.0'
  s.authors       = ['Yousaf Nabi']
  s.email         = 'you@saf.dev'
  s.homepage      = 'https://github.com/you54f'
  s.summary       = 'gRPC Ruby Pact Plugin Sample'
  s.description   = 'Simple demo of building a Pact Plugin with gRPC from Ruby'
  s.bindir        = 'exe'
  s.files         = `git ls-files -- *`.split("\n")
  s.executables   = `git ls-files -- main*.rb plugin_services*.rb`.split("\n").map do |f|
    File.basename(f)
  end
  s.require_paths = ['lib']
  s.platform      = Gem::Platform::RUBY

  s.add_dependency 'grpc', '~> 1.5'
  s.add_development_dependency 'bundler', '>= 1.9'
  s.add_development_dependency 'pact_ruby_ffi', '>= 0.1.0'
  s.add_development_dependency 'solargraph', '>= 0.47.2'
end