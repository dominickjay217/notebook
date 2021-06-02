<template>
  <header
    class="header"
    :class="[isHome ? 'header--thick' : 'header--thin']"
  >
    <div class="canvas" />
    <div class="container">
      <h1 class="header__title heading heading--one">
        <NuxtLink
          class="header__link"
          to="/"
        >
          {{ person.fields.name }}
        </NuxtLink>
      </h1>
      <NavigationBar />
    </div>
    <!-- <div class="container">
      <h2 class="header__tagline heading heading--two">
        {{ person.fields.title }}
      </h2>
    </div> -->
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
      class="curve"
    >
      <path
        d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
      />
    </svg>
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

      const canvas = document.getElementsByClassName("canvas")[0];

      function randomRgbaString() {
          const colors = ['rgba(252, 178, 118, 0.35)', 'rgba(96, 146, 153, 0.25)', 'rgba(157, 206, 210, 0.25)', 'rgba(254, 125, 21, 0.25)'],
                randomColor = Math.floor(Math.random() * colors.length);
          return colors[randomColor];
      }

      function randomStroke() {
        for (let x = 0; x < 30; x++) {
          const stroke = randomRgbaString();
          return stroke;
        }
      }

      function getRandomXPosition() {
        const width = screen.width,
              x = Math.floor(Math.random() * width);
        return x;
      }

      function getRandomYPosition() {
        const height = canvas.offsetHeight,
              y = Math.floor(Math.random() * height);
        return y;
      }

      function getRandomRadius(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

      function createCircles() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
              svgNS = svg.namespaceURI;

        for (let i = 0; i < 5; i++) {

          const circle = document.createElementNS(svgNS,'circle'),
                line = document.createElementNS(svgNS,'line'),
                fill = randomRgbaString(),
                stroke = randomStroke(),
                circlePositionx = getRandomXPosition(),
                circlePositiony = getRandomYPosition(),
                linePositionx = getRandomXPosition(),
                linePositiony = getRandomYPosition(),
                radius = getRandomRadius(50, 150);

          circle.setAttributeNS(null, "id", "gen-circle");
          circle.setAttributeNS(null, "cx", circlePositionx);
          circle.setAttributeNS(null, "cy", circlePositiony);
          circle.setAttributeNS(null, "r", radius);
          if (i % 2 !== 0) {
            circle.setAttributeNS(null, "fill", "none");
            circle.setAttributeNS(null, "stroke", stroke);
          } else {
            circle.setAttributeNS(null, "fill", fill);
            circle.setAttributeNS(null, "stroke", "transparent");
          }
          circle.setAttributeNS(null, "stroke-width", 2);

          line.setAttributeNS(null, "id", "gen-line");
          line.setAttribute('x1', linePositionx);
          line.setAttribute('y1', linePositiony);
          line.setAttribute('x2', linePositionx + 200);
          line.setAttribute('y2', linePositiony + 200);
          line.setAttribute("stroke", fill);
          line.setAttribute("stroke-width", 2);

          svg.appendChild(circle);
          canvas.appendChild(svg);
          svg.appendChild(line);
          canvas.appendChild(svg);
        }
      }

      createCircles();

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
  bottom: -32px;
  fill: var(--curve-fill);
}

.header {
  padding: var(--padding-df);
  position: relative;
  overflow: hidden;
  & > .container:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-family: var(--ff-alt-alpha);
    font-weight: var(--fw-base-m);
    font-size: var(--step-5);
    text-align: center;
    padding: var(--padding-lr);
    position: relative;
    z-index: 2;
    color: var(--ff-color);
    letter-spacing: -0.5px;
    opacity: 0.85;
  }

  &__link,
  &__link:hover {
    position: relative;
    box-shadow: none;
    transition: none;
    color: currentColor;
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
    letter-spacing: -0.5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    z-index: 2;
    text-transform: uppercase;
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
      font-size: var(--step-0);
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

.canvas {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, transparent 60%, var(--header-gradient-fill) 90%);
  }
  & svg {
    width: 100%;
    height: 100%;
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

@media (max-width: 1100px) {
  /* A mobile version for all devices that is smaller than the smalles iPad */

  .hero {
    margin: 40px 0;
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
        text-align: center;
      }
    }
  }
}

@media (max-width: 992px) {
  .header {
    padding-left: 0;
    padding-right: 0;
  }
  .header .container:nth-child(2) {
    flex-direction: column;
  }
  .header__title {
    align-self: flex-start;
    padding: 0;
  }
  .hero__fact {
    & p {
      max-width: none;
    }
  }
}

@media (max-width: 640px) and (orientation: portrait) {
  .header .container:nth-child(2) {
    flex-direction: column;
  }
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
  padding: 0 5px;
  position: relative;
  top: 1px;
  display: inline-flex;
  align-items: center;
  animation: typingRevealer 15s infinite 8s;
  font-weight: var(--fw-base-lg);
  font-size: var(--step-0);
  &::after {
    content: none;
  }
}

</style>