module.exports = 
  #todo: 向产品要 sid
  sid: 0
  #todo: 默认 reffer 问产品
  reffer: (location.search.match(/(?:\?|&)reffer=(.*?)(?:&|$)/) || [undefined, ''])[1] or 869915