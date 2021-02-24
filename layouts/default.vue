<template>
  <div class="body">
    <nuxt />
  </div>
</template>

<script></script>

<style lang="scss">
//@import url('https://use.typekit.net/hgu7qbd.css');

// @font-face {
//   font-family: 'Wotfard';
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url('~assets/fonts/Wotfard-Light.ttf') format('truetype');
// }

@font-face {
  font-family: 'Mosk-Light';
  font-display: swap;
  src: url('~assets/fonts/Mosk-Light.ttf') format('truetype');
}

@font-face {
  font-family: 'SaltedMocha-Regular';
  font-display: swap;
  src: url('~assets/fonts/SaltedMocha-Regular.otf') format('truetype');
}

@font-face {
  font-family: 'Poppins';
  font-display: swap;
  src: url('~assets/fonts/Poppins-Light.ttf') format('truetype');
}

// @font-face {
//   font-family: 'Wotfard-Strong';
//   font-style: normal;
//   font-weight: var(--font-weight-bold);
//   font-display: swap;
//   src: url('~assets/fonts/Wotfard-Bold.ttf') format('truetype');
// }

:root {
  --color-primary: #e3f1f2;
  --color-secondary: #568389;
  --color-third: #fe9948;
  --color-fourth: #584945;
  --color-body: rgb(249, 249, 249);
}

body {
  font-size: 18px;
  padding: 0;
  margin: 0;
  line-height: 1.7;
  font-family: 'Poppins', helvetica, arial, sans-serif;
}

*:focus {
  outline: var(--main-color);
}

a {
  color: var(--main-color);
}

a:hover {
  text-decoration: none;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.accessibility {
  display: block;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(1px);
  white-space: nowrap;
  position: absolute;
}

strong {
  font-size: 1.25rem;
}

.spacer {
  fill: none;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke-dasharray: 100;
  max-width: 150px;
  margin: 40px auto;
  display: block;
  width: 100%;
  &--01 {
    stroke: var(--color-fourth);
    animation: squiggle 5s linear infinite;
    animation-delay: 1s;
  }
  &--02 {
    stroke: var(--color-third);
    animation: squiggle 5s linear infinite;
    animation-delay: 2s;
  }
  &:hover {
    animation-play-state: paused;
  }
}

// Heading styles
.heading {
  font-family: 'SaltedMocha-Regular';
  &--two {
    text-align: center;
    font-size: 3rem;
  }
}

@keyframes squiggle {
  to {
    stroke-dashoffset: -200;
  }
}

.content {
  padding: 40px 0;
  margin-bottom: 40px;
}

.footer {
  background-color: var(--color-body);
  padding: 60px 20px;
  display: grid;
  grid-template: repeat(3, 1fr);
  & .navigation {
    grid-column: 1 / 3;
  }
  & p {
    font-size: 0.85rem;
    font-weight: 700;
    grid-column: 1 / 3;
    text-align: center;
  }
}

@media screen and (prefers-reduced-motion: reduce) {
  * {
    /* Very short durations means JavaScript that relies on events still works */
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

</style>
