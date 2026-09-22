const { app, BrowserWindow, Menu } = require('electron');
const path = require('node:path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

/** @type {import('electron').MenuItemConstructorOptions[]} */
const menuTemplate = [{
  label: 'Hidden Actions',
  submenu: [
    {
      label: 'Custom Hotkey',
      accelerator: 'CommandOrControl+K',
      click: () => console.log('Local hotkey triggered!')
    },
    {
      label: 'Toggle Developer Tools',
      accelerator: 'F12',
      role: 'toggleDevTools'
    }
  ]
}];

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
  mainWindow.setAutoHideMenuBar(true);

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => 
  process.platform !== 'darwin' && app.quit());
