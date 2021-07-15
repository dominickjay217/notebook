<template>
  <div class="testimonial__content">
    <h2 class="heading heading--two">
      What people say about me
    </h2>
    <div class="testimonial__copy">
      <p>
        <span
          class="testimonial__quote-symb"
        >
          "
        </span>
        {{ person.fields.testimonials[Math.floor((Math.random() * person.fields.testimonials.length))].fields.jobTestimonial }}
        <span
          class="testimonial__quote-symb"
        >
          "
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'person': {
      type: Object,
      default: null
    }
  },
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