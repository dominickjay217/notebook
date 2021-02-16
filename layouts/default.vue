<template>
  <div class="body" :class="themeToggle">
    <svg
      id="lightbulb"
      width="182"
      height="287"
      viewBox="0 0 182 287"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="changeTheme"
    >
      <path
        id="lighting"
        d="M69.5 104C97.7302 113.861 80.4342 113.061 108.5 104L182 287H0L69.5 104Z"
        fill="url(#paint0_linear)"
      />
      <path
        id="bulb"
        d="M90.0038 123.013C81.2256 123.013 74.1094 115.897 74.1094 107.119V94.6016H105.899V107.119C105.898 115.897 98.782 123.013 90.0038 123.013Z"
      />
      <path
        d="M90.0059 77.981C88.7924 77.981 87.8086 76.9972 87.8086 75.7837V2.19727C87.8086 0.983789 88.7924 0 90.0059 0C91.2193 0 92.2031 0.983789 92.2031 2.19727V75.7837C92.2031 76.9972 91.2193 77.981 90.0059 77.981Z"
        fill="#465A61"
      />
      <path
        d="M100.513 65.8883H79.4961V44.7315C79.4961 41.7518 81.9116 39.3359 84.8917 39.3359H95.1178C98.0976 39.3359 100.513 41.7515 100.513 44.7315V65.8883H100.513Z"
        fill="#596C76"
      />
      <path
        d="M100.087 52.1557V52.6159L83.7785 51.2422C63.0094 54.0717 47.0039 71.8763 47.0039 93.4221V105.878C47.0039 107.496 48.3155 108.807 49.9336 108.807H129.224C130.842 108.807 132.153 107.496 132.153 105.878V93.4221C132.154 73.5356 118.518 56.835 100.087 52.1557Z"
        fill="#7A8C98"
      />
      <path
        d="M90.0048 50.8438C88.0325 50.8438 86.0925 50.9809 84.1914 51.2404C104.954 54.0758 120.953 71.8771 120.953 93.4183V105.874C120.953 107.492 119.641 108.804 118.023 108.804H129.65C131.268 108.804 132.579 107.492 132.579 105.874V93.4183C132.58 69.9049 113.518 50.8438 90.0048 50.8438V50.8438Z"
        fill="#596C76"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="95.75"
          y1="119.508"
          x2="95.75"
          y2="304.359"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE9A3" />
          <stop offset="0.842448" stop-color="#FFE9A3" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <nuxt />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Contact,
    Footer,
  },
  data() {
    return {
      themeToggle: localStorage.getItem('theme'),
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
  methods: {
    changeTheme: function () {
      if (
        this.themeToggle == 'light' ||
        localStorage.getItem('theme') === null
      ) {
        localStorage.setItem('theme', 'dark')
      } else {
        localStorage.setItem('theme', 'light')
      }
      this.themeToggle = localStorage.getItem('theme')
    },
  },
}
</script>

<style lang="scss">
@import url('https://use.typekit.net/hgu7qbd.css');

@font-face {
  font-family: 'Wotfard';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/Wotfard-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Wotfard-Strong';
  font-style: normal;
  font-weight: var(--font-weight-bold);
  font-display: swap;
  src: url('~assets/fonts/Wotfard-Bold.ttf') format('truetype');
}

:root {
  --color-primary: #e3f1f2;
  --color-secondary: #568389;
  --color-third: #fe9948;
  --color-fourth: #584945;
  --color-body: rgb(249, 249, 249);

  --color-primary-dark: #b4d8db;
  --color-secondary-light: #98c9cf;
  --color-secondary-dark: #78adb4;
  --color-third-light: #ffc595;
  --color-third-dark: #e07014;
  --color-fourth-light: #beafab;
  --color-fourth-dark: #332d2c;

  --grid-gap: 30px;

  --font-size: 16px;
  --font-color: #171a21;
  --font-family: 'Wotfard', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  --font-family-secondary: permanent-marker, sans-serif;
  --font-line-height: 1.8;
  --font-weight-bold: 700;

  --transition-speed: 0.25s;
  --transition-timing: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --transition-property: all;
  --transition-default: var(--transition-speed) var(--transition-timing)
    var(--transition-property);
}

.body {
  background: var(--color-body);
  font-size: var(--font-size);
  min-height: 100vh;
  position: relative;
  font-family: var(--font-family);
  line-height: var(--font-line-height);

  &.dark {
    --color-primary: #e3f1f2;
    --color-secondary: #568389;
    --color-third: #fe9948;
    --color-fourth: #584945;
    --color-body: #171a21;

    --font-color: #fff;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  text-rendering: optimizelegibility;
}

b,
strong {
  font-weight: var(--font-weight-bold);
}

a {
  color: var(--color-third-dark);
  border-bottom: 1px solid var(--color-third);
  font-weight: var(--font-weight-bold);
  padding-bottom: 0;
  text-decoration: none;
  transition: var(--transition-default);
  &:hover {
    text-decoration: none;
    padding-bottom: 2px;
  }
  &:focus {
    border: 1px solid var(--color-third);
  }
}

h1 {
  font-family: var(--font-family-secondary);
  color: var(--font-color);
  grid-column: 1/5;
  text-align: left;
  font-size: 4rem;
  position: relative;
  & span {
    background: linear-gradient(
      to right,
      var(--color-secondary) 25%,
      var(--color-third) 50%,
      var(--color-third) 70%,
      var(--color-secondary) 85%
    );
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 8s linear infinite;
  }
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

.header {
  padding: 30px;
  margin-bottom: 2rem;
}

main {
  margin-bottom: 4rem;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--grid-gap);
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 5rem;
  position: relative;
}

blockquote {
  padding: 20px 60px;
  position: relative;
  margin: 0;
  font-style: italic;
  &::before,
  &::after {
    font-family: var(--font-family-secondary);
    position: absolute;
    font-size: 4rem;
    color: var(--color-third);
    opacity: 0.5;
    font-style: normal;
  }
  &::before {
    content: '{';
    top: calc(50% - 40px);
    left: -10px;
    transform: translateY(-50%) rotate(5deg);
  }
  &::after {
    content: '}';
    top: calc(50% + 10px);
    right: -10px;
    transform: translateY(-50%) rotate(10deg);
  }
}

.social-bar {
  position: fixed;
  top: 75%;
  transform: translateY(-50%);
  right: 0;
  &__text {
    transform: rotate(90deg);
    position: relative;
    display: inline-block;
    text-align: right;
    width: auto;
    position: absolute;
    top: -60%;
    right: -1.5rem;
    font-family: var(--font-family-secondary);
    font-size: 1.5rem;
    color: var(--font-color);
  }
  &__list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    &-item {
      position: relative;
      background: linear-gradient(var(--color-secondary) 50%, #115f69 50%);
      color: var(--font-color);
      font-weight: var(--font-weight-bold);
      margin-bottom: 1rem;
      padding: 1rem 2rem 1rem 4rem;
      width: 100%;
      max-width: 250px;
      text-align: right;
      transform: translateX(calc(100% - 53px));
      transition: 0.75s var(--transition-timing) transform;
      color: var(--color-primary);
      &:hover,
      &:focus-within {
        transform: translateX(0);
      }
      &:first-child {
        background: linear-gradient(var(--color-third) 50%, #c75b03 50%);
      }
      &:last-child {
        background: linear-gradient(var(--color-fourth) 50%, #42251e 50%);
      }
    }
    &-link {
      color: #fff;
      border-bottom: 0;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      &:hover {
        border-bottom: 0;
      }
      &--github,
      &--linkedin,
      &--twitter {
        &::before {
          font-family: var(--font-family-secondary);
          position: absolute;
          font-size: 1.25rem;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &--github::before {
        content: 'G';
      }
      &--linkedin::before {
        content: 'L';
      }
      &--twitter::before {
        content: 'T';
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #e3f1f2;
    --color-secondary: #568389;
    --color-third: #fe9948;
    --color-fourth: #584945;
    --color-body: #171a21;

    --font-color: #daf8f0;
  }

  .body {
    background: var(--color-body);
  }
}

@media (max-width: 1100px) {
  .social-bar {
    position: relative;
    top: 0;
    left: 0;
    right: unset;
    transform: none;
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    justify-content: center;
    &__text {
      position: relative;
      transform: none;
      top: 0;
      right: 0;
      margin-right: 1rem;
    }
    &__list {
      flex-direction: row;
      flex-wrap: wrap;
      width: calc(100% - 250px);
      &-item {
        padding: 1rem 2rem;
        transform: none;
        transition: none;
        width: calc(100% / 3);
        text-align: center;
      }
    }
  }
}

@media (max-width: 992px) {
  .header {
    padding: 30px 0;
    margin-bottom: 0;
  }

  .footer__content {
    margin-top: 0;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
  }

  .wrapper {
    padding: 0 2rem;
  }

  .social-bar {
    flex-direction: column;
    align-items: center;
    &__text {
      margin-bottom: 1rem;
    }
    &__list {
      flex-direction: column;
      align-items: center;
      width: 100%;
      &-item {
        width: 100%;
        max-width: none;
      }
    }
  }
}

#lightbulb {
  position: absolute;
  top: 0;
  left: 1rem;
  cursor: pointer;
  z-index: 999;
  & #bulb {
    stroke: #3f4141;
    fill: var(--color-primary);
  }
  #lighting {
    opacity: 0;
    transition: var(--transition-timing) opacity var(--transition-speed);
  }
}

.body.dark #lightbulb {
  #bulb {
    fill: #fec165;
    border: 1px solid #333;
  }
  #lighting {
    opacity: 1;
    transition: var(--transition-timing) opacity var(--transition-speed);
  }
}

@media (max-width: 640px) {
  #lightbulb {
    width: 100px !important;
    left: 0.5em;
  }
}
</style>
