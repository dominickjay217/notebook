<template>
  <div>
    <ul
      v-if="isHome"
      class="blog-posts blog-posts--home"
    >
      <li
        v-for="post in posts.slice(0, 3)"
        :key="post.fields.title"
        class="blog-posts__item"
      >
        <div class="post">
          <time class="post__date">
            <span>
              {{ new Date(post.fields.publishDate).getDate() }}
            </span>
            /
            <span>
              {{ new Date(post.fields.publishDate).getMonth() }}
            </span>
          </time>
          <span class="post__title">{{ post.fields.title }}</span>
          <nuxt-link
            :to="{
              name: 'blog-slug',
              params: {
                slug: post.fields.slug,
              },
            }"
            class="post__link"
          >
            Read post
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve">
              <g><path d="M12.851,69.957l-0.296-1.163c0.271-0.069,27.657-7.272,73.057-38.662l0.683,0.987   C40.691,62.648,13.124,69.887,12.851,69.957z"/></g><g><polygon points="83.766,36.421 82.723,35.829 85.339,31.225 79.953,31.225 79.953,30.025 87.4,30.025  "/></g>
            </svg>
          </nuxt-link>
        </div>
      </li>
    </ul>
    <ul
      v-else
      class="blog-posts"
    >
      <li
        v-for="post in posts"
        :key="post.fields.title"
        class="blog-posts__item"
      >
        <div class="post">
          <time class="post__date">
            <span>
              {{ new Date(post.fields.publishDate).getDate() }}
            </span>
            /
            <span>
              {{ new Date(post.fields.publishDate).getMonth() }}
            </span>
          </time>
          <span class="post__title">{{ post.fields.title }}</span>
          <nuxt-link
            :to="{
              name: 'blog-slug',
              params: {
                slug: post.fields.slug,
              },
            }"
            class="post__link"
          >
            Read post
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve">
              <g><path d="M12.851,69.957l-0.296-1.163c0.271-0.069,27.657-7.272,73.057-38.662l0.683,0.987   C40.691,62.648,13.124,69.887,12.851,69.957z"/></g><g><polygon points="83.766,36.421 82.723,35.829 85.339,31.225 79.953,31.225 79.953,30.025 87.4,30.025  "/></g>
            </svg>
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    'posts': {
      type: Object,
      default: null
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'index'
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &__link {
    text-decoration: none;
    font-weight: 700;
    color: var(--color-fourth);
    text-align: center;
    width: 100%;
    display: block;
    padding: 20px 0;
    &:hover {
      text-decoration: underline;
    }
  }
}

.blog-posts {
  list-style: none;
  padding: 0;
  margin: 0;
  &__item {
    &:last-child {
      border-bottom: 0;
    }
  }
}

.post {
  font-size: 1.25rem;
  display: flex;
  position: relative;
  align-items: center;
  padding: 20px;
  background: linear-gradient(#fff, #fff),
              var(--color-border-gradient);
  background-origin: padding-box, border-box;
  background-repeat: no-repeat; /* this is important */
  border: 5px solid #fff;
  &:hover {
    background: linear-gradient(#fff, #fff),
              var(--color-border-gradient);
    border: 5px solid transparent;
    background-origin: padding-box, border-box;
    background-repeat: no-repeat;
  }
  &__title {
    text-align: left;
    font-weight: 700;
  }
  &__link {
    margin-left: auto;
    text-decoration: none;
    font-weight: 700;
    color: var(--color-fourth);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    &:hover {
      text-decoration: underline;
    }
    & svg {
      max-width: 50px;
      transform: rotate(26deg);
      top: 6px;
      position: relative;
      margin-left: 6px;
    }
  }
  &__date {
    display: flex;
    justify-content: flex-start;
    margin-right: 40px;
    min-width: 50px;
    & span {
      font-weight: 700;
    }
    & span:last-child {
      opacity: 0.5;
    }
  }
}

.template--dark .post {
  background: linear-gradient(#222, #222), var(--color-border-gradient);
  border: 5px solid #222;
  &:hover {
    background: linear-gradient(#222, #222),
              var(--color-border-gradient);
    border: 5px solid transparent;
    background-origin: padding-box, border-box;
    background-repeat: no-repeat;
  }
  &__link,
  &__title,
  &__date {
    color: #fff;
    & svg {
      fill: #fff;
    }
  }
}

@media (max-width: 767px) and (orientation: portrait) {
  .post {
    font-size: 1rem;
    &__link {
      font-size: 1rem;
    }
  }
}

@media (max-width: 640px) and (orientation: portrait) {
  .post {
    justify-content: space-between;
    align-items: center;
    & * {
      margin-bottom: 10px;
    }
    &__title {
      max-width: 250px;
      padding-right: 20px;
    }
    &__date {
      display: none;
    }
    &__link {
      margin-left: 0;
      margin-bottom: 0;
      & svg {
        max-width: 25px;
      }
    }
  }
}
</style>
