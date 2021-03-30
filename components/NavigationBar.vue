<template>
  <ul class="navigation">
    <li class="navigation__item">
      <NuxtLink
        class="navigation__link"
        to="/about"
      >
        About
      </NuxtLink>
    </li>
    <li class="navigation__item">
      <NuxtLink
        class="navigation__link"
        to="/blog"
      >
        Blog
      </NuxtLink>
    </li>
    <li class="navigation__item">
      <a
        href="#contact"
        class="navigation__link"
      >
        Contact
      </a>
    </li>
  </ul>
</template>

<script>
export default {

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
    text-decoration: none;
    text-transform: uppercase;
    font-family: var(--font-family-body);
    color: var(--color-font);
    padding: 10px 20px;
    font-weight: 300;
    &:hover,
    &--active {
      &::before,
      &::after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
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

</style>