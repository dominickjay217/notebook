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
          <span class="post__description">
            {{ post.fields.description }}
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

.blog-posts--writing::before {
  content: "";
  height: calc(66% - 500px);
  width: calc(50% + 30vw);
  left: -30vw;
  background-color: #304b62;
  position: absolute;
  top: 500px;
  transform: skew(15deg);
  opacity: 0.5;
}

.blog-posts--writing::after {
  content: "";
  height: calc(66% - 500px);
  width: calc(50% + 30vw);
  right: -30vw;
  background-color: #fcb276;
  position: absolute;
  top: 250px;
  transform: skew(15deg);
  z-index: 0;
  opacity: 0.5;
}

.post {
  --border-width: 4px;
  font-size: var(--step-0);
  background-color: var(--clr-base);
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

.blog-posts--home {
  .post__description {
    display: none;
  }
}

.blog-posts--writing {
  --box-shadow: rgba(32, 49, 64, 0.1);
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-gap: var(--grid-gap);
  border-radius: 20px;
  & .post {
    flex-direction: column;
    height: 100%;
    box-shadow: 0px 8px 16px 0px var(--box-shadow);
    z-index: 1;
    &__date {
      font-size: var(--step--1);
    }
    &__link {
      margin-left: 0;
      padding: 0;
    }
    &__title {
      padding-right: 0;
    }
  }
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
