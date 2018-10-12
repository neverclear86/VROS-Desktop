import { ipcMain, session } from 'electron'

ipcMain.on('getCookie', e => {
  console.log('getCookie')
  session.defaultSession.cookies.get({}, (err, cookies) => {
    console.log(cookies)
  })
})