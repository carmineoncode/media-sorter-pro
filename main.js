const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    awaitWriteFinish: true,
  });
}

function createWindow() {
  let iconPath;
  if (process.platform === 'win32') {
    iconPath = path.join(__dirname, 'assets', 'icon.ico');
  } else if (process.platform === 'darwin') {
    iconPath = path.join(__dirname, 'assets', 'icon.icns');
  } else {
    iconPath = path.join(__dirname, 'assets', 'icon.png');
  }

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: iconPath,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:9000');

    // Create a custom menu for development mode
    const menu = Menu.buildFromTemplate([
      {
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: () => {
              mainWindow.webContents.reload();
            },
          },
          {
            label: 'Toggle DevTools',
            accelerator: 'CmdOrCtrl+Shift+I',
            click: () => {
              mainWindow.webContents.toggleDevTools();
            },
          },
        ],
      },
    ]);
    Menu.setApplicationMenu(menu);
  } else {
    mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
    Menu.setApplicationMenu(null); // Remove menu in production
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});