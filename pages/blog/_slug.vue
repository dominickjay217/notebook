<template>
  <div>
    <SocialBar :person="person" />
    <HeaderBar :person="person" />
    <BannerBar :person="person" />
    <main>
      <div class="container">
        <section class="content post">
          <article class="post__content">
            <h2 class="post__heading heading heading--two">{{ post.fields.title }}</h2>
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
            <vue-markdown class="post__bodytext">{{post.fields.body}}</vue-markdown>
          </article>
        </section>
      </div>
      <BannerBar :person="person"  />
    </main>
    <ContactBar :person="person"/>
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

<style lang="scss" scoped>
.post {
  &__intro {
    display: block;
    padding: 20px 0 0;
  }
  &__bodytext {
    padding: 20px 0;
  }
}
</style>