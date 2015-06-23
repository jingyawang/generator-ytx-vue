# app entry
Vue = require 'vue'
require 'weixin-common'

appView = new Vue
  el: document.body
  data:
    currentView: 'loading'
  components:
    'loading': require './components/loading'
    'c-share': require './components/share'