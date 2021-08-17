<template>
  <ul class="navigation">
    <li
      v-for="item in navigationItems"
      :key="item.title"
      class="navigation__item"
    >
      <NuxtLink
        class="navigation__link"
        :to="item.route"
      >
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navigationItems: [
          {
            title: 'About',
            route: '/about',
          },
          {
            title: 'Writing',
            route: '/writing',
          }
      ]
    }
  },
}
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
    margin: 0 10px;
    position: relative;
  }
  &__link {
    padding: var(--padding-lr);
    font-family: var(--ff-alt-alpha);
    font-size: var(--step-3);
    font-weight: var(--fw-base-m);
    letter-spacing: -0.5px;
    border-top: 5px solid transparent;
    transition: var(--trn-default);
    &:hover {
      color: var(--ff-color);
    }
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

</style>