# app entry
# require('weixin-common').configApp
#   defaultSid: "123"
#   defaultReffer: "123"

Vue = require 'vue'
# require 'weixin-common'

appView = new Vue
  el: document.body
  data:
    currentView: 'loading'
  components:
    'loading': require './components/loading'
    'c-share': require './components/share'