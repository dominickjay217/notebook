<template>
  <div class="social-bar">
    <span class="social-bar__text">Find me at</span>
    <ul class="social-bar__list">
      <li class="social-bar__list-item">
        <a
          :href="githubLink"
          arget="_blank"
          relopener="noopener"
          class="social-bar__list-link social-bar__list-link--github"
        >
          Github
        </a>
      </li>
      <li class="social-bar__list-item">
        <a
          :href="twitterLink"
          target="_blank"
          relopener="noopener"
          class="social-bar__list-link social-bar__list-link--twitter"
        >
          Twitter
        </a>
      </li>
      <li class="social-bar__list-item">
        <a
          :href="linkedinLink"
          target="_blank"
          relopener="noopener"
          class="social-bar__list-link social-bar__list-link--linkedin"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Contact',
  computed: {
    ...mapState('contact', ['twitterLink', 'githubLink', 'linkedinLink']),
  },
  mounted() {
    this.$store.dispatch('contact/getPageItems')
  },
}
</script>

<style></style>
