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
  s.files       = ["lib/*,main.rb"]
  s.executables   = "main.rb"
  s.require_paths = ['lib']
  s.platform      = Gem::Platform::RUBY

  s.add_dependency 'grpc', '~> 1.5'
  s.add_development_dependency 'bundler', '>= 1.9'
end