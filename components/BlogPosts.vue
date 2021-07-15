<template>
  <div>
    <ul
      :class="[isHome ? 'blog-posts--home' : 'blog-posts--writing']"
      class="blog-posts"
    >
      <div
        v-if="!isHome"
        class="blog-posts__description"
      >
        <span
          class="blog-posts__heading"
        >
          What's New?
        </span>
        <p>My most recent scribblings</p>
      </div>
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
          <div>
            <span class="post__title">
              {{ post.fields.title }}
            </span>
            <span class="post__description">
              {{ post.fields.description }}
            </span>
          </div>
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
  background-color: var(--post-bg);
  display: flex;
  gap: var(--grid-gap);
  justify-content: space-between;
  position: relative;
  padding: calc((var(--padding-df) / 2));
  margin-bottom: 20px;
  border: var(--border-width) solid transparent;
  color: var(--ff-color);
  transition: var(--trn-default);
  text-align: left;
  &:hover {
    border: var(--border-width) solid var(--clr-fifth);
  }
  &__title {
    font-weight: var(--fw-base-m);
    flex: 1;
    padding-top: 5px;
    padding-right: var(--padding-df);
    font-size: var(--step-0);
  }
  &__link {
    font-weight: var(--fw-base-m);
    margin-left: auto;
    box-shadow: none;
    display: flex;
    align-items: center;
    font-size: var(--step-2);
    line-height: 1;
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
    font-family: var(--ff-alt-alpha);
    font-size: var(--step-1);
    opacity: 0.85;
    & span {
      padding: 0 2px;
      opacity: 1;
    }
  }
}

.blog-posts--home {
  margin: 0 auto;
  .post__description {
    display: none;
  }
}

.blog-posts--writing {
  position: relative;
  display: grid;
  grid-template-columns: minmax(50px, 220px) minmax(500px, 1fr);
  grid-gap: calc(var(--grid-gap) * 2);
  border-radius: 20px;
  & .post {
    height: 100%;
    z-index: 1;
    & div {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
    }
    &__link {
      margin-left: 0;
      padding: 0;
      min-width: 100px;
    }
    &__title {
      padding-right: 0;
    }
  }
}


.blog-posts--writing ul {
  padding-left: 40px;
}

.blog-posts--writing .blog-posts__item {
  grid-column: 2 / 3;
}

.blog-posts--writing .blog-posts__description {
  text-align: left;
  position: sticky;
  top: 40px;
}

.blog-posts--writing .blog-posts__heading {
  grid-column: 1 / 2;
  font-size: var(--step-4);
  font-family: var(--ff-alt-alpha);
}

@media (max-width: 992px) {
  .blog-posts--writing .post {
    height: auto;
    &__description {
      display: block;
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
