const {app, BrowserWindow, ipcMain} = require('electron');
// The 'app' module controls the application's lifecycle
// The 'BrowserWindow' module creates and manages application windows
// The 'ipcMain' module handles IPC (Inter-Process Communication) from the renderer process
// 'path' module is used to handle and transform file paths

const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('index.html');
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(()=>{
    createWindow();

    // Handle the 'ping' IPC call
    ipcMain.handle('ping', ()=>'pong');

    // Recreate the window when the app is activated (macOS)
    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    });
});


// Quit when all windows are closed, except on macOS
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});