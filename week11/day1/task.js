const EventEmitter = require("events")
// dispeshnimis

var ee = new EventEmitter();

// Handling / Reading
// on => Method , message => Event Name

ee.on("one", function (text) {
  console.log(text);
});
ee.on("two", (cb) => {
  ee.emit("one", "hello world");
  console.log(cb);
});

ee.on("three", () => {
  ee.emit("two", "good luck for your exams");
  console.log("Welcome to the world of events");
});
//triggering / Sending
// emit => Method , message => Event Name
ee.emit("three");