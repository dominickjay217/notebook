<template>
  <div
    id="contact"
    class="content contact"
  >
    <h3 class="contact__heading heading heading--two">
      Talk to Me
    </h3>
    <div class="contact__text">
      <span>Want to send me an idea, have a chat, or get me to overwrite the
        'inspirational' quote at the top?
      </span>
      <a
        :href="'mailto:' + person.fields.email"
        target="_blank"
        relopener="noopener"
      >Send me an email</a> at hi@dominickjay.com
      or give me a shout on
      <a
        target="_blank"
        relopener="noopener"
        :href="person.fields.twitter"
      >Twitter</a>.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person : {
      type: Object,
      default: null
    }
  },
}
</script>

<style lang="scss" scoped>

.contact {
    position: relative;
    margin-top: 0;
    padding-top: var(--padding-df);
    color: var(--ff-color);
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 1;
    &__text {
        max-width: 992px;
        padding: 0 20px;
        font-size: var(--step-0);
        & span {
            display: block;
            margin-bottom: 20px;
        }
        & a {
          font-size: var(--step-1);
        }
    }
}

@media (max-width: 620px) and (orientation: portrait) {
    .contact {
        padding-left: 20px;
        padding-right: 20px;
    }
}

</style>