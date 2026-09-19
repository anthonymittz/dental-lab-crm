const { initIpc } = require('@/ipc.js');
const { DB } = require('@lib/sqlite/index.js');
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('node:path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // @ts-ignore
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // @ts-ignore
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

Menu.setApplicationMenu(null);

// db.createTable('users');
// let responder;
// function foo() { responder = bar; return "foo" }
// function bar() { responder = foo; return "bar" }
// /** @type {import('@lib/sqlite/actions/index.js').AdapterDB|DB|null} */
// let db = null;

app.whenReady().then(() => {
  initIpc(ipcMain);
  // ipcMain.handle('ping', () => 'pong');
  // responder = foo;
  // ipcMain.handle('swap', () => responder());
  // const actions = Object.keys(db);
  // actions.forEach(action => ipcMain.handle(`db_${action}`, async (event, ...args) => await db[action](...args)));
  // console.log('[IPC] Ready');
  // db = new DB("storage.db");
  // ipcMain.handle('db', async (event, location) => {
  //   db?.close();
  //   db = null;
  //   db = new DB(location);
  // });
  // ipcMain.handle('db_listTables', () => db?.listTables());
  
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
