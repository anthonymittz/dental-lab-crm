const { bridgeIpc } = require('@/ipc.js');
const { contextBridge, ipcRenderer } = require('electron');

bridgeIpc(contextBridge, ipcRenderer);

console.log('[preload.js] IPC ready');