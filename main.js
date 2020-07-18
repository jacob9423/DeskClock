const { app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow () {
   mainWindow = new BrowserWindow({
    //real width/hight
    width: 460,
    height: 160,
    //debug width/hight
    // width: 800,
    // height: 400,
    resizable: false,
    transparent: true,
    frame: false,
    icon: false,
    webPreferences: {
        nodeIntegration: true
     }
  })
  mainWindow.removeMenu();
  mainWindow.loadFile('./src/html/index.html');
}

// to fix transparency
app.on('ready', function () {
    setTimeout(function() {
        createWindow();
    }, 300);
});