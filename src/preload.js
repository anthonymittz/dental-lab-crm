const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipc', {
  ping: () => ipcRenderer.invoke('ping'),
  swap: () => ipcRenderer.invoke('swap'),
  db: (filename) => ipcRenderer.invoke('db', filename),
  db_addItem: (...args) => ipcRenderer.invoke('db_addItem', ...args),
  db_clearTable: (...args) => ipcRenderer.invoke('db_clearTable', ...args),
  db_createTable: (...args) => ipcRenderer.invoke('db_createTable', ...args),
  db_getAllItems: (...args) => ipcRenderer.invoke('db_getAllItems', ...args),
  db_getItem: (...args) => ipcRenderer.invoke('db_getItem', ...args),
  db_getItems: (...args) => ipcRenderer.invoke('db_getItems', ...args),
  db_getJson: (...args) => ipcRenderer.invoke('db_getJson', ...args),
  db_listTables: (...args) => ipcRenderer.invoke('db_listTables', ...args),
  db_putJson: (...args) => ipcRenderer.invoke('db_putJson', ...args),
  db_removeItem: (...args) => ipcRenderer.invoke('db_removeItem', ...args),
  db_updateItem: (...args) => ipcRenderer.invoke('db_updateItem', ...args),
  db_clearAllTables: (...args) => ipcRenderer.invoke('db_clearAllTables', ...args),
});

console.log('[preload.js] IPC ready');