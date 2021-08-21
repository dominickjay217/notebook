<template>
  <svg
    width="175"
    height="59"
    viewBox="0 0 175 59"
    fill="none"
    class="spacer"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 29.5C0 9.7 2.7 7 22.5 7C42.3 7 45 9.7 45 29.5C45 49.3 42.3 52 22.5 52C2.7 52 0 49.3 0 29.5Z"
      fill="black"
    />
    <path
      d="M130 36.5C130 16.7 132.7 14 152.5 14C172.3 14 175 16.7 175 36.5C175 56.3 172.3 59 152.5 59C132.7 59 130 56.3 130 36.5Z"
      fill="black"
    />
    <path
      d="M65 22.5C65 2.7 67.7 0 87.5 0C107.3 0 110 2.7 110 22.5C110 42.3 107.3 45 87.5 45C67.7 45 65 42.3 65 22.5Z"
      fill="black"
    />
  </svg>
</template>

<script>

export default {
  props: {
    spacerNo: {
      type: String,
      default: null
    }
  },
  mounted () {
    const spacer = document.getElementsByClassName('spacer')

    function randomRgbaString () {
      const colors = ['rgba(252, 178, 118, 0.35)', 'rgba(96, 146, 153, 0.25)', 'rgba(157, 206, 210, 0.25)', 'rgba(254, 125, 21, 0.25)']
      const randomColor = Math.floor(Math.random() * colors.length)
      return colors[randomColor]
    }

    function getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
    }

    function getRandomXPosition () {
      const width = spacer[0].width.baseVal.valueAsString
      const x = getRandomInt(0, width / 3)
      return x
    }

    function getRandomYPosition () {
      const height = spacer[0].height.baseVal.valueAsString
      const y = getRandomInt(0, height / 2)
      return y
    }

    function createPath () {
      for (let l = 0; l < spacer.length; l++) {
        for (let i = 0; i < 3; i++) {
          const y = getRandomYPosition()
          const x = getRandomXPosition()
          const fill = randomRgbaString()
          spacer[l].children[i].style.transform = 'translate(' + x + 'px, ' + y + 'px)'
          spacer[l].children[i].style.fill = fill
        }
      }
    }

    createPath()
  }
}
</script>

<style lang="scss" scoped>

.spacer {
 height: 39px;
 width: 175px;
 margin: 0 auto;
 overflow: visible;
 & path {
     transition: 1s ease-in-out transform;
 }
 &:hover {
   & path {
     transform: translate(0, 0) !important;
     transition: 1s ease-in-out transform;
     &:last-child {
       transform: translate(0, -10px) !important;
     }
   }
 }
}

</style>
