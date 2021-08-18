<template>
  <div class="testimonial__content">
    <h2 class="heading heading--two">
      What people say about me
    </h2>
    <div class="testimonial__copy">
      <p>
        "Dom is a pleasure to have around. A friendly, passionate, motivated individual who will stop at nothing to help if needed. Dom is a self driven guy who works equally well on his own as he does as part of a team. He is always looking for better ways to create solutions to problems and is great at dissecting code to create innovative creative. Highly recommended."
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.testimonial {
  &__content {
    display: grid;
    grid-template-columns: repeat(autofill, 1fr);
    grid-gap: var(--grid-gap);
    font-size: var(--step-0);
    & h2 {
      grid-column: 1 / 2;
    }
  }
  &__copy {
    grid-column: 2 / 3;
    position: relative;
    padding: var(--padding-lr);
    padding-left: 40px;
    color: var(--ff-color);
  }
  &__quote-symb {
    font-weight: var(--fw-base-m);
  }
}

@media (max-width: 640px) and (orientation: portrait) {

  .testimonial {
    &__content {
      align-items: center;
    }
    &__copy {
      grid-row: 1;
      padding: 0;
    }
  }

}
</style>