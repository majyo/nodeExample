var net = require('net');
var count = 0;
var users = {};

var server = net.createServer(function (conn) {
  function broadcest(msg, exceptMyself) {
    for (var i in users) {
      if (!exceptMyself || i != nickname) {
        users[i].write(msg);
      }
    }
  }
  var nickname;
  count++;
  conn.setEncoding('utf8');
  conn.write(
    '\n > welcome to \033[92mnode-chat\033[39m!'
    + '\n > ' + count + ' other people are connected at this time.'
    + '\n > please write your name and press Enter: '
  );
  conn.on('close', function () {
    count--;
    delete users[nickname];
    broadcest('\033[90m> ' + nickname + ' left the room\033[39m\n');
  });
  conn.on('data', function (data) {
    data = data.replace('\r\n', '');
    if (!nickname) {
      if (users[data]) {
        conn.write('\033[93mnickname already in use. try again: \033[39m');
        return;
      } else {
        nickname = data;
        users[nickname] = conn;
        for (var i in users) {
          users[i].write('\033[90m> ' + nickname + ' joined the room\033[39m\n');
        }
      }
    } else {
      for (var i in users) {
        users[i].write('\033[96m> ' + nickname + ': \033[39m' + data + '\n');
      }
    }
  });
});

server.listen(3000, function () {
  console.log('\033[96mserver listening on *:3000\033[39m');
});
