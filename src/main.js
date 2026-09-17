const { default: db } = require('@lib/sqlite/index.js');
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

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  const actions = Object.keys(db);
  actions.forEach(action => ipcMain.handle(`db_${action}`, async (event, ...args) => await db[action](...args)));
  console.log('[IPC] Ready');
  
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
