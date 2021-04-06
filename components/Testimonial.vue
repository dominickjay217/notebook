<template>
  <div class="testimonial__content">
    <div class="testimonial__copy">
      <p>
        <span class="testimonial__quote-symb">"</span>{{ person.fields.testimonials[Math.floor((Math.random() * person.fields.testimonials.length))].fields.jobTestimonial }}<span class="testimonial__quote-symb">"</span>
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
  }
  &__copy {
    margin-bottom: 20px;
    position: relative;
    padding: 0 20px;
    grid-column: 1 / 8;
  }
  &__copy:first-child {
    grid-column: 1 / 8;
  }
  &__quote-symb {
    font-weight: 500;
  }
}

.template--dark .testimonial {
  color: var(--color-font);
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
  }

}
</style>