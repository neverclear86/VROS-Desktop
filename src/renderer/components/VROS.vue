<template>
  <webview
    id="webview"
    v-bind:preload="preload()"
    src="https://vros.jp"
  ></webview>
</template>

<script>
  import path from 'path'
  export default {
    name: 'VROS',
    mounted() {
      const webview = document.querySelector('webview')
      webview.addEventListener("ipc-message", event => {
        console.log("channel: " + event.channel)
      })

      webview.addEventListener('dom-ready', () => {
        webview.openDevTools() // webview側のデベロッパーツールを表示する。うざかったら消していい。
        webview.send("ping")
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