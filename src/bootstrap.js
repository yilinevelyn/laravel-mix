//每個檔案需要用到的套件初始化 獨立出來維護
window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.Vue = require('vue')

window.alertify = require('alertifyjs')