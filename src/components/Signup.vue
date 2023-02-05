<script>


</script>

<template>
  <div class="c-card">
    <h1 class="c-card__title">Sign-up</h1>

    <form class="c-card__form">
      <div class="c-card__group">
        <label class="o-card__label" for="email">Email</label>
        <input class="o-card__input" type="email" id="email" v-model="email" />
      </div>

      <div class="c-card__group">
        <label class="o-card__label" for="password">Password</label>
        <input class="o-card__input" type="password" id="password" v-model="password" />
      </div>

      <div class="c-card__group">
        <label class="o-card__label" for="confirmPassword">Confirm Password</label>
        <input class="o-card__input" type="password" id="confirmPassword" v-model="confirmPassword" />
      </div>

      <div class="c-card__group">
        <button class="o-card__submit" type="submit" @click.prevent="signup">Sign-up</button>
      </div>
    </form>
  </div>
</template>

<style>
.c-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: black;
}
</style>