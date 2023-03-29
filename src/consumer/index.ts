import { type } from '@/event-type'
import Kafka from 'node-rdkafka'

const consumer = new Kafka.KafkaConsumer(
  {
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092',
  },
  {},
)

consumer.connect()

consumer
  .on('ready', () => {
    console.log('Consumer ready...')
    consumer.subscribe(['test'])
    consumer.consume()
  })
  .on('data', (data) => {
    console.log(`Received message: ${type.fromBuffer(data.value!)}`)
  })
