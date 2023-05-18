'use strict';

require('source-map-support/register');
var generatorReactSdk = require('@asyncapi/generator-react-sdk');
var jsxRuntime = require('react/cjs/react-jsx-runtime.production.min');

function index ({
  asyncapi,
  params
}) {
  console.log(asyncapi.servers());
  return /*#__PURE__*/jsxRuntime.jsx(generatorReactSdk.File, {
    name: "client.py",
    children: `import paho.mqtt.client as mqtt

mqttBroker = "${asyncapi.servers().get(params.server).url()}"
commentLikedTopic = "comment/liked"

class CommentLikedClient:
    def __init__(self):
        self.client = mqtt.Client()
        self.client.connect(mqttBroker)


    def sendCommentLiked(self, id):
        self.client.publish(commentLikedTopic, id)`
  });
}

module.exports = index;
//# sourceMappingURL=index.js.map
