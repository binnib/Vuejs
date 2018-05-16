<template>
    <div>
      <div>Counter: {{ counter }}</div>
    </div>
</template>

<script>
    export default {
      computed: {
        counter() {
          return this.$store.getters.doubleCounter;
        }
      }
    }
</script>

<style scoped>
    div {
      color: red;
    }
</style>
