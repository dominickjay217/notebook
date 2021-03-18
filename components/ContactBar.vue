<template>
    <div class="content contact" id="contact">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1680 40"
            class="curve"
        >
            <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"></path>
        </svg>
        <h3 class="contact__heading">Want to get in touch?</h3>
        <div class="contact__text">
            <span>Want to send me an idea, have a chat, or get me to overwrite the
            'inspirational' quotes at the top?
            </span>
            <a
            :href="'mailto:' + person.fields.email"
            target="_blank"
            relopener="noopener" class="contact__link">Send me an email
            </a> at hi@dominickjay.com
    or give me a shout on
            <a class="contact__link"
            target="_blank"
            relopener="noopener"
            :href="person.fields.twitter">Twitter</a>.
        </div>
    </div>
</template>

<script>
export default {
  props: ['person'],
}
</script>

<style lang="scss" scoped>
.curve {
    top: 50px;
    position: relative;
    fill: #fff;
    transform: rotate(180deg);
    z-index: 2;
    margin-bottom: 80px;
}

.template--dark .curve {
  fill: #222;
}

.contact {
    position: relative;
    margin-top: -50px;
    padding-top: 0;
    background: var(--color-body);
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    &__heading {
        font-family: var(--font-family-headings);
        font-size: 2.5rem;
    }
    &__link {
        font-weight: 700;
    }
    &__text {
        max-width: 992px;
        padding: 0 20px;
        & span {
            display: block;
            margin-bottom: 20px;
        }
    }
}

.template--dark {
    --dark: #0A2342;
    & .contact {
        --dark: #0A2342;
        background: var(--dark);
        color: var(--color-primary);
    }
    .contact .curve {
        background: var(--dark);
    }
}

@media (max-width: 620px) and (orientation: portrait) {
    .contact {
        padding-left: 20px;
        padding-right: 20px;
    }
}

</style>