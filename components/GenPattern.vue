<template>
  <div class="pattern">
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
    <div class="pattern-cell clr" />
  </div>
</template>

<script>

export default {
  mounted () {
    function createBlock () {
      const cell = document.getElementsByClassName('pattern-cell clr')

      for (let l = 0; l < cell.length; l++) {
        cell[l].className = 'pattern-cell clr'
        const random = getRandomInt(1, 6)
        const randomClr = getRandomInt(0, 5)
        cell[l].classList.add('pattern-cell--' + random)
        cell[l].classList.add('clr--' + randomClr)
      }

      function getRandomInt (min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
      }
    }

    createBlock()

    setInterval(() => {
      createBlock()
    }, 50000)
  }
}
</script>

<style lang="scss" scoped>
    .pattern {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        transform: rotate(-5deg);
        opacity: 0.15;
        transform-origin: center;
        max-width: 350px;
        max-height: 350px;
        clip-path: polygon(0 0, 100% 0%, 65% 100%, 0% 100%);
        &-cell {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            &::before {
                --thickness: 3px;
                --clr-first: red;
                --clr-second: blue;
                --clr-third: green;
                content: "";
                width: 20px;
                height: 20px;
            }
            &--1 {
            &::before {
                border-left: var(--thickness) solid var(--clr-first);
                border-bottom: var(--thickness) solid var(--clr-first);
            }
            }
            &--2 {
            &::before {
                border-right: var(--thickness) solid var(--clr-second);
                border-top: var(--thickness) solid var(--clr-second);
            }
            }
            &--3 {
            &::before {
                border-left: var(--thickness) solid var(--clr-third);
                border-top: var(--thickness) solid var(--clr-third);
            }
            }
            &--4 {
            &::before {
                border-right: var(--thickness) solid var(--clr-first);
                border-bottom: var(--thickness) solid var(--clr-first);
            }
            }
            &--5 {
            &::before {
                border-right: var(--thickness) solid var(--clr-second);
                transform: rotate(45deg) translateY(-2px) translateX(-11px);
                height: calc(100% - 60px);
            }
            }
            &--6 {
            &::before {
                border-right: var(--thickness) solid var(--clr-third);
                transform: rotate(140deg) translateY(0px) translateX(-13px);
                height: calc(100% - 60px);
            }
            }
        }
    }

    .clr {
        &--1 {
            &::before {
            --border-color: var(--clr-fifth-lt);
            border-color: var(--border-color);
            }
        }
        &--2 {
            &::before {
            --border-color: var(--clr-third-lt);
            border-color: var(--border-color);
            }
        }
        &--3 {
            &::before {
            --border-color: var(--clr-secondary);
            border-color: var(--border-color);
            }
        }
        &--4 {
            &::before {
            --border-color: #E85A4F;
            border-color: var(--border-color);
            }
        }
    }

@media (max-width: 992px) {
    .pattern {
        display: none;
    }
}
</style>
