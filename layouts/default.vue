<template>
  <div class="body">
    <nuxt />
  </div>
</template>

<script></script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;0,900;1,300;1,500;1,700;1,900&display=swap');

@font-face {
  font-family: var(--ff-alt-alpha);
  src: url("/fonts/SaltedMocha-Regular.woff") format("woff"),
        url("/fonts/SaltedMocha-Regular.ttf")  format("truetype");
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
  --clr-third-dk: #fe7d15;

  --clr-fourth: #584945;
  --clr-fourth-lt: #665550;
  --clr-fourth-dk: #4a3d3a;

  --clr-fifth: #568389;
  --clr-fifth-lt: #609299;
  --clr-fifth-dk: #4c7479;



  --main-background: var(--clr-base);
  --header-background: linear-gradient(to bottom, var(--clr-primary-lt) 0%, var(--clr-primary) 33%,
  var(--clr-secondary-lt) 66%, var(--clr-secondary) 100%);
  --header-background-position: 0 0;
  --footer-background: var(--clr-base-lt);
  --banner-background: var(--clr-base);
  --border-gradient: linear-gradient(to left, var(--clr-fourth), var(--clr-third));
  --curve-fill: var(--clr-base);
  --hero-fact: linear-gradient(var(--clr-fifth-lt), var(--clr-fifth-dk));
  --lnk-box-shdw: inset 0 -0.07em 0 var(--clr-third);
  --lnk-box-shdw-hover: inset 0 -1.5em 0 var(--clr-third);
  --social-media-icon: var(--clr-base-dk);
  --other-work-link: var(--clr-fourth);
  --blog-gradient: linear-gradient(var(--clr-fifth), var(--clr-fifth-dk));
  --blog-ff-strong: var(--clr-fifth);
  --focus-outline-clr: var(--clr-base-dk);
  --aside-background: rgba(96, 146, 153, 0.15);
  --aside-border: var(--clr-fifth-dk);
  --aside-icon: var(--clr-fifth-dk);
  --code-font-color: var(--clr-base-dk);

  /* Transitions */

  --trn-bs: box-shadow 270ms cubic-bezier(0.77, 0, 0.175, 1), color 270ms cubic-bezier(0.77, 0, 0.175, 1);

  --ff-color: var(--clr-base-dk);
  --ff-color-link-hover: var(--clr-base-dk);
  --ff-base: 'Poppins', helvetica, arial, sans-serif;
  --ff-alt-alpha: 'SaltedMocha-Regular';
  --ff-code: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
  --fw-base: 300;
  --fw-base-m: 500;
  --fw-base-lg: 700;
  --fw-base-xl: 900;
  --ff-lh: 1.6;

	--color-mode: 'light';

  --container-width: 1100px;
  --grid-gap: 20px;
  --padding-df: 20px;
  --padding-tb: var(--padding-df) 0;
  --padding-lr: 0 var(--padding-df);

  --weather-bottom: 100vh;
  --weather-top: 0;
  --trn-star: .5s ease-in-out opacity;
  --star-opacity: 0;
  --moon-position: var(--weather-bottom);
  --sun-position: var(--weather-top);
  --header-background-delay: 0s;

  --center: center;

  --fluid-min-width: 326;
  --fluid-max-width: 1140;
  --fluid-screen: 100vw;
  --fluid-bp: calc(
    (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
      (var(--fluid-max-width) - var(--fluid-min-width))
  );
}

@media (prefers-color-scheme: dark) {
	:root {
		--color-mode: 'dark';
	}

  :root:not([data-user-color-scheme]) {
    --curve-fill: var(--clr-base-dk);
    --banner-background: var(--clr-base-dk);
    --header-background-position: 0 100%;
    --main-background: var(--clr-base-dk);
    --ff-color: var(--clr-base-lt);
    --hero-fact: linear-gradient(var(--clr-third-lt), var(--clr-third-dk));
    --footer-background: var(--clr-secondary-dk);
    --social-media-icon: var(--clr-base-lt);
    --other-work-link: var(--ff-color);
    --blog-gradient: linear-gradient(var(--clr-third), var(--clr-third-lt));
    --blog-ff-strong: var(--clr-third);
    --focus-outline-clr: var(--clr-base-lt);
    --aside-background: rgba(254, 153, 72, 0.15);
    --aside-border: var(--clr-third-dk);
    --aside-icon: var(--clr-third-dk);
    --star-opacity: 0.5;
    --moon-position: var(--weather-top);
    --sun-position: var(--weather-bottom);
    --header-background-delay: 0s;
  }
}

[data-user-color-scheme='dark'] {
  --curve-fill: var(--clr-base-dk);
  --banner-background: var(--clr-base-dk);
  --main-background: var(--clr-base-dk);
  --header-background-position: 0 100%;
  --ff-color: var(--clr-base-lt);
  --hero-fact: linear-gradient(var(--clr-third-lt), var(--clr-third-dk));
  --footer-background: var(--clr-secondary-dk);
  --social-media-icon: var(--clr-base-lt);
  --other-work-link: var(--ff-color);
  --blog-gradient: linear-gradient(var(--clr-third), var(--clr-third-lt));
  --blog-ff-strong: var(--clr-third);
  --focus-outline-clr: var(--clr-base-lt);
  --aside-background: rgba(254, 153, 72, 0.15);
  --aside-border: var(--clr-third-dk);
  --aside-icon: var(--clr-third-dk);
  --star-opacity: 0.5;
  --moon-position: var(--weather-top);
  --sun-position: var(--weather-bottom);
  --header-background-delay: 0s;
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
  font: var(--step-0)/var(--ff-lh);
  font-weight: var(--fw-base);
  padding: 0;
  margin: 0;
  font-family: var(--ff-base);
  overflow-x: hidden;

}

*:focus {
  outline: 2px dashed var(--focus-outline-clr);
}

a {
  color: var(--ff-color);
  text-decoration: none;
  transition: var(--trn-bs);
  box-shadow: var(--lnk-box-shdw);
  padding: 0 5px;
}

a:hover {
  text-decoration: none;
  box-shadow: var(--lnk-box-shdw-hover);
  color: var(--ff-color-link-hover);
}

main {
  padding-top: 40px;
  position: relative;
  z-index: 2;
  background-color: var(--main-background);
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

.heading {
  font-family: var(--ff-alt-alpha);
  color: var(--ff-color);
  &--two {
    text-align: center;
    font-size: var(--step-3);
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

</style>
