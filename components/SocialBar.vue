<template>
    <ul class="social-media">
      <li class="social-media__item">
        <a
          :href="person.fields.github"
          target="_blank"
          relopener="noopener"
          class="social-media__link"
        >
          <span class="accessibility">Github</span>
          <img src="~assets/images/github.svg" alt="" />
        </a>
      </li>
      <li class="social-media__item">
        <a
          :href="person.fields.linkedin"
          target="_blank"
          relopener="noopener"
          class="social-media__link"
        >
          <span class="accessibility">LinkedIn</span>
          <img src="~assets/images/linkedin.svg" alt="" />
        </a>
      </li>
      <li class="social-media__item">
        <a
          :href="person.fields.twitter"
          target="_blank"
          relopener="noopener"
          class="social-media__link"
        >
          <span class="accessibility">Twitter</span>
          <img src="~assets/images/twitter.svg" alt="" />
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  props: ['person'],
}
</script>

<style lang="scss" scoped>
//social-media
.social-media {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 40px;
  padding-left: 40px;
  list-style: none;
  max-width: 70px;
  &__item {
    margin-bottom: 20px;
  }
  img {
    max-width: 25px;
    opacity: 0.5;
    transition: 0.25s ease-in-out opacity;
    &:hover {
      opacity: 1;
    }
  }
}

@media (max-width: 1100px) {
  /* A mobile version for all devices that is smaller than the smalles iPad */
  .social-media {
    display: none;
  }
}

</style>