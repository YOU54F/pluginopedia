import {bdctService} from '../src/bdctService.ts'

console.log(
  await bdctService({
    oas: {
      content: {
        "openapi": "3.0.0",
        "servers": [
           {
              "description": "SwaggerHub API Auto Mocking",
              "url": "https://virtserver.swaggerhub.com/CANDYG24/allOfExample/1.0.0"
           }
        ],
        "info": {
           "description": "This is a simple API",
           "version": "1.0.0",
           "title": "Simple Inventory API",
           "contact": {
              "email": "you@your-company.com"
           },
           "license": {
              "name": "Apache 2.0",
              "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
           }
        },
        "tags": [
           {
              "name": "admins",
              "description": "Secured Admin-only calls"
           },
           {
              "name": "developers",
              "description": "Operations available to regular developers"
           }
        ],
        "paths": {
           "/getMyModel": {
              "get": {
                 "tags": [
                    "developers"
                 ],
                 "summary": "searches inventory",
                 "operationId": "getMyModel",
                 "description": "By passing in the appropriate options, you can search for\navailable inventory in the system\n",
                 "responses": {
                    "200": {
                       "description": "search results matching criteria",
                       "content": {
                          "application/json": {
                             "schema": {
                                "$ref": "#/components/schemas/myModel"
                             }
                          }
                       }
                    },
                    "400": {
                       "description": "bad input parameter"
                    }
                 }
              }
           },
           "/getOtherModel": {
              "get": {
                 "tags": [
                    "developers"
                 ],
                 "summary": "searches inventory",
                 "operationId": "getOtherModel",
                 "description": "By passing in the appropriate options, you can search for\navailable inventory in the system\n",
                 "responses": {
                    "200": {
                       "description": "search results matching criteria",
                       "content": {
                          "application/json": {
                             "schema": {
                                "$ref": "#/components/schemas/otherModel"
                             }
                          }
                       }
                    },
                    "400": {
                       "description": "bad input parameter"
                    }
                 }
              }
           }
        },
        "components": {
           "schemas": {
              "myModel": {
                 "type": "object",
                 "properties": {
                    "optionalString": {
                       "type": "string",
                       "description": "optional string",
                       "nullable": true
                    },
                    "optionalData": {
                       "type": "object",
                       "nullable": true,
                       "description": "optional data",
                       "properties": {
                          "data": {
                             "type": "string"
                          }
                       }
                    }
                 }
              },
              "childModel": {
                 "type": "object",
                 "nullable": true,
                 "properties": {
                    "data": {
                       "type": "string"
                    }
                 },
                 "description": "<description generated from the ChildModel class definition, eg if OpenApiPropertyAnnotation were allowed on classes>"
              },
              "otherModel": {
                 "type": "object",
                 "properties": {
                    "requiredString": {
                       "type": "string",
                       "description": "required data"
                    },
                    "requiredData": {
                       "allOf": [
                          {
                             "$ref": "#/components/schemas/childModel"
                          }
                       ],
                       "description": "required data"
                    }
                 }
              }
           }
        }
     }
    },
    pact: {
      content: {
        "consumer": {
          "name": "ExampleConsumer"
        },
        "interactions": [
          {
            "description": "a request for myModel",
            "request": {
      
              "method": "GET",
              "path": "/getMyModel"
            },
            "response": {
              "body": {
                  "optionalString": "string",
                  "optionalData": {
                      "data": "string"
                  }
              },
              "headers": {
                "Content-Type": ["application/json"]
              },
              "status": 200
            }
          },
          {
            "description": "a request to get otherModel",
            "request": {
              "method": "GET",
              "path": "/getOtherodel"
            },
            "response": {
              "body": {
                "requiredString": "string",
                "requiredData": {
                  "data": "child model data"
                }
              },
              "headers": {
                "Content-Type": "application/json; charset=utf-8"
              },
              "status": 200
            }
          }
        ],
        "metadata": {
          "pactRust": {
            "ffi": "0.2.1",
            "mockserver": "0.8.7",
            "models": "0.2.7"
          },
          "pactSpecification": {
            "version": "3.0.0"
          }
        },
        "provider": {
          "name": "ExampleProvider"
        }
      }
    }
  })
);


// {"errors":[],"success":true,"warnings":[],"consumer":"ExampleConsumer","provider":"ExampleProvider","specContentPathOrUrl":"content","mockContentPathOrUrl":"content"}

// {"errors":[{"code":"request.path-or-method.unknown","message":"Path or method not defined in spec file: GET /getOtherodel","mockDetails":{"interactionDescription":"a request to get otherModel","interactionState":"[none]","location":"[root].interactions[1].request.path","mockFile":"content","value":"/getOtherodel"},"source":"spec-mock-validation","specDetails":{"location":"[root].paths","pathMethod":null,"pathName":null,"specFile":"content","value":{"/getMyModel":{"get":{"tags":["developers"],"summary":"searches inventory","operationId":"getMyModel","description":"By passing in the appropriate options, you can search for\navailable inventory in the system\n","responses":{"200":{"description":"search results matching criteria","content":{"application/json":{"schema":{"type":"object","properties":{"optionalString":{"type":"string","description":"optional string","nullable":true},"optionalData":{"type":"object","nullable":true,"description":"optional data","properties":{"data":{"type":"string"}}}}}}}},"400":{"description":"bad input parameter"}}}},"/getOtherModel":{"get":{"tags":["developers"],"summary":"searches inventory","operationId":"getOtherModel","description":"By passing in the appropriate options, you can search for\navailable inventory in the system\n","responses":{"200":{"description":"search results matching criteria","content":{"application/json":{"schema":{"type":"object","properties":{"requiredString":{"type":"string","description":"required data"},"requiredData":{"description":"required data","type":"object","nullable":true,"properties":{"data":{"type":"string"}}}}}}}},"400":{"description":"bad input parameter"}}}}}},"type":"error"}],"failureReason":"Mock file \"content\" is not compatible with spec file \"content\"","success":false,"warnings":[],"consumer":"ExampleConsumer","provider":"ExampleProvider","specContentPathOrUrl":"content","mockContentPathOrUrl":"content"}