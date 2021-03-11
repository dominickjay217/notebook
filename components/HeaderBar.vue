<template>
  <header class="header">
    <!-- <span class="me">
      <img
          :src="person.fields.profileImage.fields.file.url + '?w=1200'"
          :alt="person.fields.profileImage.fields.title"
      />
    </span> -->
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
          <span class="hero__tagline">
            <span :style="'--taglineSizeLg:' + taglineSizeLg + '; --taglineSizeSm:' + taglineSizeSm">{{ tagline }}</span>
            <button v-on:click="refreshTagline" class="hero__tagline-refresh">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
                  <g><g><g><path fill="#000000" d="M2.9,4.9c1.5,1.3,3,2.4,4.6,3.5c0.2,0.2,0.6,0.1,0.8-0.1c9.8-10,25.2-7.4,33.1,3.4     c1.6,2.2,2.7,4.9,3.5,7.5c1,3.2-4,2.6-6.1,3.1c-2,0.4-3.4-4.2-4.2-5.5c-1.2-2-2.7-3.7-4.5-5.2C27,9,23.2,8.9,19.5,9.5     c-1.2,0.2-6,1.2-5.4,3.6c0.3,1.2,1.3,1.8,2.1,2.6c1.7,1.5,1.2,1.5-0.9,2.1c-1.7,0.5-3.4,1-5.2,1.4C7,19.9,3.9,21.5,4,17.2     c0-3.9,0-7.9,0-11.8c0-0.8-1.2-0.8-1.3,0c0,5.3,0,10.5-0.1,15.8c0,0.4,0.4,0.7,0.8,0.6c5.3-0.9,10.5-2.2,15.6-3.9     c0.4-0.1,0.6-0.7,0.3-1c-1.5-1.4-6.2-4-1.2-5.7c3.4-1.2,6.9-0.9,10.1,0.7c4.3,2.2,6.6,7.6,8.5,11.8c0.1,0.3,0.5,0.3,0.7,0.3     c2.9-0.7,5.8-1.1,8.7-1.4c0.4,0,0.7-0.4,0.6-0.8C45,12.4,39,4.8,30,1.6c-4.1-1.4-8.7-1.2-12.9-0.1c-2.3,0.6-4.5,1.7-6.5,3     C7.5,6.6,7.2,6.9,3.8,4C3.2,3.5,2.3,4.4,2.9,4.9L2.9,4.9z"/></g></g><g><g><path fill="#000000" d="M1.2,29.5c2.5,8.8,9.2,15.3,18.1,17.4c4.6,1.1,9.4,0.2,13.7-1.4c2-0.7,3.7-1.9,5.4-3.1c2.8-2,4-0.3,6.7,1     c0.4,0.2,0.9,0,0.9-0.5c0-5-0.1-10-0.1-15c0-0.4-0.4-0.7-0.8-0.6c-5.3,0.8-10.6,1.6-16,2.4c-0.5,0.1-0.6,0.7-0.3,1     c1.3,1.4,4.7,3.4,2,5.3c-2.4,1.8-5.4,2.4-8.3,2.5c-6.6,0.3-11.8-5.4-12.2-11.7c0-0.4-0.4-0.7-0.8-0.6c-2.3,0.8-4.7,1.7-7,2.5     c-0.8,0.3-0.4,1.5,0.3,1.2c1.7-0.6,3.5-1.3,5.2-1.9c1.6-0.6,1.5,2.1,1.7,2.9c0.7,2.2,2.5,4.5,4.3,5.8c5.4,3.8,11.7,3.5,17.2,0.2     c1.3-0.8,2.3-1.6,2-3.1c-0.1-0.6-1.4-1.7-1.7-2c-2.1-2.2,1.1-1.7,3-2c2.4-0.4,4.7-0.7,7.1-1.1c3.5-0.5,2.8,1.7,2.8,4.5     c0,2.5,0,5,0.1,7.5c0,1.8-3.6-1.3-4.1-1.6c-0.2-0.2-0.6-0.1-0.8,0.1C27.4,51.4,7.2,45.9,2.4,29.2C2.2,28.4,1,28.8,1.2,29.5 L1.2,29.5z"/></g></g></g>
                </svg>
            </button>
          </span>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
      class="curve">
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
    </svg>
  </header>

</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'

export default {
  props: ['person'],
  data() {
    return {
      list: [
        {
          taglineSizeLg: '8.5rem',
          taglineSizeSm: '2.5rem',
          text: `Has a lot of ideas`,
        },
        {
          taglineSizeLg: '4.5rem',
          taglineSizeSm: '2.5rem',
          text: `Talk is cheap. Show me the code`,
        },
        {
          taglineSizeLg: '4.5rem',
          taglineSizeSm: '2.5rem',
          text: `Leave it better than you found it`,
        },
        // '',
        // 'Leave it better than you found it',
        // 'I’m very font of you because you are just my type'
      ],
      tagline: 'Leave it better than you found it',
      taglineSizeLg: '4.5rem',
      taglineSizeSm: '2.5rem',
    }
  },
  components: {
    NavigationBar
  },
  computed: {
    isHome() {
      return this.$route.name === 'index'
    }
  },
  methods: {
    refreshTagline() {
      var chosenNumber = Math.floor(Math.random() * this.list.length);
      this.tagline = this.list[chosenNumber].text;
      this.taglineSizeSm = this.list[chosenNumber].taglineSizeSm;
      this.taglineSizeLg = this.list[chosenNumber].taglineSizeLg;
    }
  }
}
</script>

<style lang="scss" scoped>

.curve {
  width: 100%;
  position: relative;
  z-index: 2;
  bottom: -25px;
}
// Header styles
.header {
  padding: 60px 0 20px;
  background: linear-gradient(to bottom, #d3f0f2, var(--color-primary));
  //background: linear-gradient(to bottom, #d3f0f2, var(--color-primary)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(to top, #283E51, #0A2342);
    z-index: 0;
  }
  &__title {
    text-align: center;
    font-size: 3rem;
    margin: 0;
    position: relative;
    z-index: 2;
  }
  &__tagline {
    font-size: 0.85rem;
    text-align: center;
    font-family: var(--font-family-body);
    margin-top: 0;
    color: var(--color-font);
    position: relative;
    z-index: 2;
  }
  &__link,
  &__link:hover {
    position: relative;
    color: var(--color-font);
    text-decoration: none;
  }
}

.header--dark {
  &::before {
    opacity: 1;
  }
}

//hero
.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: var(--grid-gap);;
  align-items: center;
  position: relative;
  &__tagline {
    color: var(--color-font);
    padding: 80px 50px 40px;
    font-family: var(--font-family-headings);
    font-weight: 900;
    text-align: center;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    z-index: 2;
    & span {
      min-height: 300px;
      font-size: var(--taglineSizeLg);
    }
    &-refresh {
      border: 0;
      background-color: transparent;
      max-width: 65px;
      margin-top: 20px;
      align-self: center;
      cursor: pointer;
      transition: .25s cubic-bezier(0.19, 1, 0.22, 1) transform;
      &:hover {
        transform: scale(1.1) rotate(180deg);
        transition: .25s cubic-bezier(0.19, 1, 0.22, 1) transform;
      }
      & svg path {
        fill: var(--color-font);
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
    grid-template-columns: repeat(4, 1fr);
    &__tagline {
      padding: 20px 0;
      transform: none;
      grid-column: 1 / 4;
      justify-content: flex-start;
      & span {
        font-size: var(--taglineSizeSm);
        min-height: auto;
      }
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