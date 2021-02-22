<template>
    <div class="content contact" id="contact">
        <div class="contact__text"><a
          :href="'mailto:' + person.fields.email"
          target="_blank"
          relopener="noopener" class="contact__link">Send me an email</a> at hi@dominickjay.com
or give me a shout on <a class="contact__link"
          target="_blank"
          relopener="noopener"  :href="person.fields.twitter">Twitter</a>.</div>
    </div>
</template>

<script>
export default {
  props: ['person'],
}
</script>

<style lang="scss" scoped>
.contact {
    background: var(--color-body);
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    &__link {
        font-weight: 700;
    }
}

</style>