
import { ipcMain } from 'electron';
import { AdbBridge } from './AdbBridge.js';

ipcMain.on('getDeviceProperties', async (e) => {
    const getProps = await AdbBridge.execute('adb shell getprop');

    const strs = getProps.replace(/\s+/g, '');
    const found = strs.match(/\[ro\.build\.branch\]:\[(.*?)\]/)[1];
    const found2 = strs.match(/\[ro\.product\.model\]:\[(.*?)\]/)[1];
    const out = { model: found2, branch: found };
    /*
    usage
    adb shell getprop ro.build.version.sdk
  
    ro.product.model
    "Quest 2"
    ro.build.branch
    "hollywood-v23"
    */

    e.reply('getDeviceProperties_REPLY', out);
});