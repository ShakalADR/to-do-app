const {app, BrowserWindow, Tray, nativeImage} = require('electron')
const path = require('path')

let tray, window


function createWindow () {
    window = new BrowserWindow({
        width: 420,
        height: 560,
        show: false,
        frame: false,
        resizable: false,
        fullscreenable: false,
        transparent: false,
        skipTaskbar: true,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js')
        }
      })

      window.on('closed', () => window = null)

      window.loadURL('http://localhost:3000')
    }

const createTray = () => {
  let icon = path.join(__dirname, 'asserts/app-tray-ico.ico')
  icon = icon.replace(/\\/g,"/")

  tray = new Tray(icon)
  tray.on('click', (event) => toggleWindow())
}

const toggleWindow = () => {
  window.isVisible() ? window.hide() : showWindow()
}

const showWindow = () => {
  const position = windowPos()
  window.setPosition(position.x_pos, position.y_pos)
  window.show()
}

const windowPos = () => {
  const windowBounds = window.getBounds()
  const trayBounds = tray.getBounds()

  const x_pos = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))
  const y_pos = Math.round(trayBounds.y + trayBounds.height)

  return {x_pos, y_pos}
}

app.whenReady().then(() => {
  createTray()  
  createWindow()

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })