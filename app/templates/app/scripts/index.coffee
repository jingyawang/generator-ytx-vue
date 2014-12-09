# require broswerify shim modules
require 'zepto'


# app entry

Vue = require 'vue'

appView = new Vue
  el: document.body
  data:
    currentView: 'main'
  components:
    'main': require './components/main/layout.vue'