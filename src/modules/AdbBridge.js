
const { spawn, exec } = require('child_process');
const util = require('util');
const promExec = util.promisify(exec);

export const AdbBridge = {
    async execute(strcmd) {
        const { stdout, stderr } = await promExec(strcmd);
        return stdout;
    }
}
