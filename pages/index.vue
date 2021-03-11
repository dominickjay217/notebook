
<template>
  <div>
    <Weather />
    <HeaderBar :person="person" />
    <main>
      <BannerBar :person="person" />
      <div class="container">
        <section class="content about">
          {{ person.fields.shortBio }}
        </section>
        <Spacer spacer-no="1" />
        <section class="content blog">
            <h2 class="content__heading heading heading--two">Latest Posts</h2>
            <BlogPosts :posts="posts" />
            <NuxtLink class="blog__link" to="/blog">
              View all posts
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve">
                <g><path d="M12.851,69.957l-0.296-1.163c0.271-0.069,27.657-7.272,73.057-38.662l0.683,0.987   C40.691,62.648,13.124,69.887,12.851,69.957z"/></g><g><polygon points="83.766,36.421 82.723,35.829 85.339,31.225 79.953,31.225 79.953,30.025 87.4,30.025  "/></g>
              </svg>
            </NuxtLink>
        </section>
        <Spacer spacer-no="2" />
        <section class="content testimonial">
          <Testimonial :person="person" />
        </section>
      </div>
      <BannerBar :person="person" />
    </main>
    <!-- <code>{{ person.fields }}</code> -->
    <ContactBar :person="person" />
    <SocialBar :person="person" />
    <FooterBar />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import HeaderBar from '~/components/HeaderBar.vue'
import BannerBar from '~/components/BannerBar.vue'
import Testimonial from '~/components/Testimonial.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import SocialBar from '~/components/SocialBar.vue'
import ContactBar from '~/components/ContactBar.vue'
import Spacer from '~/components/Spacer.vue'
import Weather from '~/components/Weather.vue'
import FooterBar from '~/components/FooterBar.vue'

const client = createClient()

export default {
  components: {
    HeaderBar,
    BannerBar,
    BlogPosts,
    Testimonial,
    SocialBar,
    Spacer,
    Weather,
    ContactBar,
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
  font-family: var(--font-family-body);
}

.blog {
  &__link {
    text-decoration: none;
    font-weight: 700;
    color: var(--color-fourth);
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    & svg {
      max-width: 50px;
      transform: rotate(26deg);
      top: 6px;
      position: relative;
      margin-left: 6px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
