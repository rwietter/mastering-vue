<template>
  <div class="profile">
    <h1 class="title">Profile</h1>
    <div class="card">
      <button type="button">Sign In</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
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