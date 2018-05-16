<template>
  <div>
    <p>Inside Product Component</p>
    <router-link to="/"><button>Back</button></router-link>
  </div>
</template>

<script>
import quote from './Quote.vue';

export default {
  components: {
    appQuote: quote
  }
 }
</script>
