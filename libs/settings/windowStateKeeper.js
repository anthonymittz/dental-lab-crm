import { screen } from 'electron';
import settings from 'electron-settings';

export const windowStateKeeper = async (windowName) => {
  let window, windowState;

  const getWindowState = async () => {
    if (await settings.has(`windowState.${windowName}`)) {
      windowState = await settings.get(`windowState.${windowName}`);
      return;
    }

    const size = screen.getPrimaryDisplay().workAreaSize;

    windowState = {
      x: undefined,
      y: undefined,
      width: size.width / 2,
      height: size.height / 2,
    };
  };

  const saveState = async () => {
    if (!windowState.isMaximized) {
      windowState = window.getBounds();
    }
    windowState.isMaximized = window.isMaximized();
    await settings.set(`windowState.${windowName}`, windowState);
  };

  const track = async (win) => {
    window = win;
    ['resize', 'move', 'close'].forEach((event) => {
      win.on(event, saveState);
    });
  };

  await getWindowState();

  return {
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    isMaximized: windowState.isMaximized,
    track,
  };
};

/* Usage:
import {windowStateKeeper} from './utils/windowStateKeeper';

const mainWindowStateKeeper = await windowStateKeeper('main');
mainWin = new BrowserWindow({
    title: 'Desktop',
    x: mainWindowStateKeeper.x,
    y: mainWindowStateKeeper.y,
    width: mainWindowStateKeeper.width,
    height: mainWindowStateKeeper.height,
    webPreferences: { ... },
});

mainWindowStateKeeper.track(mainWin);
*/