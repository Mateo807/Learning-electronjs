const { contextBridge, ipcRenderer } = require('electron')

//contextBridge is used to safely expose APIs to the renderer process
//ipcRenderer is used to communicate with the main process via IPC (Inter-Process Communication)


// Expose the versions and ping function to the renderer process
// This allows the renderer process to access these functions without exposing the entire Node.js API
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),

})