<template>
  <footer class="footer">
    <p>© 2015–Today / Copyright Dominick Jay. All rights reserved.</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: var(--padding-df);
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 1;
  font-family: var(--ff-heading);
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
