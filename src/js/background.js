import PortStream from './libs/port-stream';
import createWindow from './libs/txWindow';
import "../img/logo.png";
let stream;

console.log('start background.js');

init();

function init() {
    connectToStream();
}

function connectToStream() {
    chrome.extension.onConnect.addListener(port => {
        stream = new PortStream(port);

        // stream.write('hello from back');
        // stream.on('data', (data) => console.log('recieved background ', data));
        setupStream();
    })
}

function setupStream() {
    stream.on('data', data => {
        switch (data.type) {
            case 'send_tx': {
                console.log('get TX:', data);
                createWindow();
            }
        }
    })
}