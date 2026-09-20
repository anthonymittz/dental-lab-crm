const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const { initIpc } = require('@/ipc.js');

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

app.whenReady().then(() => {
  initIpc(ipcMain, 
    {
      action: () => console.log('[IPC] Some action!'),
    }, 
    {
      ping: data => Promise.resolve("Pinging back: " + JSON.stringify(data))
    });
    
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
