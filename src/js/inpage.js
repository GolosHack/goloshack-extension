import PostMessageStream from 'post-message-stream';
console.log('inpage script');


var contentStream = new PostMessageStream({
    name: 'page',
    target: 'content',
})
contentStream.on('data', (data) => console.log('recieved inpage', data))
contentStream.write('send from inpage')