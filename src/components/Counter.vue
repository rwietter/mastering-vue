<script>
export default {
  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++
    }
  },

  props: {
    msg: String
  },

  computed: {
    computedCount() {
      return this.count
    }
  }
}
</script>

<template>
  <div class="counter">
    <h1 class="title">{{ msg || 'Counter' }}</h1>

    <div class="card">
      <button type="button" @click="increment">count is {{ count }}</button>
      <span class="computed">Computed {{ computedCount }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 4rem);
  flex-flow: column;

  >.title {
    color: #1a222e;
    font-size: 1.5rem;
  }

  >.read-the-docs {
    color: #e11f1f;
  }
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

.computed {
  color: #1a222e;
  font-size: 0.8rem;
  text-align: center;
}
</style>
