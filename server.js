const io = require('socket.io')();

io.on('connection', client => {
    client.on('chat message', msg => {
        console.log(`UserId: ${msg.userId} sent message: ${msg.text}`);
        io.emit('chat message', msg);
    });

    client.on('delete message', id => {
        console.log(`Deleted message: ${id}`);
        io.emit('delete message', id);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);