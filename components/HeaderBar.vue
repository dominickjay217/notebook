<template>
  <header
    class="header"
    :class="[isHome ? 'header-thick' : 'header-thin']"
  >
    <div class="container">
      <h1 class="header__title heading heading--one">
        <NuxtLink
          class="header__link"
          to="/"
        >
          {{ person.fields.name }}
        </NuxtLink>
      </h1>
      <h2 class="header__tagline heading heading--two">
        {{ person.fields.title }}
      </h2>
      <NavigationBar />
    </div>
    <div class="container">
      <div
        v-if="isHome"
        class="hero"
      >
        <span class="hero__fact">
          <span>
            Leave it better than you found it
          </span>
          <p>This is a place of
            <span class="typing">
              {{ fact }}
            </span>
          </p>
        </span>
      </div>
    </div>
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
      class="curve"
    >
      <path
        d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
      />
    </svg> -->
  </header>
</template>

<script>
  import NavigationBar from '~/components/NavigationBar.vue'

  export default {
    components: {
      NavigationBar
    },
    props: {
      'person': {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        list: [
          {
            factSizeLg: '3rem',
            factSizeSm: '3rem',
            text: `Experimenting`,
          },
          {
            factSizeLg: '3rem',
            factSizeSm: '3rem',
            text: `Writing`,
          },
        ],
        fact: 'Learning',
        factSizeLg: '3rem',
        factSizeSm: '3rem',
      }
    },
    computed: {
      isHome() {
        return this.$route.name === 'index'
      }
    },
    mounted () {
      setInterval(() => {
        var chosenNumber = Math.floor(Math.random() * this.list.length);
        this.fact = this.list[chosenNumber].text;
      }, 15000);
    }
  }
</script>

<style lang="scss">

.curve {
  width: 100%;
  position: relative;
  z-index: 2;
  bottom: -25px;
  fill: var(--curve-fill);
}

// Header styles
.header {
  padding: 60px 0 20px;
  background: var(--header-background);
  background-size: 400% 400%;
  background-position: var(--header-background-position);
  transition: 2s ease-in-out background-position;
  transition-delay: var(--header-background-delay);

  &__title {
    font-family: var(--ff-alt-alpha);
    text-align: center;
    font-size: 3rem;
    font-size: var(--step-3);
    margin: 0 auto 10px;
    position: relative;
    z-index: 2;
    color: var(--ff-color);
  }

  &__tagline {
    font-size: 0.85rem;
    text-align: center;
    font-family: var(--ff-base);
    font-weight: var(--fw-base);
    margin-top: 0;
    color: var(--ff-color);
    position: relative;
    z-index: 2;
    & p {
      font-family: var(--ff-base);
    }
  }

  &__link,
  &__link:hover {
    position: relative;
    box-shadow: none;
    transition: none;
  }
}

.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: var(--grid-gap);
  align-items: center;
  position: relative;
  margin: 0 0 20px;
  &__fact {
    color: var(--hero-fact);
    padding: 0;
    font-family: var(--ff-base);
    font-family: var(--ff-variable);
    font-weight: var(--fw-base-xl);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: -.5px;
    &::before {
      content: "";
      border-top: 1px solid var(--clr-fifth);
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      animation: borderTopGrow 2s forwards;
    }
    & span {
      padding: 40px 20px;
      width: auto;
      font-size: var(--step-3);
      text-align: center;
      position: relative;
      overflow: hidden;
      background: var(--hero-fact);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      text-fill-color: transparent;
      color: var(--ff-color);
      &::after {
        content: "";
        border-right: 1px solid var(--clr-fifth);
        position: absolute;
        right: 0;
        top: 0;
        height: 0;
        animation: borderRightGrow 2s forwards 2s;
      }
    }
    & p  {
      color: var(--ff-color);
      font-size: 0.85rem;
      font-size: var(--step--3);
      font-weight: var(--fw-base);
      max-width: 50%;
      text-align: left;
      margin: 0;
      padding: var(--padding-df);
      position: relative;
      &::before {
        content: "";
        border-top: 1px solid var(--clr-fifth);
        border-bottom: 1px solid var(--clr-fifth);
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 0;
        animation: borderTopBottomGrow 2s forwards 4s;
      }
      &::after {
        content: "";
        border-left: 1px solid var(--clr-fifth);
        border-right: 1px solid var(--clr-fifth);
        position: absolute;
        inset: 0;
        height: 0;
        animation: borderSidesGrow 2s forwards 6s;
      }
    }
  }
}

@keyframes borderTopGrow {
  100% {
    width: 100%;
  }
}

@keyframes borderBottomGrow {
  100% {
    width: 100%;
  }
}

@keyframes borderRightGrow {
  100% {
    height: 100%;
  }
}

@keyframes borderLeftGrow {
  100% {
    height: 100%;
  }
}

@keyframes borderTopBottomGrow {
  100% {
    width: 100%;
  }
}

@keyframes borderSidesGrow {
  100% {
    height: 100%;
  }
}

@keyframes textColorReveal {
  100% {
    color: var(--ff-color);
  }
}

@keyframes textReveal {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.header--dark {
  &::before {
    opacity: 1;
  }
}

@media (max-width: 1100px) {
  /* A mobile version for all devices that is smaller than the smalles iPad */
  .header {
    padding-top: 80px;
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  //hero
  .hero {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: var(--grid-gap);
    align-items: center;
    position: relative;
    &__fact {
      color: var(--ff-color);
      padding: 0;
      font-weight: var(--fw-base-xl);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      z-index: 2;

      & span {
        width: 100%;
        text-align: center;
      }
    }
  }
}

@media (max-width: 1100px) {

  /* A mobile version for all devices that is smaller than the smalles iPad */
  .header {
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .hero {
    &__image {
      padding: 0px;
      margin-left: 0;
      -webkit-transform: rotate(5deg);
      transform: rotate(5deg);
      grid-column: 4 / 5;
    }
    &__fact p {
      max-width: none;
      width: 100%;
    }
  }
}


@media (max-width: 640px) and (orientation: portrait) {
  .hero {
    grid-template-columns: repeat(4, 1fr);

    &__fact {
      transform: none;
      grid-column: 1 / 5;
      grid-row: 1;
      & span  {
        text-align: left;
        padding: var(--padding-df);
      }
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

.hero__fact .typing {
  color: currentColor;
  padding: 0;
  display: inline-flex;
  align-items: center;
  animation: typingRevealer 15s infinite 8s;
  font-weight: var(--fw-base-lg);
  font-size: var(--step--3);
  &::after {
    content: none;
  }
}

.header--dark .typing {
	-webkit-background-clip: text;
	-webkit-text-fill-color: var(--color-third);
  color: var(--color-third);
}

@media (max-width: 640px) {
  .hero__fact p,
  .hero__fact .typing {
    font-size: var(--step--2);
  }
}

// @keyframes typingRevealer {
//   0% {
//     opacity: 1;
//   }
//   85% {
//     opacity: 1;
//   }
//   90% {
//     opacity: 0;
//   }
// }
</style>