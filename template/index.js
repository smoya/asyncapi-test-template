import { File } from '@asyncapi/generator-react-sdk';

export default function({ asyncapi, params }) {
 
  return (
    <File name="client.py">
      { `import paho.mqtt.client as mqtt

mqttBroker = "${ asyncapi.servers().get(params.server).url() }"
commentLikedTopic = "comment/liked"

class CommentLikedClient:
    def __init__(self):
        self.client = mqtt.Client()
        self.client.connect(mqttBroker)


    def sendCommentLiked(self, id):
        self.client.publish(commentLikedTopic, id)` }
    </File>
  );
}