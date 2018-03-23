import PortStream from './libs/port-stream';
import "../img/logo.png";

console.log('start background.js');

chrome.extension.onConnect.addListener(connectRemote)
function connectRemote(remotePort) {
    const portStream = new PortStream(remotePort);

    portStream.write('hello from back');
    portStream.on('data', (data) => console.log('recieved background ', data));
}