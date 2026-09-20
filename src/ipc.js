/**
 * @typedef {Object} IpcAPI
 * @property {(data: any) => Promise<string>} ping
 */

/** 
 * IPC channels.
 * @type {{[K in keyof IpcAPI as Uppercase<K>]: K}} 
 */
const IPC = {
  PING: 'ping'
};

/**
 * IPC API to use in renderers.
 * @type {IpcAPI} 
 */
const ipc = {
  ping: async data => await window.ipc.ping(data),
};

/**
 * Map IPC actions to respective handlers (on the Main side).
 * @param {import("electron").IpcMain} ipcMain 
 * @param {{[K in keyof IpcAPI]?: IpcAPI[K]}} handlers 
 */
export function initIpc(ipcMain, handlers = {}) {
  ipcMain.handle(IPC.PING, (event, data) => 
    ({ message: "Pinging back", payload: data }));
}

/**
 * Expose IPC actions for renderers (in Preload).
 * @param {import("electron").ContextBridge} contextBridge 
 * @param {import("electron").IpcRenderer} ipcRenderer 
 */
export function bridgeIpc(contextBridge, ipcRenderer) {
  /** @type {IpcAPI} */
  const api = {
    ping: async data => await ipcRenderer.invoke(IPC.PING, data),
  };
  contextBridge.exposeInMainWorld('ipc', api);
}

export default ipc;