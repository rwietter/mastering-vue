<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

const handleClick = () => {
  count.value++
}

</script>

<template>
  <div class="counter">
    <h1 class="title">{{ msg || 'Counter' }}</h1>

    <div class="card">
      <button type="button" @click="handleClick">count is {{ count }}</button>
    </div>
  </div>
</template>

<style lang="scss">
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;

  >.title {
    color: #1a222e;
    font-size: 1.5rem;
  }

  >.read-the-docs {
    color: #e11f1f;
  }
}

.card button {
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  color: #111;
  font-size: 1.2rem;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  height: 50px;
  margin: 0;
  outline: 0;
  width: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
