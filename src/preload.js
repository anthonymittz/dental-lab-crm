const { bridgeIpc } = require('@/ipc.js');
const { contextBridge, ipcRenderer } = require('electron');

bridgeIpc(contextBridge, ipcRenderer);
