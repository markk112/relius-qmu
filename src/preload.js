
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            // Whitelisted channels that renderer can send data to
            let validChannels = [
                "minimise-window",
                "maximise-window",
                "exit-app",
                "GET_QUEST_PROPS",
                "writeToClipboard",
            ];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: (channel, func) => {
            // Whitelisted channels which can recieve from main process
            let validChannels = [
                "questAttached",
                "questRemoved",
                "GET_QUEST_PROPS__REPLY",
            ];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
);