<template>
    <header class="header">
        <div class="container">
            <h1 class="header__title heading heading--one">
              <NuxtLink class="header__link" to="/">
                  {{ person.fields.name }}
              </NuxtLink>
            </h1>
            <h2 class="header__tagline heading heading--two">
                {{ person.fields.title }}
            </h2>
          <NavigationBar />
        </div>
        <div class="container">
            <div class="hero" v-if="isHome">
                <span class="hero__tagline">
                “Leave it better than you found it.”
                </span>
                <span class="hero__image">
                <img
                    :src="person.fields.profileImage.fields.file.url + '?w=1200'"
                    :alt="person.fields.profileImage.fields.title"
                />
                </span>
            </div>
        </div>
    </header>

</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'

export default {
  props: ['person'],
  components: {
    NavigationBar
  },
  computed: {
    isHome() {
      return this.$route.name === 'index'
    }
  }
}
</script>

<style lang="scss" scoped>
// Header styles
.header {
  padding: 60px 20px 20px;
  background-color: var(--color-primary);
  margin-bottom: 40px;
  margin-top: -160px;
  &__title {
    text-align: center;
    font-size: 3rem;
    margin: 0;
  }
  &__tagline {
    font-size: 0.85rem;
    text-align: center;
    font-family: 'Mosk-light';
    margin-top: 0;
    color: var(--color-fourth);
  }
  &__link,
  &__link:hover {
    text-decoration: none;
    color: currentColor;

  }
}

//hero
.hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  align-items: center;
  &__tagline {
    padding: 100px 50px 150px;
    font-size: 5rem;
    font-family: 'SaltedMocha-Regular';
    transform: rotate(-15deg);
  }
  &__image {
    padding: 100px 50px;
    margin-left: 40px;
    transform: rotate(5deg);
    img {
      width: 100%;
    }
  }
}

@media (max-width: 767px) and (orientation: portrait) {
  /* A mobile version for all devices that is smaller than the smalles iPad */
  .header {
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .hero {
    grid-template-columns: repeat(4, 1fr);
    &__tagline {
      padding: 20px 0;
      transform: none;
      font-size: 4rem;
      grid-column: 1 / 4;
    }
    &__image {
      padding: 0px;
      margin-left: 0;
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
      grid-column: 4 / 5;
    }
  }
}


@media (max-width: 640px) and (orientation: portrait) {
  .hero {
    grid-template-columns: repeat(4, 1fr);
    &__tagline {
      padding: 20px 0;
      transform: none;
      font-size: 3rem;
      grid-column: 1 / 5;
      grid-row: 1;
      z-index: 1;
    }
    &__image {
      padding: 40px 0 0;
      margin-bottom: 40px;
      margin-left: 0;
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
      grid-column: 3 / 5;
      grid-row: 1;
    }
  }
}

</style>