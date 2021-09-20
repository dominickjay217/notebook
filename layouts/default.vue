<template>
  <div class="body">
    <HeaderBar />
    <nuxt />
    <Spacer />
    <ContactBar />
    <FooterBar />
  </div>
</template>

<script></script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;0,900;1,300;1,500;1,700;1,900&display=swap');

@font-face {
  font-family: var(--ff-alt-alpha);
  src: url("/fonts/Hackney.ttf")  format("truetype");
  font-display: swap;
}

@font-face {
  font-family: var(--ff-heading);
  src: url("/fonts/Faune-DisplayBlack.otf")  format("truetype");
  font-display: swap;
}

:root {
  --clr-base:    #f9f9f9;
  --clr-base-lt: #ffffff;
  --clr-base-dk: #222222;

  --clr-primary: #e3f1f2;
  --clr-primary-lt: #f4fafa;
  --clr-primary-dk: #9dced2;

  --clr-secondary: #283e51;
  --clr-secondary-lt: #304b62;
  --clr-secondary-dk: #203140;

  --clr-third: #fe9948;
  --clr-third-lt: #fcb276;
  --clr-third-dk: rgb(254, 125, 21);

  --clr-fourth: #584945;
  --clr-fourth-lt: #665550;
  --clr-fourth-dk: #4a3d3a;

  --clr-fifth: #568389;
  --clr-fifth-lt: #609299;
  --clr-fifth-dk: #4c7479;

  --main-background: var(--clr-base);
  --header-background: var(--clr-base);
  --leave-it-text: var(--clr-fifth-dk);
  --footer-background: var(--clr-base-lt);
  --border-gradient: linear-gradient(to left, var(--clr-fourth), var(--clr-third));
  --hero-fact: linear-gradient(var(--clr-fifth-lt), var(--clr-fifth-dk));
  --social-media-icon: var(--clr-base-dk);
  --blog-gradient: linear-gradient(var(--clr-fifth), var(--clr-fifth-dk));
  --blog-ff-strong: var(--clr-fifth);
  --focus-outline-clr: var(--clr-base-dk);
  --aside-background: rgba(96, 146, 153, 0.15);
  --aside-border: var(--clr-fifth-dk);
  --aside-icon: var(--clr-fifth-dk);
  --code-block-background: #efefef;

  /* Transitions */

  --trn-default: .25s ease-in-out all;
  --ff-color: var(--clr-base-dk);
  --ff-color-link-hover: var(--clr-base-dk);
  --ff-base: 'Poppins', helvetica, arial, sans-serif;
  --ff-alt-alpha: 'Hackney';
  --ff-heading: 'Faune';
  --ff-code: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  --fw-base: 300;
  --fw-base-m: 500;
  --fw-base-lg: 700;
  --fw-base-xl: 900;
  --ff-lh: 1.8;
  --color-mode: 'light';
  --container-width: 1100px;
  --grid-gap: 20px;
  --padding-df: 20px;
  --padding-tb: var(--padding-df) 0;
  --padding-lr: 0 var(--padding-df);
  --post-bg: var(--clr-base);
  --center: center;
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

/* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1024,16,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

:root {
  --fluid-min-width: 320;
  --fluid-max-width: 1024;

  --fluid-screen: 100vw;
  --fluid-bp: calc(
    (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
      (var(--fluid-max-width) - var(--fluid-min-width))
  );
}

@media screen and (min-width: 1024px) {
  :root {
    --fluid-screen: calc(var(--fluid-max-width) * 1px);
  }
}

:root {
  --f--2-min: 11.11;
  --f--2-max: 10.24;
  --step--2: calc(
    ((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) *
      var(--fluid-bp)
  );

  --f--1-min: 13.33;
  --f--1-max: 12.80;
  --step--1: calc(
    ((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) *
      var(--fluid-bp)
  );

  --f-0-min: 16.00;
  --f-0-max: 16.00;
  --step-0: calc(
    ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
      var(--fluid-bp)
  );

  --f-1-min: 19.20;
  --f-1-max: 20.00;
  --step-1: calc(
    ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
      var(--fluid-bp)
  );

  --f-2-min: 23.04;
  --f-2-max: 25.00;
  --step-2: calc(
    ((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) *
      var(--fluid-bp)
  );

  --f-3-min: 27.65;
  --f-3-max: 31.25;
  --step-3: calc(
    ((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) *
      var(--fluid-bp)
  );

  --f-4-min: 33.18;
  --f-4-max: 39.06;
  --step-4: calc(
    ((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) *
      var(--fluid-bp)
  );

  --f-5-min: 39.81;
  --f-5-max: 48.83;
  --step-5: calc(
    ((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) *
      var(--fluid-bp)
  );
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-mode: 'dark';
  }

  :root:not([data-user-color-scheme]) {
    --header-background: var(--clr-base-dk);
    --leave-it-text: #FFF;
    --main-background: var(--clr-base-dk);
    --ff-color: var(--clr-base-lt);
    --hero-fact: linear-gradient(var(--clr-third-lt), var(--clr-third-dk));
    --footer-background: var(--clr-secondary-dk);
    --social-media-icon: var(--clr-base-lt);
    --blog-gradient: linear-gradient(var(--clr-third), var(--clr-third-lt));
    --blog-ff-strong: var(--clr-third);
    --focus-outline-clr: var(--clr-base-lt);
    --aside-background: rgba(254, 153, 72, 0.15);
    --aside-border: var(--clr-third-dk);
    --aside-icon: var(--clr-third-dk);
    --post-bg: var(--clr-base-dk);
    --code-font-background: #000;
    --code-font-color: var(--clr-base-lt);
    --code-block-background: #000;
  }
}

[data-user-color-scheme='dark'] {
  --header-background: var(--clr-base-dk);
  --leave-it-text: #FFF;
  --main-background: var(--clr-base-dk);
  --ff-color: var(--clr-base-lt);
  --hero-fact: linear-gradient(var(--clr-third-lt), var(--clr-third-dk));
  --footer-background: var(--clr-secondary-dk);
  --social-media-icon: var(--clr-base-lt);
  --blog-gradient: linear-gradient(var(--clr-third), var(--clr-third-lt));
  --blog-ff-strong: var(--clr-third);
  --focus-outline-clr: var(--clr-base-lt);
  --aside-background: rgba(254, 153, 72, 0.15);
  --aside-border: var(--clr-third-dk);
  --aside-icon: var(--clr-third-dk);
}

@media screen and (min-width: 1140px) {
  :root {
    --fluid-screen: calc(var(--fluid-max-width) * 1px);
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

body {
  font-size: var(--step-0);
  line-height: var(--ff-lh);
  font-weight: var(--fw-base);
  padding: 0;
  margin: 0;
  font-family: var(--ff-base);
  overflow-x: hidden;
  background-color: var(--main-background);
  color: var(--ff-color);
}

*:focus {
  outline: 2px solid var(--focus-outline-clr);
}

b,
strong {
  font-family: var(--ff-heading);
  letter-spacing: 0.5px;
}

strong {
  color: var(--ff-base);
  font-weight: var(--fw-base);
  font-size: calc(var(--step-1) * 1.25);
  position: relative;
  line-height: 1;
}

p > strong {
  background-color: var(--clr-third-lt);
  padding: 0 5px;
}

a,
button {
  font-family: var(--ff-alt-alpha);
  color: var(--ff-color);
  text-decoration: none;
}

a:hover,
button:Hover {
  text-decoration: none;
}

a:not([class]),
button {
  text-decoration: underline;
  text-decoration-color: #E85A4F;
  text-decoration-thickness: 2px;
  font-size: calc(var(--step-1) * 1.05);
  line-height: 1;
}

a:not([class]):hover,
button:hover {
  text-decoration: none;
}

main {
  position: relative;
  z-index: 2;
  background-color: var(--main-background);
}

@media (max-width: 640px) {
  ul:not([class]) {
    padding-left: 20px;
  }
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 40px;
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

.heading {
  font-family: var(--ff-heading);
  letter-spacing: -0.5px;
  background-color: #2b4162;
  background-image: linear-gradient(to bottom, var(--clr-fifth-lt) 0%, var(--clr-base-dk) 90%);
  background-clip: text;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.heading--two {
  font-size: var(--step-4);
  text-align: center;
}

.heading--three {
  font-size: var(--step-3);
}

.content {
  padding: 40px 0;
  margin-bottom: 40px;
}

.content:last-child {
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .content {
    padding: 20px 0;
  }
}

</style>
