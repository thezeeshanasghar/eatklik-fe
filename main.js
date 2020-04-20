const {app, BrowserWindow, Menu} = require('electron') 
const path = require('path') 
const url = require('url') 
let win 
function createWindow () { 
win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, './src/assets/images/icon.png')
}) // load the dist folder from Angular 
win.loadURL(url.format({ pathname: path.join(__dirname, 'dist/ek-fe/index.html'), protocol: 'file:', slashes: true })) 
Menu.setApplicationMenu(null)
// Open the DevTools optionally: 
// win.webContents.openDevTools() 
win.on('closed', () => { win = null }) 
} 

app.on('ready', createWindow) 
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit() } }) 
app.on('activate', () => { if (win === null) { createWindow() } })