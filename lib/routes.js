//  var initialGreetings = function () {
//    return "Hello World from Server";
//  }

module.exports = {
  method: 'get',
  path: '/',
  handler: function (request, reply) {
    reply("Greetings from the TESTC server");
  }
};
