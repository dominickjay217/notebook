<template>
  <div class="sm-wrapper">
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
  </div>
</template>

<script>
export default {
  props: ['person'],
}
</script>

<style lang="scss" scoped>
.sm-wrapper {
  padding: 20px 0;
  background-color: var(--color-body);
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
//social-media
.social-media {
  display: flex;
  justify-content: space-around;
  max-width: 360px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  &__link {
    img {
      height: 100%;
      max-width: 25px;
      display: inline;
    }
  }
}

</style>