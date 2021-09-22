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
          Dominick Jay
        </NuxtLink>
      </h1>
      <NavigationBar />
      <Hero />
    </div>
  </header>
</template>

<script>
import NavigationBar from '~/components/global/NavigationBar.vue'
import Hero from '~/components/global/Hero.vue'

export default {
  components: {
    Hero,
    NavigationBar
  },
  computed: {
    isHome () {
      return this.$route.name === 'index'
    }
  },
  mounted () {
    const canvas = document.getElementsByClassName('canvas')[0]

    function randomRgbaString () {
      const colors = ['rgba(252, 178, 118, 0.35)', 'rgba(96, 146, 153, 0.25)', 'rgba(157, 206, 210, 0.25)', 'rgba(254, 125, 21, 0.25)']
      const randomColor = Math.floor(Math.random() * colors.length)
      return colors[randomColor]
    }

    function randomStroke () {
      // eslint-disable-next-line no-unreachable-loop
      for (let x = 0; x < 30; x++) {
        const stroke = randomRgbaString()
        return stroke
      }
    }

    function getRandomXPosition () {
      const width = screen.width
      const x = Math.floor(Math.random() * width)
      return x
    }

    function getRandomYPosition () {
      const height = canvas.offsetHeight
      const y = Math.floor(Math.random() * height)
      return y
    }

    function getRandomRadius (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min) + min)
    }

    function createCircles () {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      const svgNS = svg.namespaceURI

      for (let i = 0; i < 5; i++) {
        const circle = document.createElementNS(svgNS, 'circle')
        const line = document.createElementNS(svgNS, 'line')
        const fill = randomRgbaString()
        const stroke = randomStroke()
        const circlePositionx = getRandomXPosition()
        const circlePositiony = getRandomYPosition()
        const linePositionx = getRandomXPosition()
        const linePositiony = getRandomYPosition()
        const radius = getRandomRadius(50, 150)

        circle.setAttributeNS(null, 'id', 'gen-circle')
        circle.setAttributeNS(null, 'cx', circlePositionx)
        circle.setAttributeNS(null, 'cy', circlePositiony)
        circle.setAttributeNS(null, 'r', radius)
        if (i % 2 !== 0) {
          circle.setAttributeNS(null, 'fill', 'none')
          circle.setAttributeNS(null, 'stroke', stroke)
        } else {
          circle.setAttributeNS(null, 'fill', fill)
          circle.setAttributeNS(null, 'stroke', 'transparent')
        }
        circle.setAttributeNS(null, 'stroke-width', 2)

        line.setAttributeNS(null, 'id', 'gen-line')
        line.setAttribute('x1', linePositionx)
        line.setAttribute('y1', linePositiony)
        line.setAttribute('x2', linePositionx + 200)
        line.setAttribute('y2', linePositiony + 200)
        line.setAttribute('stroke', fill)
        line.setAttribute('stroke-width', 2)

        svg.appendChild(circle)
        canvas.appendChild(svg)
        svg.appendChild(line)
        canvas.appendChild(svg)
      }
    }

    createCircles()
  }
}
</script>

<style lang="scss">

.header {
  padding: var(--padding-df);
  position: relative;
  overflow: hidden;
  background-color: var(--header-background);
  & > .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-family: var(--ff-alt-alpha);
    font-weight: var(--fw-base-m);
    font-size: var(--step-5);
    text-align: center;
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
    -webkit-text-fill-color: currentColor;
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
  & svg {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 992px) {
  .header {
    padding-left: 0;
    padding-right: 0;
  }
  .header__title {
    align-self: flex-start;
    padding: 0;
    margin: 0;
  }
}

@media (max-width: 640px) and (orientation: portrait) {
  .header .container:nth-child(2) {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .header > .container:nth-child(2) {
    margin-bottom: 20px;
  }
}

</style>
