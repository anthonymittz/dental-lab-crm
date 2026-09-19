/**
 * @typedef {Object} IpcAPI
 * @property {(data: any) => Promise<string>} ping
 */

/** @type {{[K in keyof IpcAPI as Uppercase<K>]: K}} */
const IPC = {
  PING: 'ping'
}

/** @type {IpcAPI} */
const ipc = {
  ping: async data => await window.ipc.ping(data),
};

export function initIpc(ipcMain) {
  ipcMain.handle(IPC.PING, (event, data) => 
    ({ message: "Pinging back", payload: data }));
}

export function bridgeIpc(contextBridge, ipcRenderer) {
  contextBridge.exposeInMainWorld('ipc', {
    ping: async data => await ipcRenderer.invoke(IPC.PING, data),
  });
}

export default ipc;