const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');

// Kita kunci ke mode produksi (bukan development)
const isDev = false; 

function createWindow() {
  const win = new BrowserWindow({
    width: 1200, 
    height: 800,
    title: "AmbisHub Suite",
    backgroundColor: '#ffffff', // Background putih bersih
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false 
    }
  });

  // Langsung panggil file fisik, tidak perlu loadURL localhost
  // Pastikan folder 'dist' sudah kamu copy ke dalam folder 'desktop'
  const indexPath = path.join(__dirname, '../frontend/dist/index.html');
  
  win.loadFile(indexPath).catch((err) => {
    console.error("Gagal memuat dashboard: Pastikan folder 'dist' ada di folder desktop!", err);
  });

  // Notifikasi Native untuk memantau target PENS (Skor 86)
  if (Notification.isSupported()) {
    new Notification({ 
      title: 'AmbisHub Suite', 
      body: 'Operator Malakul: Sistem Siap. Target A (86) sedang dipantau.' 
    }).show();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});