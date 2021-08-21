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
    </div>
    <div class="container">
      <div
        v-if="isHome"
        class="hero"
      >
        <span class="hero__fact">
          <svg
            id="background"
          >
            <defs>
              <clipPath id="text-2">
                <text
                  id="betterthanyoufoundit"
                  x="0"
                  y="70"
                  fill="var(--clr-fifth-lt)"
                >
                  Leave it better
                </text>
                <text
                  id="betterthanyoufoundit"
                  x="0"
                  y="150"
                  fill="var(--clr-fifth-lt)"
                >
                  than you found it
                </text>
              </clipPath>
            </defs>
            <g
              transform="translate(0, 5)"
              clip-path="url(#text-2)"
            >
              <rect
                id="leave-it-text"
                width="1080"
                x="0"
                y="5"
              />
              <path
                id="path-1"
                d="M70.6443 30.7673C76.5997 35.6516 81.5505 41.8288 88.2234 51.8129C94.8963 61.8688 103.291 75.6598 100.421 85.2847C97.6229 94.9097 83.5596 100.297 69.855 104.247C56.2222 108.126 42.8763 110.568 29.6023 107.839C16.3282 105.181 3.05411 97.3518 0.471046 86.5058C-2.04026 75.6598 5.99593 61.7252 12.5971 51.5974C19.1983 41.4697 24.2926 35.1488 30.4633 30.1927C36.5622 25.3084 43.7373 21.8607 50.769 22.0043C57.8007 22.0762 64.6889 25.8112 70.6443 30.7673Z"
              />
              <path
                id="path-2"
                d="M36.5,-54.5C50.6,-47.8,67.7,-43.2,73.7,-32.8C79.8,-22.4,74.9,-6.2,67.4,6C60,18.2,49.9,26.3,41.6,36.2C33.3,46,26.8,57.6,16.6,64.1C6.4,70.5,-7.6,71.9,-18.7,67C-29.8,62.2,-38.1,51.2,-46,40.6C-53.9,30.1,-61.5,20,-62.6,9.3C-63.7,-1.4,-58.2,-12.7,-55,-27.3C-51.7,-41.9,-50.7,-59.6,-42,-68.8C-33.2,-78,-16.6,-78.7,-2.7,-74.5C11.2,-70.3,22.4,-61.3,36.5,-54.5Z"
                transform="translate(300, 100)"
              />
              <path
                id="path-3"
                d="M26,-43.5C33.4,-40.8,38.9,-33.2,45.1,-25.1C51.3,-17.1,58.2,-8.5,59.3,0.6C60.3,9.8,55.6,19.6,52.5,33C49.4,46.5,48.1,63.7,39.6,69.6C31.1,75.4,15.6,70,2.9,65C-9.8,60,-19.6,55.4,-23.8,47.1C-28.1,38.8,-26.8,26.8,-30.3,18.3C-33.8,9.8,-42.1,4.9,-46,-2.2C-49.9,-9.4,-49.3,-18.8,-43.8,-23.7C-38.3,-28.7,-27.8,-29.3,-19.6,-31.5C-11.5,-33.8,-5.8,-37.7,1.8,-40.8C9.3,-43.9,18.6,-46.1,26,-43.5Z"
              />
              <path
                id="path-4"
                d="M42.2,-72.9C52.6,-67.1,57.5,-51.6,57.4,-37.8C57.3,-24,52.2,-12,51.2,-0.6C50.2,10.8,53.2,21.6,47.5,25.4C41.8,29.2,27.5,25.9,18.1,28.8C8.7,31.6,4.4,40.5,-4.7,48.6C-13.7,56.6,-27.4,63.9,-39.9,62.9C-52.4,61.9,-63.7,52.6,-62.6,40.7C-61.6,28.8,-48.3,14.4,-39.7,5C-31.1,-4.4,-27.1,-8.9,-27.8,-20.3C-28.5,-31.7,-34,-50.1,-30.2,-59.6C-26.3,-69.2,-13.2,-69.9,1.4,-72.3C15.9,-74.6,31.8,-78.6,42.2,-72.9Z"
              />
              <path
                id="path-5"
                d="M32.9,-60.8C42.8,-51.3,51.2,-42.8,50.4,-32.9C49.6,-22.9,39.7,-11.5,40.9,0.7C42,12.8,54.2,25.6,52.7,31.5C51.2,37.5,36,36.7,24.9,35.1C13.8,33.4,6.9,30.8,1.1,29C-4.8,27.1,-9.6,26,-22.3,28.7C-35,31.3,-55.7,37.7,-59.2,33.5C-62.8,29.4,-49.2,14.7,-45.9,1.9C-42.6,-10.9,-49.6,-21.8,-50.5,-33.7C-51.5,-45.5,-46.3,-58.3,-36.8,-68.1C-27.4,-77.9,-13.7,-84.8,-1.1,-82.9C11.5,-81,23,-70.3,32.9,-60.8Z"
              />
            </g>
          </svg>
          <p>This is a place of
            <span class="typing">
              {{ fact }}
            </span>
          </p>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import NavigationBar from '~/components/global/NavigationBar.vue'

