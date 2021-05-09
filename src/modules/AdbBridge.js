
const util = require('util');
const { spawn } = require('child_process');
const promExec = util.promisify(require('child_process').exec);

export const AdbBridge = {

    async execute(strcmd) {
        const { stdout, stderr } = await promExec(strcmd, {
            cwd: process.cwd() + '\\deps\\platform-tools',
        });
        return stdout;
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
        await this.sleep(1000);
        const cmd = await this.execute('adb devices -l');
        return cmd;
    },

    async executeSpawn(strcmd) {
        return new Promise((resolve, reject) => {
            const cmd = spawn(strcmd, [], {
                cwd: process.cwd() + '/deps/platform-tools',
                shell: true,
            });
            let stdout = '';
            cmd.stdout.on('data', data => {
                stdout += data.toString();
            });
            cmd.stderr.on('data', data => {
                stdout += data.toString();
            });
            cmd.stdout.on('close', code => {
                resolve(stdout);
            });
        });
    },

    async sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

}
