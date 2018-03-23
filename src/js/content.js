import PortStream from './libs/port-stream';
import PostMessageStream from 'post-message-stream';

console.log('content js');

// Inject inpage script
init();

function init() {
  setupInjection();
  connectToBackend();
  connectToInject();
}

function setupInjection() {
  var s = document.createElement("script");
  s.src = chrome.extension.getURL("inpage.bundle.js");

  var container = document.head || document.documentElement;
  container.insertBefore(s, container.children[0]);

  s.onload = function () {
    s.remove();
  };
}

function connectToBackend() {
  var port = chrome.extension.connect({
    name: "content"
  });
  connectRemote(port);
  function connectRemote(remotePort) {
    const portStream = new PortStream(remotePort);

    portStream.write('hello from content');
    portStream.on('data', (data) => console.log('recieved content: ', data));
  }
}

function connectToInject() {
  var injectStream = new PostMessageStream({
    name: 'content',
    target: 'page',
  })

  injectStream.on('data', (data) => console.log('recieved content', data))
  injectStream.write('send from content')
}