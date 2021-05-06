<template>
  <div
    id="contact"
    class="content contact"
  >
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
      class="curve"
    >
      <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" />
    </svg> -->
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
        class="contact__link"
      >Send me an email</a> at hi@dominickjay.com
      or give me a shout on
      <a
        class="contact__link"
        target="_blank"
        relopener="noopener"
        :href="person.fields.twitter"
      >Twitter</a>.
    </div>
  </div>
</template>

<script>
export default {
  props: ['person'],
}
</script>

<style lang="scss" scoped>
// .curve {
//     top: 0;
//     position: relative;
//     fill: var(--curve-fill);
//     transform: rotate(180deg);
//     z-index: 2;
//     margin-bottom: 40px;
// }

.contact {
    position: relative;
    margin-top: 0;
    padding-top: var(--padding-df);
    // background-color: var(--footer-background);
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
        font-size: var(--step--1);
        & span {
            display: block;
            margin-bottom: 20px;
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