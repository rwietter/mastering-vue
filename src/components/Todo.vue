<script setup>

</script>


<template>
  <div class="todo">
    <h1 class="title">Todo</h1>

    <div class="card">
      <button type="button">Add Todo</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 4rem);
  flex-flow: column;
}

.title {
  color: #1a222e;
  font-size: 1.5rem;
}
</style>