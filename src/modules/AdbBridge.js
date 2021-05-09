
const { spawn } = require('child_process');

export const AdbBridge = {
    async execute(strcmd) {
        return new Promise((resolve, reject) => {
            const cmd = spawn(strcmd, [], {
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
}
