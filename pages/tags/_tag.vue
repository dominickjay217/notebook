<template>
  <div>
    <header class="header">
      <div class="wrapper">
        <Navigation />
        <h1 class="heading heading--blog">
          <span>Notebook</span>
        </h1>
      </div>
    </header>
    <main>
      <div class="wrapper">
        <section class="articles articles--tags">
          <h2>All articles tagged #{{ tag }} ({{ posts.length }})</h2>
          <ul class="articles__list">
            <li v-for="post in posts" :key="post" class="item">
              <article-preview :post="post"></article-preview>
            </li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Navigation from '~/components/Navigation.vue'
import ArticlePreview from '~/components/Article-Preview.vue'

const client = createClient()

export default {
  components: {
    ArticlePreview,
    Navigation,
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        'fields.tags[in]': params.tag,
        order: '-sys.createdAt',
      })
      .then((entries) => {
        return {
          posts: entries.items,
          tag: params.tag,
        }
      })
  },
}
</script>

<style lang="scss">
.tags {
  grid-column: 1/7;
}

.articles--tags h2 {
  grid-column: 1/7;
}
</style>
