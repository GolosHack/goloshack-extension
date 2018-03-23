import React from "react";
import { render } from "react-dom";
import PortStream from './libs/port-stream';
import Greeting from "./popup/index.jsx";
import "../css/popup.css";

render(<Greeting />, window.document.getElementById("app-container"));

var port = chrome.extension.connect({
    name: "popup"
});
connectRemote(port);
function connectRemote(remotePort) {
    const portStream = new PortStream(remotePort);

    portStream.write('hello from popup');
    portStream.on('data', (data) => console.log('recieved popup: ', data));
}