const {ipcRenderer} = require('electron')

ipcRenderer.on('ping', (e, data) => {
  ipcRenderer.sendToHost('pong');
});

window.onload = function(event) {
  ipcRenderer.sendToHost("onload")
}