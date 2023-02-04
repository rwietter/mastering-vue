<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<template>
  <Header />
  <RouterView />
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 4rem);
}
</style>
