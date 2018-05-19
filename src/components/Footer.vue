<template>
  <footer>
  Created by <a href="http://www.ananayneogi.com">Ananya</a> with an unhealthy amount of 🍫. This is open source, <a href="https://github.com/ananyaneogi/b-tunes">visit the repo.</a>
</footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
footer {
  text-align: center;
  font-size: 14px;
  padding: 15px;
  background: #eee;
  margin-top: 40px;
}
footer > a {
  color: #ff0000;
  &:hover {
    color: #ff0000;
    opacity: 0.7;
  }
}
</style>
