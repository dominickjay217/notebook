<template>
  <div>
    <ul
      :class="[isHome ? 'blog-posts--home' : '']"
      class="blog-posts"
    >
      <li
        v-for="post in blogPosts"
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
              name: 'writing-slug',
              params: {
                slug: post.fields.slug,
              },
            }"
            class="post__link"
          >
            <span>Read post</span>
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
      type: Array,
      default: null
    }
  },
  data() {
    return {
      object: this.posts, // your original data
      limit: 3 // or any number you wish to limit to
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'index'
    },
    blogPosts(){
      return this.isHome ? this.posts.slice(0, this.limit) : this.posts
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
  padding: 40px 0 0;
  margin: 0;
  &__item {
    &:last-child {
      border-bottom: 0;
    }
  }
}

.post {
  font-size: 1.25rem;
  font-size: var(--step--1);
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border: 4px solid transparent;
  &:hover {
    border: 4px solid var(--color-secondary);
  }
  &__title {
    text-align: left;
    font-weight: 300;
  }
  &__link {
    margin-left: auto;
    text-decoration: none;
    font-weight: 700;
    color: var(--color-fourth);
    font-size: var(--step--2);
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
  }
  &__date {
    display: flex;
    justify-content: flex-start;
    margin-right: 40px;
    min-width: 50px;
    font-weight: 300;
    opacity: 0.5;
  }
}

.template--dark .post {
  &:hover {
    border: 4px solid var(--color-third);
  }
  &__title {
      padding-right: 20px;
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

@media (max-width: 640px) and (orientation: portrait) {
  .post {
    justify-content: space-between;
    align-items: center;
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
