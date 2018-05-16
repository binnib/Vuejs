<template>
  <div id="app">
    <router-view></router-view>
    
      <h1>Vuex</h1>
      <app-quote></app-quote>
      <app-result></app-result>
      <hr>
      <app-counter></app-counter>
    </div>
 
</template>

<script>
  import quote from './components/Quote.vue';
  import Counter from './components/Counter.vue';
  import Result from './components/Result.vue';

  export default {
    components: {
      appQuote: quote,
      appCounter: Counter,
      appResult: Result,
    }
  }
</script>
