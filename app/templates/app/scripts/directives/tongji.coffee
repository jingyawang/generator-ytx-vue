{statistic} = require 'weixin-common'
urlReg = /virtual/

fire = (elm, opt)->
  e = document.createEvent('Event')
  e.initEvent opt.type, true, true
  e[k] = v for k,v of opt
  elm.dispatchEvent(e) 

Vue.directive 'tongji',
  isLiteral: true
  bind: ->
    [url, redirect] = @vm.$interpolate(@raw).split(';')
    @el.addEventListener 'click', (e)=>
      statistic(url)
      setTimeout =>
        fire @el, type: 'tongjiEnd'
        location.href = redirect if redirect
      , 50

 