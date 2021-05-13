
const util = require('util');
const promExec = util.promisify(require('child_process').exec);

export const AdbBridge = {

    async execute(shellCmd) {
        const { stdout, stderr } = await promExec(shellCmd, {
            cwd: process.cwd() + '\\deps\\platform-tools',
        });
        if (stdout) {
            return stdout;
        } else {
            return stderr;
        }
    },

    async isAQuest() {
        const devicesStr = await this._getAdbDevices()
        if (devicesStr.includes('Quest') && devicesStr.includes('hollywood')) {
            return true;
        } else {
            return false;
        }
    },

    async _getAdbDevices() {
        return await this.execute('adb devices -l'); 
    },

    // Utilities

    async sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

}
