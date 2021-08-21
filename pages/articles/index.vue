<template>
  <main>
    <div class="container">
      <section class="content blog">
        <ul class="blog-posts blog-posts--writing" :style="{ '--gridRow': articles.length }">
          <div
            class="intro"
          >
            <span
              class="blog-posts__heading"
            >
              What's New?
            </span>
            <p>I write about technologies that I'm currently diving into, my development on this site, setups and goals. In these posts, I go through problems, solutions and how I am - infact - not Batman.</p>
          </div>
          <li v-for="article in articles" :key="article.slug" class="blog-posts__item">
            <div class="post">
              <time>
                <span>
                  {{ formatDate(article.date) }}
                </span>
              </time>
              <div class="post-content">
                <span class="title">
                  {{ article.title }}
                </span>
                <span class="description">
                  {{ article.description }}
                </span>
              </div>
              <nuxt-link class="post-link" :to="article.path">
                <span>Read post</span>
              </nuxt-link>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, route }) {
    const q = route.query.q

    let query = $content('articles', { deep: true })
      .sortBy('date', 'desc')

    if (q) {
      query = query.search(q)
    }

    const articles = await query.fetch()

    return {
      q,
      articles
    }
  },
  watch: {
    q () {
      this.$router.replace({ query: this.q ? { q: this.q } : undefined }).catch(() => { })
    }
  },
  watchQuery: true,
  methods: {
    formatDate (date) {
      const options = { day: 'numeric', month: 'numeric' }
      return new Date(date).toLocaleDateString('en-GB', options)
    }
  }
}
</script>

<style lang="scss">

.blog {
  h3 {
    font-family: var(--ff-alt-alpha);
    color: var(--ff-color);
    font-size: var(--step-3);
  }
  p {
    color: var(--ff-color);
    font-size: var(--step-0);
  }
}

.intro {
  text-align: left;
  position: sticky;
  top: 40px;
  grid-column: 1 / 2;
  grid-row: 1 / span all;
}

.intro span {
  font-size: var(--step-4);
  font-family: var(--ff-alt-alpha);
}

.blog-posts--writing {
  list-style: none;
  padding-left: 0;
  width: 100%;
}

.blog-posts--writing {
  position: relative;
  display: grid;
  grid-template-columns: minmax(50px, 220px) minmax(500px, 1fr);
  grid-gap: var(--grid-gap);
  grid-template-rows: repeat(var(--gridRow), auto);
}

.blog-posts--writing .blog-posts__item {
  grid-column: 2 / 3;
}

.blog-posts--writing .post-link:hover {
  text-decoration: underline;
  text-decoration-color: #E85A4F;
  text-decoration-thickness: 2px;
}

@media (max-width: 640px) {

  .blog-posts--writing .blog-posts__item {
    grid-column: 1 / -1;
  }

  .intro {
    grid-column: 1 / -1;
    grid-row: 1 / span all;
    top: 0;
    position: relative;
  }

  .blog-posts--writing {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: var(--grid-gap);
    grid-template-rows: repeat(3, minmax(80px, 1fr));
}

}
</style>
