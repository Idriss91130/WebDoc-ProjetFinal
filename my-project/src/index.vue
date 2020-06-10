<template>
  <div id="index">
    <!-- <Title chapter="I" title_chapter="DISCOURS D’HITLER DEVANT LE REICHSTAG " date="30 janvier 1939"></Title> -->
    <ChapterText text="
Les nations ne veulent plus mourir sur le champ de bataille pour que cette race internationale instable profite d'une guerre ou 
accomplisse la vengeance de son Ancien Testament. Le mot d'ordre juif !! Prolétaires de tous les pays unissez-vous !! sera vaincu par 
une réalisation plus haute, c'est-à-dire !! Travailleurs de toutes les classes et de toutes les nations, reconnaissez votre ennemi 
commun ! !!"></ChapterText>
  </div>
</template>

// <script>
// import Title from './components/Title.vue'
import ChapterText from './components/ChapterText.vue'

export default {
  name: 'App',
  components: {
    // Title,
    ChapterText
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
  width: 100%;
  height: 100vh;
}
</style>