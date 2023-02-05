<script lang="js">
import HttpRequest from '../components/HttpRequest.vue';

export default {
  components: {
    HttpRequest
  }
}

</script>

<template>
  <div class="http-container">
    <h1 class="title">Http Request</h1>
    <HttpRequest />
  </div>
</template>

<style scoped lang="scss">
.http-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding-top: 2rem;
}

.title {
  color: #1a222e;
  font-size: 1.5rem;
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