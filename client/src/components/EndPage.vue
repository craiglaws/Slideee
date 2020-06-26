<template lang="html">
  <div>
    <h2>Well done {{user.name}}</h2>
    
  </div>
</template>

<script>
export default {
  name: 'end-page',
  props: ["user"]
}
</script>

<style lang="css" scoped>
</style>
