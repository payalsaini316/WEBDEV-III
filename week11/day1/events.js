const EventEmitter = require('events')

var ee = new EventEmitter()


//Handling / Reading
// on => Method , message => Event Name
ee.on('chintu', function (text) {
  console.log(text)
});
ee.on('hello', (cb) => {
  console.log(cb);
});

//triggering / Sending
// emit => Method , message => Event Name 

ee.emit('chintu', 'hello world');
ee.emit('hello', 'good luck for your exams');