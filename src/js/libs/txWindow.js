function createWindow() {
    // TODO: chrome dependency
    chrome.windows.create({
        url: chrome.extension.getURL('dialog.html'),
        type: 'popup',
        focused: true,
        width: 250,
        height: 400,

    });
}

export default createWindow;