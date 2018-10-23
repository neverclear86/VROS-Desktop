import {ipcMain, session} from 'electron'
import Store from 'electron-store'

let store = new Store()
let loginInfo = store.get('loginInfo')
if (loginInfo) {
  loginInfo.url = 'https://vros.jp'
  console.log(loginInfo)
  session.defaultSession.cookies.set(loginInfo, err => {
    if (err) {
      console.error(err)
    }
  })
} else {
  let login = function(e) {
    session.defaultSession.cookies.get({domain: 'vros.jp', name: '_vtuber_session'}, (err, cookies) => {
      let loginInfo = cookies[0]
      if (loginInfo) {
        store.set('loginInfo', loginInfo)
      } else {
        ipcMain.once('login', login)
        e.sender.send('goLogin')
      }
    })
  }
  ipcMain.once('login', login)
}