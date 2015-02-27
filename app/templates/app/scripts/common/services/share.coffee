wx.ready ->
  wx.onMenuShareTimeline
    title: '' #分享标题
    link: '' # 分享链接
    imgUrl: '' # 分享图标
    success: -> 
        # 用户确认分享后执行的回调函数
    cancel: -> 
        # 用户取消分享后执行的回调函数
    fail: ->
      # 接口调用失败时执行的回调函数。
    complete: ->
      # 接口调用完成时执行的回调函数，无论成功或失败都会执行。
    trigger: ->
      # 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。

  wx.onMenuShareAppMessage
    title: '' # 分享标题
    desc: '' # 分享描述
    link: '' # 分享链接
    imgUrl: '' # 分享图标
    type: '' # 分享类型,music、video或link，不填默认为link
    dataUrl: '' # 如果type是music或video，则要提供数据链接，默认为空
    success: ->
        # 用户确认分享后执行的回调函数
    cancel: ->
        # 用户取消分享后执行的回调函数
    fail: ->
      # 接口调用失败时执行的回调函数。
    complete: ->
      # 接口调用完成时执行的回调函数，无论成功或失败都会执行。
    trigger: ->
      # 监听Menu中的按钮点击时触发的方法，该方法仅支持Menu中的相关接口。