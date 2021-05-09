
const util = require('util');
const promExec = util.promisify(require('child_process').exec);

export const AdbBridge = {
    async execute(strcmd) {
        const { stdout, stderr } = await promExec(strcmd);
        return stdout;
    }
}
