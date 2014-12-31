WechatApi = require 'YTX_WechatApi'

WechatApi.ready =>
  WechatApi.shareToFriend share.friend, share.friend
  WechatApi.shareToTimeline share.friend, share.friend

module.exports = share = 
  #分享给朋友
  friend:
    title: ""
    desc: ""
    link: ""
    imgUrl: ""
    success: null
    before: null
    error: null
    cancel: null
    always: null

  #分享到朋友圈
  timeline:
    title: ""
    desc: ""
    link: ""
    imgUrl: ""
    success: null
    before: null
    error: null
    cancel: null
    always: null


  





