<template>
  <div id="index">
    <Title chapter="I" title_chapter="DISCOURS D’HITLER DEVANT LE REICHSTAG " date="30 janvier 1939"/>
  </div>
</template>

<script>
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    Title
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

#index {
  background-color: black;
}
</style>