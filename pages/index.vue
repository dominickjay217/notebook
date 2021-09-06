<template>

  <main>
    <div class="container">
      <section class="content about">
        <div>
          <p>
            Hey! I’m Dom <span class="wave-emoji">
              👋
            </span>
          </p>
          <p class="about-intro">
            I’m a <strong>Front-End Developer</strong> based out of Plymouth, UK.
            I specialise in creating digital solutions that are <strong>fun</strong> and <strong>creative</strong>. I don’t like speaking about myself in the 3rd person.
          </p>
        </div>
        <div>
          <Generative />
        </div>
      </section>
      <Spacer />
      <section class="content blog">
        <h2 class="content__heading heading heading--two">
          Recently Published
        </h2>
        <div>
          <GenPattern />
          <div>
            <ul class="blog-posts blog-posts--home">
              <li v-for="article in articles.slice(0, 3)" :key="article.slug" class="blog-posts__item">
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
                  </div>
                  <nuxt-link class="post-link" :to="article.path">
                    <span>Read post</span>
                  </nuxt-link>
                </div>
              </li>
            </ul>
            <NuxtLink
              class="blog__link"
              to="/articles"
            >
              View all posts
              <svg
                class="blog__link-arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 125"
              >
                <path d="M11.3 19c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6s1-.2 1.4-.6c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2-.7-2.8 0zM25.2 22.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.3.4.8.6 1.4.6zM37.6 22.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.3.4.9.6 1.4.6zM50 22.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6zM23.8 32.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4zM36.2 32.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4zM48.6 32.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4zM62.4 32.7c.5 0 1-.2 1.4-.6s.6-.9.6-1.4c0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6zM36.2 41.4c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM48.6 41.4c.4.3.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.7-2.8 0-.4.3-.6.8-.6 1.4 0 .5.2 1 .6 1.4zM61 41.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM74.8 42c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.3.9.6 1.4.6zM73.4 61.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM61 61.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM48.6 61.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM36.2 61.4c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM61 71.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6s.6-.9.6-1.4c0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM48.6 71.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM36.2 71.8c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM23.8 71.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM48.6 81c.4.4.9.6 1.4.6s1-.2 1.4-.6c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM36.2 81c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM23.8 81c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM11.3 78.2c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2-.8-2.8 0zM48.6 51.3c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM61 51.3c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1.1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM73.4 51.3c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM85.8 48.4c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2-.7-2.8 0z" />
              </svg>
            </NuxtLink>
          </div>
        </div>
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

.about {
  padding: 120px 0;
  margin: 0 auto;
  text-align: left;
  font-family: var(--ff-base);
  font-weight: var(--fw-base-m);
  font-size: var(--step-1);
  display: flex;
  gap: var(--grid-gap);
  & > div {
    width: 50%;
    flex-shrink: 0;
  }
  & > p:first-child {
    opacity: 0.85;
    text-align: left;
  }
}

.blog {
  position: relative;
  text-align: center;
  display: flex;
  gap: var(--grid-gap);
  flex-direction: column;
  & > div {
    display: flex;
    & > div {
      width: calc(100% / 3 * 2);
      flex-shrink: 0;
      padding-left: 40px;
    }
    & > div:first-child {
      width: calc(100% / 3);
      padding-left: 0;
    }
    & > div:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      & > div {
        width: 100%;
      }
    }
  }
  &__link {
    font-size: var(--step-2);
    display: inline;
    margin-top: 40px;
    color: #ffffff;
    padding: 0 var(--padding-df);
    position: relative;
    transition: .25s ease-in-out color;
    transition-delay: .02s;
    left: -60px;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      background: #E85A4F;
      z-index: -1;
      transition: var(--trn-default);
    }
    &-arrow {
      max-width: 50px;
      position: absolute;
      top: -2.5px;
      right: -50px;
      fill: transparent;
    }
    &:hover {
      transition: .25s ease-in-out color;
      &::before {
        right: -50px;
        width: 50px;
        transition: var(--trn-default);
      }
      & .blog__link-arrow {
        fill: #fff;
      }
    }
  }
}

@media (max-width: 992px) {
  .about {
    margin: 0 auto;
    padding: 40px 0;
    flex-direction: column;
    & div {
      width: 100%;
    }
  }

  .blog > div > div:last-child {
    width: 100%;
    padding-left: 0;
  }
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
  text-align: right;
  max-width: 70px;
  font-family: var(--ff-alt-alpha);
  font-size: var(--step-1);
  opacity: 0.5;
  width: 100%;
}

.blog-posts--home {
  list-style: none;
  padding-left: 0;
  width: 100%;
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

@media (max-width: 992px) {
  .blog-posts--home--home .post:hover::before {
    left: -20px;
  }

  .post-link {
    max-width: 0;
    overflow: hidden;
    min-width: 0;
  }
}

@media (max-width: 640px) {
  .post {
    padding: 10px 0;
  }

  time {
    max-width: 30px;
  }

  .blog__link {
    align-self: center;
    left: 0;
  }
}

</style>
