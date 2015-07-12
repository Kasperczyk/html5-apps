var app = require('app'); // Module to control application life
var BrowserWindow = require('browser-window'); // Module to create native browser window

require('crash-reporter').start();

var mainWindow = null;
var __dirname = 'D:\\projects\\bachelorthesis\\html5-apps\\atom-electron\\hello-world\\';

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    // Load the index.html of the app
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});


