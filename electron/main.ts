import { app, BrowserWindow, ipcMain } from "electron";
// import * as path from "path";
import * as isDev from "electron-is-dev";
// import installExtension, {
//     REACT_DEVELOPER_TOOLS,
// } from "electron-devtools-installer";
import { GetData, getTime } from "./data";

let win: BrowserWindow | null = null;

function createWindow() {
    // let { width, height } = require("electron").screen.getPrimaryDisplay().size;
    win = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    ipcMain.on("get-time", (event, arg) => {
        event.reply("time-data", getTime());
        console.log(getTime());
    });

    ipcMain.on("show-data", (event, title) => {
        event.reply("return-data", {
            date: new Date(),
            table: title,
            data: GetData(),
        });
    });

    ipcMain.on("mouse-data", (event, title) => {
        // console.log(title);
        event.reply("data", console.log(title));
    });

    if (isDev) {
        // win.loadURL("http://localhost:3000/index.html");
        win.loadURL(`file://${__dirname}/../../electron/renderer.html`);
    } else {
        // 'build/index.html'
        win.loadURL(`file://${__dirname}/../index.html`);
    }

    win.on("closed", () => (win = null));

    // Hot Reloading
    // if (isDev) {
    //     // 'node_modules/.bin/electronPath'
    //     require("electron-reload")(__dirname, {
    //         electron: path.join(
    //             __dirname,
    //             "..",
    //             "..",
    //             "node_modules",
    //             ".bin",
    //             "electron"
    //         ),
    //         forceHardReset: true,
    //         hardResetMethod: "exit",
    //     });
    // }

    // DevTools
    // installExtension(REACT_DEVELOPER_TOOLS)
    //     .then((name) => console.log(`Added Extension:  ${name}`))
    //     .catch((err) => console.log("An error occurred: ", err));

    if (isDev) {
        // win.webContents.openDevTools();
    }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});
