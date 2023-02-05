<template>
  <header class="c-header">
    <h1 class="o-header__title">My App</h1>
    <nav class="c-header__nav">
      <router-link class="o-header__link" to="/">Counter</router-link>
      <router-link class="o-header__link" to="/todo">Todo</router-link>
      <router-link class="o-header__link" to="/http">Http</router-link>
      <router-link class="o-header__link" to="/signup">Sign-up</router-link>
      <router-link class="o-header__link" to="/signin">Sign-in</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
.c-header {
  background-color: #e5e5e5;
  color: #222;
  padding: 10px 1rem;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
}

.o-header__title {
  margin: 0;
  font-size: clamp(1.5rem, 5vw, 1.6rem);
}

.c-header__nav {
  display: flex;
  padding-right: 2rem;
}

.c-header__nav .o-header__link {
  color: #222;
  text-decoration: none;
}

.c-header__nav .o-header__link+.o-header__link {
  margin-left: 1rem;
}
</style>