export default {
  components: {
    NavigationBar
  },
  data () {
    return {
      list: [
        {
          factSizeLg: '3rem',
          factSizeSm: '3rem',
          text: 'Experimenting'
        },
        {
          factSizeLg: '3rem',
          factSizeSm: '3rem',
          text: 'Writing'
        }
      ],
      fact: 'Learning',
      factSizeLg: '3rem',
      factSizeSm: '3rem'
    }
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

    setInterval(() => {
      const chosenNumber = Math.floor(Math.random() * this.list.length)
      this.fact = this.list[chosenNumber].text
    }, 15000)
  }
}
</script>

<style lang="scss">

.header {
  padding: var(--padding-df);
  position: relative;
  overflow: hidden;
  background-color: var(--header-background);
  & > .container:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
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
  }
}

.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: var(--grid-gap);
  align-items: center;
  position: relative;
  padding: 80px 0;
  margin: 0 0 20px;
  &__fact {
    font-weight: var(--fw-base-xl);
    letter-spacing: -0.5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    text-transform: uppercase;
    & p  {
      color: var(--ff-color);
      font-size: var(--step-1);
      font-weight: var(--fw-base);
      max-width: 50%;
      text-align: left;
      margin: 0;
      padding: var(--padding-df);
      padding-left: 70px;
      position: relative;
      &::before {
        content: "";
        border-top: 3px solid var(--clr-fifth);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 50px;
        left: 10px;
      }
    }
  }
}

svg {
  height: 180px;
}

#leave-it-text {
  fill: var(--leave-it-text);
  height: 180px;
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

@media (max-width: 1100px) {
  /* A mobile version for all devices that is smaller than the smalles iPad */

  .hero {
    margin: 40px 0;
    &__fact {
      color: var(--ff-color);
      padding: 0;
      text-align: center;
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
  .header__title {
    align-self: flex-start;
    padding: 0;
    margin: 0;
  }
  .hero {
    margin: 20px auto;
    padding: 20px 0;
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
    padding: 0;
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
  padding: 0;
  font-weight: var(--fw-base-lg);
  background: var(--hero-fact);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-fill-color: transparent;
  animation: 2s ease-in-out 5s 2 infinite revealText;
}

#background {
  width: 100%;
  & path {
    opacity: 1;
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }
  & #path-1 {
    transform: translate(2%, 5%);
    animation-name: path1;
  }
  & #path-2 {
    transform: translate(28%, 50%);
    animation-name: path2;
  }
  & #path-3 {
    transform: translate(45%, 70%);
    animation-name: path3;
  }
  & #path-4 {
    transform: translate(65%, 20%);
    animation-name: path4;
  }
  & #path-5 {
    transform: translate(85%, 35%);
    animation-name: path5;
  }
}

@keyframes path1 {
  0%,
  100% {
    transform: translate(3%, 5%) scale(0.85);
    fill: var(--clr-third-lt);
  }
  35% {
    transform: translate(10%, 55%) scale(1.05) rotate(2deg);
    fill: var(--clr-third);
  }
  65% {
    transform: translate(5%, 35%) scale(1) rotate(45deg);
    fill: var(--clr-third-dk);
  }
}

@keyframes path2 {
  0%,
  100% {
    transform: translate(22%, 50%) scale(0.85);
    fill: var(--clr-fourth-lt);
  }
  35% {
    transform: translate(34%, 25%) scale(0.05) rotate(87deg);
    fill: var(--clr-fourth);
  }
  65% {
    transform: translate(41%, 75%) scale(1.05) rotate(180deg);
    fill: var(--clr-fourth-dk);
  }
}

@keyframes path3{
  0%,
  100% {
    transform: translate(45%, 70%) scale(0.85);
    fill: var(--clr-primary-dk);
  }
  35% {
    transform: translate(42%, 50%) scale(0.05) rotate(87deg);
    fill: var(--clr-primary-dk);
  }
  65% {
    transform: translate(55%, 25%) scale(1.05) rotate(180deg);
    fill: var(--clr-primary-dk);
  }
}

@keyframes path4{
  0%,
  100% {
    transform: translate(75%, 20%) scale(1);
    fill: #FF0066;
  }
  35% {
    transform: translate(52%, 50%) scale(0.5) rotate(27deg);
    fill: #ba014b;
  }
  65% {
    transform: translate(65%, 85%) scale(1.05) rotate(270deg);
    fill: #ff5498;
  }
}

@keyframes path5{
  0%,
  100% {
    transform: translate(85%, 35%) scale(1);
    fill: var(--clr-third);
  }
  35% {
    transform: translate(100%, 70%) scale(0.5) rotate(27deg);
    fill: var(--clr-third-lt);
  }
  65% {
    transform: translate(90%, 95%) scale(1.05) rotate(270deg);
    fill: var(--clr-third-dk);
  }
}

#betterthanyoufoundit {
  font-size: 5rem;
}

@media (max-width: 992px) {
  #betterthanyoufoundit {
    font-size: 3rem;
  }
}

@media (max-width: 640px) {

  #betterthanyoufoundit {
    font-size: 2rem;
  }

  .header > .container:nth-child(2) {
    margin-bottom: 20px;
  }

  .hero__fact p {
    padding-left: 40px;
    font-size: var(--step-0);
  }

  .hero__fact p::before {
    width: 30px;
    left: 0;
  }

  // #background {
  //   overflow: visible;
  // }

  svg,
  #leave-it-text {
    height: 100px;
  }

  #betterthanyoufoundit {
    transform: translateY(-30px);
  }

  #betterthanyoufoundit:last-child {
    transform: translateY(-60px);
  }
}

</style>
