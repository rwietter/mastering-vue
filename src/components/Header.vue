<template>
  <header>
    <h1>My App</h1>
    <nav>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/todo">Todo</router-link>
      <router-link to="/profile">Sign</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  background-color: #e5e5e5;
  color: #222;
  padding: 10px 1rem;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
}

h1 {
  margin: 0;
  font-size: clamp(1.5rem, 5vw, 1.6rem);
}

nav {
  display: flex;
  padding-right: 2rem;
}

nav a {
  color: #222;
  text-decoration: none;
}

nav a+a {
  margin-left: 1rem;
}
</style>