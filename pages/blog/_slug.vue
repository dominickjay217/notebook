<template>
  <div>
    <header class="header">
      <div class="wrapper">
        <Navigation />
        <!-- <h1
          class="heading heading--blogentry"
          :data-heading="post.fields.title"
        >
          <span>A Notebook Post</span>
        </h1> -->
      </div>
    </header>

    <div class="wrapper">
      <section class="blog-section">
        <article class="blog-post">
          <h2 class="blog-post__title">{{ post.fields.title }}</h2>
          <time class="blog-post__date">
            {{ new Date(post.fields.publishDate).toDateString() }}
          </time>
          <p class="blog-post__intro">{{ post.fields.description }}</p>
          <!--eslint-disable-next-line prettier/prettier-->
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
import Navigation from '~/components/Navigation.vue'
import VueMarkdown from 'vue-markdown'
import AllPosts from '~/components/All-Posts.vue'

const client = createClient()

export default {
  components: {
    Navigation,
    VueMarkdown,
    AllPosts,
  },
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
  head() {
    return {
      title: this.post.fields.title + ' - A Notebook Post',
    }
  },
}
</script>

<style lang="scss">
.blog-section {
  grid-column: 1 / 5;
}

.blog-post {
  display: grid;
  grid-gap: 30px 0;
  grid-template-columns: 1fr minmax(250px, 656px) 1fr;
  color: var(--font-color);
  &__title {
    grid-column: 2;
    text-align: center;
    font-size: 2.5rem;
  }
  &__date {
    grid-column: 2;
    font-size: 0.85rem;
    text-align: center;
  }
  &__intro {
    grid-column: 2;
    font-size: 1.25rem;
    font-weight: var(--font-weight-bold);
  }
  &__content {
    grid-column: 2;
    & ul {
      list-style: none;
      & li {
        position: relative;
        margin-bottom: 0.25em;
      }
      & li::before {
        content: '-';
        font-family: var(--font-family-secondary);
        transform: rotate(5deg);
        position: absolute;
        top: -0.25em;
        left: -1em;
        font-size: 1.25rem;
      }
    }
    & :not(pre) code {
      background-color: var(--color-secondary-light);
      padding: 2px 5px;
      margin: 0 2px;
      color: #333;
    }
    & pre {
      margin: 2rem calc(50% - 50vw);
      margin-left: -140px;
      margin-right: -140px;
      font-size: 1em;
      line-height: 1.85;
      direction: ltr;
      text-align: left;
      word-spacing: normal;
      tab-size: 4;
      hyphens: none;
      white-space: pre;
      background: #333;
      color: #fff;
      padding: 2rem;
      @at-root {
        .body.dark pre {
          background: #fff;
          color: #333;
        }
      }
      & code {
        width: 100%;
        max-width: 41rem;
        margin: 0 auto;
        display: block;
      }
    }
    & a {
      color: var(--color-third-dark);
      font-weight: var(--font-weight-bold);
    }
    & s {
      background-color: var(--color-secondary);
      color: transparent;
      padding: 4px;
      position: relative;
      pointer-events: none;
      transform: rotate(-6deg);
      &::after {
        content: 'Redacted';
        color: var(--color-primary);
        font-family: var(--font-family-secondary);
        position: absolute;
        left: 0;
        top: -5px;
        bottom: 0;
        right: 0;
        text-align: center;
        font-family: 1.05rem;
        pointer-events: none;
        letter-spacing: 1px;
        font-weight: 500;
        transform: rotate(0deg);
        text-transform: uppercase;
      }
    }
  }
  & img {
    padding: 1rem 0;
  }
}
</style>
