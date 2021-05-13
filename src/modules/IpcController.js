
import { ipcMain, clipboard, BrowserWindow } from 'electron';
import { AdbBridge } from './AdbBridge.js';

const usbDetect = require('usb-detection');

// Native

ipcMain.on('writeToClipboard', (e, text) => {
    clipboard.writeText(text);
});

usbDetect.on('add', async (device) => {
    await AdbBridge.sleep(1000);
    const deviceIsQuest = await AdbBridge.isAQuest();
    if (deviceIsQuest) {
        BrowserWindow.getFocusedWindow().webContents.send('questAttached', device);
    }
});

usbDetect.on('remove', async (device) => {
    const deviceIsQuest = await AdbBridge.isAQuest();
    if (!deviceIsQuest) {
        BrowserWindow.getFocusedWindow().webContents.send('questRemoved', device);
    }
});

// Frame

ipcMain.on('minimise-window', () => {
    BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on('maximise-window', () => {
    if (BrowserWindow.getFocusedWindow().isMaximized()) {
        BrowserWindow.getFocusedWindow().unmaximize();
    }
    else {
        BrowserWindow.getFocusedWindow().maximize();
    }
});

ipcMain.on('exit-app', () => {
    // Forces closing of the focused window. unload and beforeunload events will not be emitted.
    BrowserWindow.getFocusedWindow().destroy();
});

// AdbBridge

ipcMain.on('GET_QUEST_PROPS', async (e) => {
    const allProps = await AdbBridge.execute('adb shell getprop');

    const allPropsNoSpaces = allProps.replace(/\s+/g, '');
    const qBranch = allPropsNoSpaces.match(/\[ro\.build\.branch\]:\[(.*?)\]/)[1].split('-'); // ro.build.branch
    const qSerial = allPropsNoSpaces.match(/\[ro\.serialno\]:\[(.*?)\]/)[1]; // ro.serialno
    
    const propsObj = {
        model: qBranch[3],
        serial: qSerial,
        manufacturer: qBranch[1],
        android: qBranch[2],
        firmware: qBranch[4]
    };

    e.reply('GET_QUEST_PROPS__REPLY', propsObj);
});