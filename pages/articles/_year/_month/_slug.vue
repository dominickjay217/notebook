<template>
  <main>
    <div class="container">
      <section class="content post">
        <article class="blogpost__content">
          <h2 class="blogpost__heading heading heading--two">
            {{ article.title }}
          </h2>
          <strong class="blogpost__subheading">
            {{ article.description }}
          </strong>
          <nuxt-content :document="article" />
          <div class="article-pagination">
            <nuxt-link
              v-if="prev"
              :to="{ name: 'articles-slug', params: { slug: prev.slug } }"
            >&lt; {{ prev.title }}</nuxt-link>
            <nuxt-link
              v-if="next"
              :to="{ name: 'articles-slug', params: { slug: next.slug } }"
            >{{ next.title }} &gt;</nuxt-link>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const { year, month, slug } = params

    let article

    try {
      article = await $content('articles', year, month, slug).fetch()
    } catch (e) {
      error({ message: 'Article not found' })
    }

    return {
      article
    }
  },
  head () {
    return {
      meta: [
        { name: 'description', content: this.article.description }
      ]
    }
  }
}
</script>

<style lang="scss">

.post {
  color: var(--ff-color);
}

time {
  display: block;
  & span {
    display: block;
    font-weight: var(--fw-base-xl);
    opacity: 0.5;
  }
  & .blogpost__datetime {
    opacity: 1;
    font-weight: var(--fw-base-m);
  }
}

img[src*="#gif"] {
   max-width: 350px;
}

.blogpost {
  color: var(--ff-color);
  &__subheading {
    background: var(--blog-gradient);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-fill-color: transparent;
    margin-bottom: 40px;
    display: block;
    text-align: center;
    font-size: 1.5rem;
  }
  strong {
    font-weight: var(--fw-base-lg);
    color: var(--blog-ff-strong);
  }
  ol {
    counter-reset: section;
    list-style: none;
    margin-bottom: 1rem;
    margin-left: 0;
    & li {
      position: relative;
      margin-left: 25px;
    }
    & li::before {
      counter-increment: section;
      content: "0" counter(section);
      position: absolute;
      font-weight: var(--fw-base-lg);
      opacity: 0.5;
      font-size: var(--step--1);
      left: -20px;
      top: -2px;
    }
  }
  h3 {
    font-size: var(--step-0);
    font-weight: var(--fw-base-lg);
    background: var(--blog-gradient);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-fill-color: transparent;
    color: var(--clr-fifth);
  }
}

iframe {
  margin: 40px auto;
}

img {
  margin: 40px auto;
}

pre {
  border-radius: 3px;
  margin: 0;
}

pre code {
  display: block;
  padding: 30px 20px;
  font-size: var(--step-0);
}

code {
  background: var(--code-font-background);
  padding: 2px 6px;
  display: inline;
  margin: 0 1px;
  font-family: var(--ff-code);
  border-radius: 3px;
}

.code-block {
  position: relative;
  &__language {
    background: var(--code-block-background);
    margin-bottom: -2px;
  }
}

strong {
  font-size: var(--step-2);
}

aside {
  position: relative;
  padding: 24px 32px;
  margin-top: 48px;
  margin-bottom: 64px;
  border-left: 3px solid;
  border-left-color: var(--aside-border);
  border-radius: 6px 6px 6px 3px;
  background-color: var(--aside-background);
  & i {
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate(-50%, -50%);
    padding: 8px;
    background: var(--main-background);
    border-radius: 50%;
    color: var(--aside-icon);
  }
}

.article-pagination {
  display: flex;
  justify-content: space-between;
  font-size: var(--step-2);
  & a:hover {
     text-decoration: underline;
      text-decoration-color: #E85A4F;
      text-decoration-thickness: 2px;
  }
}

.articles-slug {
  padding: 40px 0;
}

:not(pre) > code[class*="language-"], pre[class*="language-"] {
  text-shadow: none;
  color: var(--ff-color);
}
</style>
