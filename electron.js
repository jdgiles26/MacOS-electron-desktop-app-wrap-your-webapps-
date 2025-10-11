// electron.js
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { fork } = require('child_process');

const isDev = !app.isPackaged;
let backendProcess;

function createBackend() {
  const serverPath = path.join(__dirname, 'server.js');
  backendProcess = fork(serverPath);

  backendProcess.on('message', (msg) => {
    console.log('Message from backend:', msg);
  });

  backendProcess.on('error', (err) => {
    console.error('Backend process error:', err);
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Handle IPC call from renderer
  ipcMain.handle('show-dialog', (event, arg) => {
    const systemInfo = `Electron: ${process.versions.electron}\nChrome: ${process.versions.chrome}\nNode: ${process.versions.node}`;
    dialog.showMessageBox(win, {
      type: 'info',
      title: 'System Information',
      message: 'React Electron App',
      detail: systemInfo,
    });
  });

  if (isDev) {
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }
}

app.whenReady().then(() => {
  createBackend();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('quit', () => {
  // Terminate the backend process when the app quits
  if (backendProcess) {
    console.log('Killing backend process...');
    backendProcess.kill();
  }
});
