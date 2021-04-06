<template>
  <div class="body">
    <nuxt />
  </div>
</template>

<script></script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;0,900;1,300;1,500;1,700;1,900&display=swap');

@font-face {
  font-family: var(--font-family-headings);
  src: url("/fonts/SaltedMocha-Regular.woff") format("woff"),
        url("/fonts/SaltedMocha-Regular.ttf")  format("truetype");
  font-display: swap;
}

:root {
  --color-primary: #e3f1f2;
  --color-secondary: #568389;
  --color-third: #fe9948;
  --color-third-light: #fcb276;
  --color-fourth: #584945;
  --color-body: #f9f9f9;
  --color-border-gradient: linear-gradient(to left, var(--color-fourth), var(--color-third));
  --color-font: #212121;

  --container-width: 1100px;
  --grid-gap: 20px;

  --font-family-body: 'Poppins', helvetica, arial, sans-serif;
  --font-family-headings: 'SaltedMocha-Regular';
}

:root {
  --fluid-min-width: 326;
  --fluid-max-width: 1140;

  --fluid-screen: 100vw;
  --fluid-bp: calc(
    (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
      (var(--fluid-max-width) - var(--fluid-min-width))
  );
}

@media screen and (min-width: 1140px) {
  :root {
    --fluid-screen: calc(var(--fluid-max-width) * 1px);
  }
}

:root {

  --f--3-min: 10.42;
  --f--3-max: 12.29;
  --step--3: calc(
    ((var(--f--3-min) / 16) * 1rem) + (var(--f--3-max) - var(--f--3-min)) *
      var(--fluid-bp)
  );

  --f--2-min: 12.50;
  --f--2-max: 15.36;
  --step--2: calc(
    ((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) *
      var(--fluid-bp)
  );

  --f--1-min: 15.00;
  --f--1-max: 19.20;
  --step--1: calc(
    ((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) *
      var(--fluid-bp)
  );

  --f-0-min: 18.00;
  --f-0-max: 24.00;
  --step-0: calc(
    ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
      var(--fluid-bp)
  );

  --f-1-min: 21.60;
  --f-1-max: 30.00;
  --step-1: calc(
    ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
      var(--fluid-bp)
  );

  --f-2-min: 25.92;
  --f-2-max: 37.50;
  --step-2: calc(
    ((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) *
      var(--fluid-bp)
  );

  --f-3-min: 31.10;
  --f-3-max: 46.88;
  --step-3: calc(
    ((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) *
      var(--fluid-bp)
  );

  --f-4-min: 37.32;
  --f-4-max: 58.59;
  --step-4: calc(
    ((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) *
      var(--fluid-bp)
  );
}

@media screen and (prefers-reduced-motion: reduce) {
  * {
    /* Very short durations means JavaScript that relies on events still works */
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

body {
  font: var(--step-0)/1.6;
  font-weight: 300;
  padding: 0;
  margin: 0;
  font-family: var(--font-family-body);
  overflow-x: hidden;
}

body.template--dark {
  --color-font: var(--color-primary);
  --background: #222;
}

*:focus {
  outline: 2px dashed var(--color-fourth);
}

a {
  color: currentColor;
  text-decoration: none;
  transition: box-shadow 270ms cubic-bezier(0.77, 0, 0.175, 1) ,color 270ms cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow: inset 0 -0.07em 0 var(--color-third, --color-third-light);
  padding: 0 5px;
}

a:hover {
  text-decoration: none;
  box-shadow: inset 0 -1.25em 0 var(--color-third, --color-third-light);
}

main {
  padding-top: 40px;
  position: relative;
  z-index: 2;
  background-color: var(--color-body);
}

.template--dark main {
  --color-body: #222;
  background-color: var(--color-body);
}

.container {
  max-width: var(--container-width);
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
  // font-size: 1.25rem;
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
  font-family: var(--font-family-headings);
  &--two {
    text-align: center;
    font-size: var(--step-3);
  }
}

.template--dark .heading {
  color: #fff;
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

@media screen and (prefers-reduced-motion: reduce) {
  * {
    /* Very short durations means JavaScript that relies on events still works */
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

</style>
