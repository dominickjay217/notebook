<template>
  <h1 class="heading" :class="pageTitle">
    <div class="heading__container">
      <span>{{ heading }}...</span>
    </div>
  </h1>
</template>

<script>
export default {
  props: {
    pageTitle: {
      default: 'This is the page title',
      type: String,
    },
    heading: {
      default: 'This is the heading',
      type: String,
    },
  },
}
</script>

<style lang="scss">
.heading {
  grid-column: 1 / span 4;
  &__container {
    position: relative;
    &:hover {
      text-decoration: none;
    }
  }
  & span {
    position: relative;
  }
}

.heading--about span {
  --color-one: var(--color-third);
  --color-two: var(--color-secondary);
  background: linear-gradient(
    to right,
    var(--color-one) 15%,
    var(--color-two) 35%,
    var(--color-two) 50%,
    var(--color-one) 85%
  );
  background-clip: text;
  background-size: 200% auto;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading--resume span {
  --color-one: var(--color-third);
  --color-two: var(--font-color);
  background: linear-gradient(
    to right,
    var(--color-one) 25%,
    var(--color-two) 50%,
    var(--color-two) 70%,
    var(--color-one) 85%
  );
  background-clip: text;
  background-size: 200% auto;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading--blog span {
  --color-one: var(--color-fourth);
  --color-two: #68b0b6;
  background: linear-gradient(
    to right,
    var(--color-one) 25%,
    var(--color-two) 50%,
    var(--color-two) 70%,
    var(--color-one) 85%
  );
  background-clip: text;
  background-size: 200% auto;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading--blogentry span {
  --color-one: var(--font-color);
  --color-two: var(--color-third);
  background: linear-gradient(
    to right,
    var(--color-one) 25%,
    var(--color-two) 50%,
    var(--color-two) 70%,
    var(--color-one) 85%
  );
  background-clip: text;
  background-size: 200% auto;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media (max-width: 1100px) {
  .heading {
    grid-column: 1/5;
  }
}

@media (max-width: 640px) {
  .heading {
    margin: 0;
  }
}
</style>
