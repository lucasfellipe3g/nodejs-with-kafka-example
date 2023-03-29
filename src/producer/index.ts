import { type } from '@/event-type'
import Kafka from 'node-rdkafka'

function queueMessage() {
  const event = { kind: 'DOG', noise: 'bark' }
  const success = stream.write(type.toBuffer(event))
  if (success) {
    console.log('Message wrote successfully to stream!')
  } else {
    console.log('Something went wrong.')
  }
}

const stream = Kafka.Producer.createWriteStream(
  {
    'metadata.broker.list': 'localhost:9092',
  },
  {},
  { topic: 'test' },
)

setInterval(() => {
  queueMessage()
}, 3000)
