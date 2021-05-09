'use strict'

const path = require('path');
const usbDetect = require('usb-detection');
import { AdbBridge } from './modules/AdbBridge'
import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let win;

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    frame: false,
    minWidth: 1200,
    minHeight: 830,
    width: 1200,
    height: 830,
    backgroundColor: '#000000',
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
    usbDetect.stopMonitoring();
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  createWindow()
  usbDetect.startMonitoring();
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

/* Frame IPC Control
---------------------------------------------------------------------------------------------------- */

ipcMain.on('minimise-window', () => {
  win.minimize();
});

ipcMain.on('maximise-window', () => {
  if (BrowserWindow.getFocusedWindow().isMaximized()) {
    win.unmaximize();
  }
  else {
    win.maximize();
  }
});

ipcMain.on('exit-app', () => {
  // Forces closing of the focused window. unload and beforeunload events will not be emitted.
  win.destroy();
});

/* USB IPC Control
---------------------------------------------------------------------------------------------------- */

usbDetect.on('add', async (device) => {
  await AdbBridge.sleep(1000);
  const deviceIsQuest = await AdbBridge.isAQuest();
  if (deviceIsQuest) {
    win.webContents.send('usbAttached', device);
  }
});

usbDetect.on('remove', async (device) => {
  const deviceIsQuest = await AdbBridge.isAQuest();
  if (!deviceIsQuest) {
    win.webContents.send('usbRemoved', device);
  }
});
