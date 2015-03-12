<style>
.share-win {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkQwNDgzMkM5MkQxMUUzQkNGMkE2Q0FENTYzRTVGOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkQwNDgzM0M5MkQxMUUzQkNGMkE2Q0FENTYzRTVGOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGRDA0ODMwQzkyRDExRTNCQ0YyQTZDQUQ1NjNFNUY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGRDA0ODMxQzkyRDExRTNCQ0YyQTZDQUQ1NjNFNUY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+457BlAAAABtJREFUeNpiZGBgOMNABGBiIBKMKqSOQoAAAwBVNQDgpAAyvAAAAABJRU5ErkJggg==);
  width: 100%;
  z-index: 999;
}
.share-win .div-img:before {
  content: "";
  display: block;
  padding-top: 100%;
}
.share-win .div-img {
  position: relative;
  width: 100%;
}
.share-win .div-img img {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
<template>
<section class="share-win" v-if="show" v-on="click: show=false">
  <div class="div-img"><img v-attr="src: src"/></div>
</section>
</template>
<script lang="coffee">
module.exports =
  data: ->
    show: false
  paramAttributes: ['src']

  events:
    'show-share': -> @show = true

</script>