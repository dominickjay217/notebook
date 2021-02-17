<template>
  <div>
    <div class="wrapper">
      <section class="blog-section">
        <article class="blog-post">
          <h2 class="blog-post__title">{{ post.fields.title }}</h2>
          <time class="blog-post__date">
            {{ new Date(post.fields.publishDate).toDateString() }}
          </time>
          <p class="blog-post__intro">{{ post.fields.description }}</p>
          <vue-markdown class="blog-post__content">{{ post.fields.body }}</vue-markdown>
        </article>
      </section>
      <AllPosts />
    </div>
  </div>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.slug,
      })
      .then((entries) => {
        return {
          post: entries.items[0],
        }
      })
      .catch(console.error)
  },
}
</script>
