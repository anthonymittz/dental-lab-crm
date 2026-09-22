const { app, ipcMain, BrowserWindow, Menu, MenuItem } = require('electron');
const { initIpc } = require('@/ipc.js');

if (require('electron-squirrel-startup')) {
  app.quit();
}
/** @type {BrowserWindow|null} */
let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

const menu = new Menu();
const submenu = Menu.buildFromTemplate([{
  label: 'Reload app',
  // click: () => { mainWindow?.webContents.send('reload'); console.log('Reload...')},
  accelerator: 'CommandOrControl+Shift+R'
}]);
menu.append(new MenuItem({ label: 'App', submenu }));
Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
  initIpc(ipcMain, 
    { action: () => console.log('[IPC] Some action!') }, 
    { ping: data => Promise.resolve("Pinging back: " + JSON.stringify(data)) }
  );
    
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
