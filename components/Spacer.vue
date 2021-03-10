<template>
    <svg
        :class="'spacer ' + 'spacer--'+ spacerNo"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 55.5 12"
        style="enable-background: new 0 0 55.5 12;"
        xml:space="preserve"
    >
        <path
        class="spacer-line"
        d="M1.4,6c0,0,9-9,18,0s18,0,18,0s9-9,18,0s18,0,18,0s9-9,18,0"
        />
    </svg>
    <!-- <p>
        {{ spacerNo }}
    </p> -->
</template>

<script>
export default {
    props: ['spacerNo']
}
</script>

<style lang="scss">

.spacer {
  fill: none;
  stroke-width: 2;
  stroke-miterlimit: 20;
  stroke-dasharray: 100;
  max-width: 150px;
  margin: 40px auto;
  display: block;
  width: 100%;
  animation: squiggle 5s linear infinite;
  &--1 {
    stroke: var(--color-fourth);
  }
  &--2 {
    stroke: var(--color-third);
  }
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes squiggle {
  to {
    stroke-dashoffset: -200;
  }
}
</style>