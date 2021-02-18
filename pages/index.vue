
<template>
  <div>
    <SocialBar :person="person" />
    <HeaderBar :person="person" />
    <BannerBar :person="person" />
    <main>
      <div class="container">
        <section class="content about">
          {{ person.fields.shortBio }}
        </section>
        <svg
          class="spacer spacer--01"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 55.5 12"
          style="enable-background: new 0 0 55.5 12;"
          xml:space="preserve"
        >
          <path
            class="spacer-line"
            d="M1.4,6c0,0,9-9,18,0s18,0,18,0s9-9,18,0s18,0,18,0s9-9,18,0"
          />
        </svg>
        <section class="content blog">
            <h2 class="content__heading heading heading--two">Latest Posts</h2>
            <BlogPosts :posts="posts" />
            <NuxtLink class="blog__link" to="/blog">
              View all posts
            </NuxtLink>
        </section>
        <svg
          class="spacer spacer--02"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 55.5 12"
          style="enable-background: new 0 0 55.5 12;"
          xml:space="preserve"
        >
          <path
            class="spacer-line"
            d="M1.4,6c0,0,9-9,18,0s18,0,18,0s9-9,18,0s18,0,18,0s9-9,18,0"
          />
        </svg>
        <section class="content testimonial">
          <Testimonial :person="person" />
        </section>
      </div>
      <BannerBar :person="person" />
    </main>
    <!-- <code>{{ person.fields }}</code> -->
    <FooterBar />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import HeaderBar from '~/components/Headerbar.vue'
import NavigationBar from '~/components/Navigationbar.vue'
import BannerBar from '~/components/Bannerbar.vue'
import Testimonial from '~/components/Testimonial.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import SocialBar from '~/components/Socialbar.vue'
import FooterBar from '~/components/Footerbar.vue'

const client = createClient()

export default {
  components: {
    HeaderBar,
    NavigationBar,
    BannerBar,
    BlogPosts,
    Testimonial,
    SocialBar,
    FooterBar
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID,
      }),
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      }),
    ])
      .then(([entries, posts]) => {
        return {
          person: entries.items[0],
          posts: posts.items,
        }
      })
      .catch(console.error)
  },
}
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Mosk-light';
}

.blog {
  &__link {
    text-decoration: none;
    font-weight: 700;
    color: var(--color-fourth);
    text-align: center;
    width: 100%;
    display: block;
    padding: 20px 0;
    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
