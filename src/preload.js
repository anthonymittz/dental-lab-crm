const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('db', {
  ping: () => ipcRenderer.invoke('ping')
});