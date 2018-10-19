const {ipcRenderer} = require('electron')

ipcRenderer.send('login')

ipcRenderer.once('goLogin', e => {
  window.location = 'https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=1009224866025-100m8o3t4691pjgs0vqnc4quo2b9uko0.apps.googleusercontent.com&redirect_uri=http://vros.jp/login/google&scope=https://www.googleapis.com/auth/plus.login%20https://www.googleapis.com/auth/youtube.force-ssl&access_type=offline'
})