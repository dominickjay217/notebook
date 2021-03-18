<template>
  <div>
    <Weather />
    <HeaderBar :person="person" />
    <main>
      <BannerBar :person="person" />
      <div class="container">
        <section class="content blog">
          <h3 class="content__heading">
            I’ve written 31 posts about how I stopped being such a dingus.
          </h3>
          <p>I write about building strong teams, healthier working lives, effective habits, and more. In these posts, I share actionable strategies written from real experience.</p>
          <BlogPosts :posts="posts" />
        </section>
      </div>
      <BannerBar :person="person" />
    </main>
    <ContactBar :person="person" />
    <SocialBar :person="person" />
    <FooterBar />
    <!-- <code>{{ person.fields }}</code> -->
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import HeaderBar from '~/components/HeaderBar.vue'
import BannerBar from '~/components/BannerBar.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import SocialBar from '~/components/SocialBar.vue'
import ContactBar from '~/components/ContactBar.vue'
import Weather from '~/components/Weather.vue'
import FooterBar from '~/components/FooterBar.vue'
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
h3 {

}

p {
  margin-bottom: 60px;
}
</style>