<template>
  <!-- <div>
    <p v-for="post in posts" :key="post.fields.title">
      {{ post.fields.title }}
    </p>
  </div> -->

  <section class="more-posts">
    <h2>Want more?</h2>
    <ul class="blog-entries__list">
      <li v-for="post in posts" :key="post.fields.title">
        <time>{{ new Date(post.fields.publishDate).toDateString() }}</time>
        <nuxt-link
          :to="{
            name: 'blog-slug',
            params: { slug: post.fields.slug },
          }"
          class="blog-entry__title"
        >
          {{ post.fields.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async fetch() {
    try {
      if (!client) return
      const response = await client.getEntries({
        content_type: 'blogPost',
      })
      if (response.items.length > 0) this.posts = response.items
      console.log(this.posts)
    } catch (err) {
      console.error(err)
    }
  },
  data() {
    return {
      posts: this.posts,
    }
  },
}
</script>

<style lang="scss">
.more-posts {
  grid-column: 1 / 5;
  & li {
    display: flex;
    align-items: center;
  }
  .blog-entries__list li {
    margin: 15px 0;
    position: relative;
  }
  .blog-entries__list li:first-child {
    display: flex;
  }
  h2 {
    color: var(--font-color);
  }
  .blog-entry__title {
    font-weight: var(--font-weight-bold);
    font-size: 1rem;
    margin: 0;
    z-index: 1;
    position: relative;
    color: var(--font-color);
    transition: 1s ease-out color 0.35s;
    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      margin: 0 auto;
      transition: all 1s var(--transition-timing);
      z-index: -1;
      left: -10px;
      width: 0;
      height: 100%;
      background-color: var(--color-third-light);
      border-bottom: solid 3px var(--color-third-light);
    }
    &:hover {
      color: #171a21;
      &::before {
        border-bottom: solid 3px var(--color-third-dark);
        width: calc(100% + 20px);
      }
    }
  }
  time {
    margin-right: 2rem;
    min-width: 150px;
    color: var(--font-color);
  }
}
</style>
