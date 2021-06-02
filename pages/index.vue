
<template>
  <div>
    <!-- <Weather /> -->
    <HeaderBar :person="person" />
    <main>
      <div class="container">
        <section class="content about">
          <p>
            Hey! I’m Dom <span class="wave-emoji">
              👋
            </span>
          </p>
          <vue-markdown class="about-intro">{{ person.fields.shortBio }}</vue-markdown>
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
        <Spacer spacer-no="2" />
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
import VueMarkdown from 'vue-markdown'
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
    VueMarkdown,
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

<style lang="scss">

.about {
  margin: 20px auto;
  text-align: left;
  font-family: var(--ff-base);
  color: var(--ff-color);
  font-weight: var(--fw-base-lg);
  font-size: var(--step-1);
  & > p:first-child {
    opacity: 0.85;
    font-weight: var(--fw-base-m);
    text-align: left;
  }
  &-intro {
    font-weight: var(--fw-base-lg);
    & p strong {
      color: var(--clr-third);
      padding: 0 5px;
      font-size: var(--step-1);
      position: relative;
      top: -2px;
    }
  }
}

.blog {
  text-align: center;
  &__link {
    color: var(--ff-color);
    font-size: var(--step-2);
  }
}

</style>
