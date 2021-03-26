<template>
  <div class="testimonial__content">
    <div class="testimonial__copy">
      <p>
        {{ person.fields.testimonials[Math.floor((Math.random() * person.fields.testimonials.length))].fields.jobTestimonial }}
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

<style lang="scss" scoped>

.testimonial {
  &__content {
    display: grid;
    grid-template-columns: repeat(autofill, 1fr);
    grid-gap: var(--grid-gap);
  }
  &__copy {
    margin-bottom: 20px;
    position: relative;
    padding: 0 20px;
    grid-column: 1 / 8;
  }
  &__copy:first-child {
    grid-column: 3 / 8;
  }
}

@media (max-width: 640px) and (orientation: portrait) {

  .testimonial {
    &__content {
      align-items: center;
    }
    &__copy {
      grid-row: 1;
      grid-column: 1 / 8;
      padding-left: 20px;
    }
    & svg {
      grid-column: 1 / 8;
      opacity: 0.25;
      grid-row: 1;
    }
  }

}
</style>