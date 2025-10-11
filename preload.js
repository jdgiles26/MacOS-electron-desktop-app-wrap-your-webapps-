// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  showDialog: () => ipcRenderer.invoke('show-dialog'),
});
