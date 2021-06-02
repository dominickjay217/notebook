<template>
  <footer class="footer">
    <p>© 2015–Today / Copyright Dominick Jay. All rights reserved.</p>
  </footer>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'

export default {
  components: {
  },
}
</script>

<style lang="scss" scoped>
.footer {
  color: var(--ff-color);
  padding: var(--padding-df);
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 1;
  & .navigation {
    grid-column: 1 / 4;
  }
  & p {
    font-size: var(--step--1);
    font-weight: var(--fw-base-m);
    grid-column: 1 / 4;
    text-align: center;
  }
}
</style>