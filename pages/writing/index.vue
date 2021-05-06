<template>
  <div>
    <Weather />
    <HeaderBar :person="person" />
    <main>
      <div class="container">
        <section class="content blog">
          <h3 class="content__heading">
            I’ve written {{ posts.length }} posts about development and setups.
          </h3>
          <p>I write about technologies that I'm currently diving into, my development on this site, setups and goals. In these posts, I go through problems, solutions and how I am - infact - not Batman.</p>
          <BlogPosts :posts="posts" />
        </section>
      </div>
    </main>
    <ContactBar :person="person" />
    <SocialBar :person="person" />
    <FooterBar />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
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
        title: "I’ve Written " + this.posts.length + " Posts About How I Am Not Batman"
      }
  }
}
</script>

<style lang="scss">
.blog h3,
.blog p  {
  color: var(--ff-color);
  font-size: var(--step-0);
}
</style>