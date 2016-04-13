# app entry
Vue = require 'vue'

appView = new Vue
  el: document.body
  data:
    currentView: 'loading'
  components:
    'loading': require './components/loading'