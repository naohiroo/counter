<!-- src/components/App.vue -->

<template>
  <div>
    <p>Hello, World!!!</p>
    <counter/>
  </div>
</template>

<script>
import Counter from './Counter'

export default {
  components: { Counter }
}
</script>
<style lang=>
* {
  border: 1px solid #FF00FF;
}
</style>