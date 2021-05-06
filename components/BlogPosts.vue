<template>
  <div>
    <ul
      :class="[isHome ? 'blog-posts--home' : 'blog-posts--writing']"
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
              {{ new Date(post.fields.publishDate).getMonth() + 1 }}
            </span>
          </time>
          <span class="post__title">
            {{ post.fields.title }}
          </span>
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
    font-family: var(--ff-alt-alpha);
    text-align: center;
    width: 100%;
    display: block;
    padding: var(--padding-tb);
    color: var(--ff-color);
  }
}

.blog-posts {
  list-style: none;
  padding: calc(var(--padding-df) * 2) 0 0;
  margin: 0;
  &__item {
    &:last-child {
      border-bottom: 0;
    }
  }
}

.post {
  --border-width: 4px;
  font-size: var(--step-0);
  display: flex;
  place-content: var(--center);
  position: relative;
  padding: calc((var(--padding-df) / 2));
  margin-bottom: 20px;
  border: var(--border-width) solid transparent;
  color: var(--ff-color);
  transition: var(--trn-default);
  &:hover {
    border: var(--border-width) solid var(--clr-fifth);
  }
  &__title {
    text-align: left;
    font-weight: var(--fw-base);
    flex: 1;
    padding-right: var(--padding-df);
  }
  &__link {
    font-weight: var(--fw-base-m);
    margin-left: auto;
    box-shadow: none;
    display: flex;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      inset: 0;
    }
  }
  &__date {
    display: flex;
    justify-content: flex-start;
    margin-right: 40px;
    min-width: 50px;
    font-weight: var(--fw-base);
    opacity: 0.5;
  }
}

.blog-posts--writing {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: var(--grid-gap);
  & .post {
    flex-direction: column;
    height: 100%;
    &__date {
      font-size: var(--step--1);
    }
    &__link {
      margin-left: 0;
      padding: 0;
    }
  }
}

@media (max-width: 640px) and (orientation: portrait) {
  .post {
    justify-content: space-between;
    place-content: var(--center);
    padding: 0;
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
