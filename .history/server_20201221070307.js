const  app = require('express')();
const  http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('server is listening on port 3000');
});
