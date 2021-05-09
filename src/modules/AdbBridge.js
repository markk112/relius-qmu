
const { spawn } = require('child_process');

export const AdbBridge = {
    execute (strcmd, callback) {
        const cmd = spawn(strcmd);
        let stdout;
        cmd.stdout.on('data', data => {
            stdout += data.toString();
        });
        cmd.stdout.on('close', code => {
            return callback(stdout);
        });
    },
}
