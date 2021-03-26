<template>
  <div>
    <Weather />
    <HeaderBar :person="person" />
    <main>
      <BannerBar :person="person" />
      <div class="container">
        <section class="content blog">
          <h3 class="content__heading">I’ve written {{ posts.length }} posts about development and setups.</h3>
          <p>I write about technologies that I'm currently diving into, my development on this site, setups and goals. In these posts, I go through problems, solutions and how I am - infact - not Batman.</p>
          <BlogPosts :posts="posts" />
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
import BannerBar from '~/components/BannerBar.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import ContactBar from '~/components/ContactBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import HeaderBar from '~/components/HeaderBar.vue'
import SocialBar from '~/components/SocialBar.vue'
import Weather from '~/components/Weather.vue'
const client = createClient()

export default {
  components: {
    HeaderBar,
    BannerBar,
    BlogPosts,
    SocialBar,
    ContactBar,
    Weather,
    FooterBar
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      }),
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID,
      }),
    ])
      .then(([posts, entries]) => {
        return {
          posts: posts.items,
          person: entries.items[0],
        }
      })
      .catch(console.error)
  },
  head() {
      return {
        title: 'I Smashed Words Together in ' + this.posts.length + ' Posts'
      }
  }
}
</script>

<style lang="scss">

.template--dark h3 {
  color: var(--color-font);
}

.template--dark p {
  color: var(--color-font);
}
</style>