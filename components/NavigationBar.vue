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
    box-shadow: none;
    letter-spacing: 0.5px;
    transition: none;
    font-family: var(--ff-alt-alpha);
    font-size: var(--step-0);
    font-weight: var(--fw-base-m);
    letter-spacing: -0.5px;
    &:hover {
      color: var(--ff-color);
    }
    &:hover,
    &--active {
      &::before,
      &::after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-weight: var(--fw-base);
      }
      &::before {
        content: '{';
        left: 5px;
        top: calc(50% - 5px);
      }
      &::after {
        content: '}';
        right: 5px;
        top: calc(50% + 5px);
      }
    }
  }
}

@media (max-width: 992px) {
  .navigation {
    margin: 0;
    &__link {
      font-size: var(--step-1);
    }
  }
}

</style>