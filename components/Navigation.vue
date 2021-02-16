<template>
  <nav class="navigation">
    <div class="overlay" :style="cssVars"></div>
    <ul class="navigation__list">
      <li class="navigation__listitem">
        <nuxt-link
          prefetch
          to="/"
          class="navigation__listlink"
          @click.native="bgColor = 'var(--color-third)'"
        >
          <NavigationStripe :color="bgColor" />
          <span>About</span>
        </nuxt-link>
      </li>
      <li class="navigation__listitem">
        <nuxt-link
          prefetch
          to="/blog"
          class="navigation__listlink"
          @click.native="bgColor = 'var(--color-secondary-dark)'"
        >
          <NavigationStripe :color="bgColor" />
          <span>Blog</span>
        </nuxt-link>
      </li>
      <li class="navigation__listitem">
        <nuxt-link
          prefetch
          to="/resume"
          class="navigation__listlink"
          @click.native="bgColor = 'var(--color-fourth-light)'"
        >
          <NavigationStripe :color="bgColor" />
          <span>Resume</span>
        </nuxt-link>
      </li>
      <li class="navigation__listitem">
        <a
          href="https://codepen.io/dominickjay217/"
          target="_blank"
          rel="noopener"
          class="navigation__listlink"
        >
          <NavigationStripe :color="bgColor" />
          <span>Creative</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavigationStripe from '~/components/Navigation-Stripe.vue'

export default {
  components: {
    NavigationStripe,
  },
  data() {
    return {
      bgColor: localStorage.getItem('navColor'),
    }
  },
  computed: {
    cssVars() {
      localStorage.setItem('navColor', this.bgColor)
      return {
        '--bg-color': localStorage.getItem('navColor'),
      }
    },
  },
  mounted() {
    this.bgColor = localStorage.getItem('navColor')
  },
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 1s ease-out;
  & .overlay {
    transform: translateY(0) scale(100);
    transition: transform 0.85s ease-in-out;
  }
}

.overlay {
  background-color: var(--bg-color) !important;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  width: 50px;
  z-index: 999;
  opacity: 1;
  transition: transform 0.85s ease-in-out;
  transform: translate(-50px, -50px);
  border-radius: 50%;
}

.navigation {
  display: grid;
  grid-column: 1/5;
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    margin-left: auto;
    margin-bottom: 3rem;
    padding: 0;
    list-style: none;
    grid-column: 5/5;
    grid-row: 1;
  }
}

.navigation__listitem {
  margin: 0 1em 0.5em;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
}

.navigation__listlink {
  width: 100px;
  position: relative;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--font-color);
  border-bottom: none;
  & span {
    position: relative;
  }
  & svg {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(-5deg) scale(0);
    transition: var(--transition-speed) var(--transition-timing)
      var(--transition-property);
  }
  &:hover,
  &--active,
  &:focus {
    border: none;
    & svg {
      opacity: 1;
      transform: translateY(-50%) rotate(5deg) scale(1.5);
      transition: var(--transition-speed) var(--transition-timing)
        var(--transition-property);
    }
  }
  &--active,
  &:hover {
    text-decoration: none;
    &::after {
      transform: scale(1);
    }
  }
}

$colors: var(--color-third), var(--color-secondary-dark),
  var(--color-fourth-light), var(--color-primary-dark);

@for $i from 1 through length($colors) {
  .navigation__listitem:nth-child(#{$i}) .navigation__listlink--active svg path,
  .navigation__listitem:nth-child(#{$i}) .navigation__listlink:hover svg path {
    fill: nth($colors, $i);
    opacity: 0.5;
  }
}

@media (max-width: 992px) {
  .navigation {
    padding-left: 25vw;
  }
}

@media (max-width: 640px) {
  .navigation__list {
    margin-left: -0.85rem;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    &item {
      width: 100%;
      &:last-child {
        margin-right: 1em;
      }
    }
  }
}
</style>
