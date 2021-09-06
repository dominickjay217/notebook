<template>
  <div>
    <nuxt-link to="/articles">Articles</nuxt-link>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, route }) {
    const articles = await $content('drafts')
      .fetch()

    return {
      articles
    }
  },
  watchQuery: true
}
</script>
