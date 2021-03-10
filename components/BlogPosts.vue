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
  border: 5px solid transparent;
  border-image-slice: 1;
  border-width: 5px;
  padding: 20px;
  &:hover {
    border-image-source: var(--color-border-gradient);
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
    flex-direction: column;
    justify-content: flex-start;
    & * {
      margin-bottom: 10px;
    }
    &__date {
      display: none;
    }
    &__link {
      margin-left: 0;
      margin-bottom: 0;
    }
  }
}
</style>
