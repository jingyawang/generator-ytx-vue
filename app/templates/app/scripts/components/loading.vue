<style lang="stylus">
@require './app/styles/sprites/flags'
.demo
  sprite($China-Flag, 0.64rem, 0.64rem)
  margin: 0 auto
  font: .06rem/0.95rem arial
  text-align: center
  color: white
  text-shadow: -1px -1px 5px rgba(0,0,0,0.5)
  

</style>
<template>
<div class="demo">{{demo}}</div>
</template>
<script lang="coffee">
  module.exports =
    data: -> 
      demo: 'hello world'
</script>