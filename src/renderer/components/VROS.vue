<template>
  <webview
    id="webview"
    src="https://vros.jp"
  ></webview>
</template>

<script>
  import path from 'path'
  import { ipcRenderer } from 'electron'

  export default {
    name: 'VROS',
    mounted() {
      const webview = document.querySelector('webview')

      ipcRenderer.once('goLogin', () => {
        console.log('goLogin')
        webview.loadURL('https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=1009224866025-100m8o3t4691pjgs0vqnc4quo2b9uko0.apps.googleusercontent.com&redirect_uri=http://vros.jp/login/google&scope=https://www.googleapis.com/auth/plus.login%20https://www.googleapis.com/auth/youtube.force-ssl&access_type=offline')
      })


      webview.addEventListener('dom-ready', () => {
        if (process.env.NODE_ENV === 'development') {
          webview.openDevTools()
        }
        ipcRenderer.send('login')
      })

    },
    methods: {
      preload() {
        return `file:${path.resolve(__dirname, '../js', 'webview-ipc.js')}`
      }
    }
  }
</script>

<style scoped>
  webview {
    height: 100%;
  }
</style>