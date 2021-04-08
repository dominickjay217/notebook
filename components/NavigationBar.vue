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
        {{ item.title.toUpperCase() }}
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
          },
          {
            title: 'Contact',
            route: '#contact',
          },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0 60px;
  padding: 0;
  list-style: none;
  position: relative;
  z-index: 2;
  &__item {
    margin: 0 0 20px;
    position: relative;
  }
  &__link {
    padding: 10px 20px;
    box-shadow: none;
    letter-spacing: 0.5px;
    transition: none;
    &:hover,
    &--active {
      &::before,
      &::after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
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

@media (max-width: 640px) {
  .navigation {
    margin: 40px auto 20px;
  }
}

</style>