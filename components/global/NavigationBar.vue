<template>
  <ul class="navigation">
    <li class="navigation__item">
      <nuxt-link class="navigation__link" to="/about">About</nuxt-link>
    </li>
    <li class="navigation__item">
      <nuxt-link class="navigation__link" to="/articles">Articles</nuxt-link>
    </li>
  </ul>
</template>

<script>
</script>

<style lang="scss" scoped>

.navigation {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: var(--padding-df);
  list-style: none;
  position: relative;
  z-index: 2;
  &__item {
    margin: 0 15px;
    position: relative;
  }
  &__link {
    padding: var(--padding-lr);
    font-family: var(--ff-heading);
    font-size: var(--step-2);
    font-weight: var(--fw-base-m);
    letter-spacing: -0.5px;
    border-top: 5px solid transparent;
    padding-top: 5px;
    transition: var(--trn-default);
    &:hover,
    &--active {
      border-top: 5px solid #E85A4F;
    }
  }
}

@media (max-width: 992px) {
  .navigation {
    margin: 0;
    padding: 0 20px;
  }
}

@media (max-width: 640px) {
  .navigation {
    width: 100%;
    padding: 0;
    justify-content: flex-start;
  }

  .navigation__item {
    margin: 0 30px 0 0;
  }

  .navigation__link {
    padding: 5px 0 0 0;
  }
}

</style>