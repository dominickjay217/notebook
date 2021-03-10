<template>
  <footer class="footer">
    <NavigationBar />
    <p>© 2015–Today / Copyright Dominick Jay. All rights reserved.</p>
  </footer>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'

export default {
  components: {
    NavigationBar,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-body);
  padding: 20px;
  display: grid;
  grid-template: repeat(3, 1fr);
  & .navigation {
    grid-column: 1 / 3;
  }
  & p {
    font-size: 0.85rem;
    font-weight: 700;
    grid-column: 1 / 3;
    text-align: center;
  }
}
</style>