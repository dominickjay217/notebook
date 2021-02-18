<template>
  <div>
    <SocialBar :person="person" />
    <HeaderBar :person="person" />
    <BannerBar :person="person" />
    <main>
      <div class="container">
        <section class="content blog">
            <BlogPosts :posts="posts"/>
        </section>
      </div>
      <BannerBar :person="person"  />
    </main>
    <FooterBar />
    <!-- <code>{{ person.fields }}</code> -->
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import HeaderBar from '~/components/Headerbar.vue'
import BannerBar from '~/components/Bannerbar.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import NavigationBar from '~/components/Navigationbar.vue'
import SocialBar from '~/components/Socialbar.vue'
import FooterBar from '~/components/Footerbar.vue'
const client = createClient()

export default {
  components: {
    HeaderBar,
    NavigationBar,
    BannerBar,
    BlogPosts,
    SocialBar,
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
}
</script>
