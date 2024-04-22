import kafka from 'kafka-node';
import { kafka_host } from '../config';
const client = new kafka.KafkaClient({ kafkaHost: kafka_host });
const producer = new kafka.Producer(client);

const KafkaProducer = {
  sendMessage: async (topic, message) => {
    const payloads = [
      { topic, messages: JSON.stringify(message) }
    ];
    producer.send(payloads, (err, data) => {
      if (err) console.log('Kafka Producer Send Error:', err);
    });
  }
};

producer.on('ready', function() {
  console.log('Kafka Producer is connected and ready.');
});

producer.on('error', function(err) {
  console.log('Producer is in error state');
  console.log(err);
});

module.exports = KafkaProducer;
