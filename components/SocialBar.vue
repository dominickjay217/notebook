<template>
  <div class="sm-wrapper">
    <ul class="social-media">
      <li
        class="social-media__item"
        :key="item.title"
        v-for="item in this.socialItems"
      >
        <a
          :href="item.href"
          target="_blank"
          relopener="noopener"
          class="social-media__link"
        >
          <span class="accessibility">{{ item.title }}</span>
          <img :src="item.imagePath" :alt="item.imageAlt">
        </a>

      </li>
      <!-- <li class="social-media__item">
        <a
          :href="person.fields.github"
          target="_blank"
          relopener="noopener"
          class="social-media__link"
        >
          <span class="accessibility">Github</span>
          <img src="/images/github.svg" alt="Github Icon">
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
          <img src="/images/linkedin.svg" alt="Twitter Icon">
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
          <img src="/images/twitter.svg" alt="Twitter Icon">
        </a>
      </li> -->
    </ul>
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
  data() {
    return {
      socialItems: [
          {
            title: 'Github',
            href: this.person.fields.github,
            imagePath: '/images/github.svg',
            imageAlt: 'Github Icon'
          },
          {
            title: 'LinkedIn',
            href: this.person.fields.linkedin,
            imagePath: '/images/linkedin.svg',
            imageAlt: 'LinkedIn Icon'
          },
          {
            title: 'Twitter',
            href: this.person.fields.twitter,
            imagePath: '/images/twitter.svg',
            imageAlt: 'Twitter Icon'
          }
      ]
    }
  },
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
    box-shadow: none;
    img, svg {
      height: 100%;
      max-width: 25px;
      display: inline;
    }
  }
}

.template--dark .sm-wrapper {
  background: linear-gradient(to top, #283E51, #0A2342);
  color: var(--clr-primary);
  & .social-media__link {
    fill: white;
  }
}

</style>