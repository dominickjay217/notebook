
<template>
  <div>
    <!-- <Weather /> -->
    <HeaderBar :person="person" />
    <main>
      <div class="container">
        <section class="content about">
          <vue-markdown>{{ person.fields.shortBio }}</vue-markdown>
        </section>
        <Spacer spacer-no="1" />
        <section class="content blog">
          <h2 class="content__heading heading heading--two">
            Recently Published
          </h2>
          <BlogPosts :posts="posts" />
          <NuxtLink
            class="blog__link"
            to="/writing"
          >
            View all posts
          </NuxtLink>
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
import Spacer from '~/components/Spacer.vue'
//import Weather from '~/components/Weather.vue'

const client = createClient()

export default {
  components: {
    BlogPosts,
    ContactBar,
    FooterBar,
    HeaderBar,
    SocialBar,
    Spacer,
    //Weather,
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
  margin: 40px auto;
  text-align: center;
  font-size: var(--step-0);
  font-weight: var(--fw-base-m);
  font-family: var(--ff-base);
  color: var(--ff-color);
}

.blog {
  &__link {
    box-shadow: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    color: var(--ff-color);
    & svg {
      max-width: 50px;
      transform: rotate(26deg);
      top: 6px;
      position: relative;
      margin-left: 6px;
    }
  }
}

// .template--dark .blog__link {
//   & svg {
//       fill: #fff;
//   }
// }

</style>
