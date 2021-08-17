<template>
  <div>
    <ul
      :class="[isHome ? 'blog-posts--home' : 'blog-posts--writing']"
      class="blog-posts"
    >
      <div
        v-if="!isHome"
        class="intro"
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
          <time>
            <span>
              {{ new Date(post.fields.publishDate).getDate() }}
            </span>
            /
            <span>
              {{ new Date(post.fields.publishDate).getMonth() + 1 }}
            </span>
          </time>
          <div class="post-content">
            <span class="title">
              {{ post.fields.title }}
            </span>
            <span
              v-if="!isHome"
              class="description"
            >
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
            class="post-link"
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

ul {
  list-style: none;
  padding-left: 0;
}

.post {
  font-size: var(--step-0);
  display: flex;
  gap: var(--grid-gap);
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding: 10px;
  padding-right: 40px;
  color: var(--ff-color);
  text-align: left;
  overflow: hidden;
}

.post .title {
  font-weight: var(--fw-base-m);
  flex: 1;
  padding-top: 5px;
  font-size: var(--step-0);
  margin-bottom: 10px;
  position: relative;
}

.post-content {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

.post-link {
  min-width: 70px;
  font-size: var(--step-1);
  z-index: 1;
}

.post-link::after {
  content: "";
  position: absolute;
  inset: 0;
}

time {
  display: flex;
  max-width: 70px;
  font-family: var(--ff-alt-alpha);
  font-size: var(--step-1);
  opacity: 0.5;
  width: 100%;
}

.intro {
  text-align: left;
  position: sticky;
  top: 40px;
}

.intro span {
  grid-column: 1 / 2;
  font-size: var(--step-4);
  font-family: var(--ff-alt-alpha);
}

.blog-posts--writing {
  position: relative;
  display: grid;
  grid-template-columns: minmax(50px, 220px) minmax(500px, 1fr);
  grid-gap: calc(var(--grid-gap) * 2);
}

.blog-posts--writing .blog-posts__item {
  grid-column: 2 / 3;
}

.blog-posts--home .post::before {
  content: "";
  width: 100%;
  top: 0;
  left: calc(-100% - 40px);
  bottom: 0;
  background-color: #E85A4F;
  position: absolute;
  transition: var(--trn-default);
  transition-duration: 1s;
  transform: skew(20deg);
}

.blog-posts--home .post:hover::before {
  left: -15px;
}

.blog-posts--writing .post-link:hover {
  text-decoration: underline;
  text-decoration-color: #E85A4F;
  text-decoration-thickness: 2px;
}

@media (max-width: 992px) {
  .blog-posts--home .post:hover::before {
    left: -20px;
  }

  .post-link {
    display: none;
  }
}

</style>
