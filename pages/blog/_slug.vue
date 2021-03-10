<template>
  <div>
    <HeaderBar :person="person" />
    <BannerBar :person="person" />
    <main>
      <div class="container">
        <section class="content post">
          <article class="post__content">
            <h2 class="post__heading heading heading--two">
              {{ post.fields.title }}
            </h2>
            <time class="post__date">
              Published at:
              <span>
                {{ new Date(post.fields.publishDate).getDate() }}
              </span>
              /
              <span>
                {{ new Date(post.fields.publishDate).getMonth() }}
              </span>
            </time>
            <strong class="post__intro">{{ post.fields.description }}</strong>
            <div class="contents">
              <ol class="content-list">
                <li class="content-list__item">This is item 1</li>
                <li class="content-list__item">This is item 2</li>
                <li class="content-list__item">This is item 3</li>
              </ol>
            </div>
            <vue-markdown class="post__bodytext">
              {{ post.fields.body }}
            </vue-markdown>
          </article>
        </section>
      </div>
      <BannerBar :person="person" />
    </main>
    <ContactBar :person="person" />
    <SocialBar :person="person" />
    <FooterBar />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import HeaderBar from '~/components/HeaderBar.vue'
import BannerBar from '~/components/BannerBar.vue'
import ContactBar from '~/components/ContactBar.vue'
import SocialBar from '~/components/SocialBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import VueMarkdown from 'vue-markdown'
const client = createClient()

export default {
  components: {
    HeaderBar,
    BannerBar,
    SocialBar,
    ContactBar,
    FooterBar,
    VueMarkdown,
  },
  asyncData({ env, params }) {
        return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.slug
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        post: posts.items[0]
      }
    }).catch(console.error)
  },
}
</script>

<style lang="scss">
.post {
  &__intro {
    display: block;
    padding: 20px 0 0;
  }
  &__bodytext {
    padding: 20px 0;
    & h3 {
      font-family: var(--font-family-headings);
      font-size: 2.25rem;
    }
    & a {
      font-weight: 700;
    }
    img {
      margin: 5rem auto;
      border: 8px solid;
      border-image-slice: 1;
      border-width: 10px;
      border-image-source: var(--color-border-gradient);
    }
  }
}

pre {
  border: 1px solid var(--color-secondary);
  background: rgba(86, 131, 137, 0.10);
  padding: 20px;
  font-size: 1rem;
  margin: 40px 0;
}
</style>