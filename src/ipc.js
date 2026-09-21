/**
 * @typedef {Object} VoidHandlers
 * @prop {(...args: any[]) => void} action
 * @prop {(cb: Function) => void} reload
 */

/**
 * @typedef {Object} AsyncHandlers
 * @prop {(data: any) => Promise<string>} ping
 */

/**
 * Electron's inter-process communication interface  
 * (shared between Main and Renderer scripts, bridged via Preload script)
 * @typedef {VoidHandlers & AsyncHandlers} IpcAPI
 */

/**
 * IPC action handler functions.
 * @typedef {{[K in keyof IpcAPI]?: IpcAPI[K]}} IpcHandlers
 * @typedef {{[K in keyof VoidHandlers]?: VoidHandlers[K]}} VoidIpcHandlers
 * @typedef {{[K in keyof AsyncHandlers]?: AsyncHandlers[K]}} AsyncIpcHandlers
 */

/** 
 * IPC channels.
 * @type {{[K in keyof IpcAPI as Uppercase<K>]: K}} 
 */
const ON = {
  ACTION: 'action',
  PING: 'ping',
  RELOAD: 'reload',
};

/**
 * Map IPC actions to respective handlers (in the Main script).
 * @param {import("electron").IpcMain} ipcMain 
 * @param {VoidIpcHandlers} voidHandlers 
 * @param {AsyncIpcHandlers} asyncHandlers 
 */
export function initIpc(ipcMain, voidHandlers = {}, asyncHandlers = {}) {
  Object.keys(voidHandlers).forEach(action => 
    ipcMain.on(action, (_, ...args) => voidHandlers[action](...args)));

  Object.keys(asyncHandlers).forEach(action => 
    ipcMain.handle(action, (_, ...args) => asyncHandlers[action](...args)));
}

/**
 * Expose IPC actions for renderers (in the Preload script).
 * @param {import("electron").ContextBridge} contextBridge 
 * @param {import("electron").IpcRenderer} ipcRenderer 
 */
export function bridgeIpc(contextBridge, ipcRenderer) {
  /** @type {IpcAPI} */
  const api = {
    action: () => ipcRenderer.send(ON.ACTION),
    ping: async data => await ipcRenderer.invoke(ON.PING, data),
    reload: cb => ipcRenderer.on(ON.RELOAD, () => cb())
  };
  contextBridge.exposeInMainWorld('ipc', api);
}

/**
 * IPC API (to use in a Renderer).
 * @type {IpcAPI} 
 */
const ipc = {
  action: () => window.ipc.action(),
  ping: async data => await window.ipc.ping(data),
  reload: cb => window.ipc.reload(cb)
};

export default ipc;