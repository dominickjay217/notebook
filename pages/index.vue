
<template>
  <div>
    <!-- <Weather /> -->
    <HeaderBar :person="person" />
    <main>
      <div class="container">
        <section class="content about">
          <div>
            <p>
              Hey! I’m Dom <span class="wave-emoji">
                👋
              </span>
            </p>
            <vue-markdown class="about-intro">{{ person.fields.shortBio }}</vue-markdown>
          </div>
          <div>
            <Generative />
          </div>
        </section>
        <Spacer spacer-no="1" />
        <section class="content blog">
          <h2 class="content__heading heading heading--two">
            Recently Published
          </h2>
          <div>
            <GenPattern />
            <div>
              <BlogPosts :posts="posts" />
              <NuxtLink
                class="blog__link"
                to="/writing"
              >
                View all posts
                <svg
                  class="blog__link-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 125"
                >
                  <path d="M11.3 19c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6s1-.2 1.4-.6c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2-.7-2.8 0zM25.2 22.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.3.4.8.6 1.4.6zM37.6 22.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.3.4.9.6 1.4.6zM50 22.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6zM23.8 32.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4zM36.2 32.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4zM48.6 32.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4zM62.4 32.7c.5 0 1-.2 1.4-.6s.6-.9.6-1.4c0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6zM36.2 41.4c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM48.6 41.4c.4.3.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.7-2.8 0-.4.3-.6.8-.6 1.4 0 .5.2 1 .6 1.4zM61 41.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM74.8 42c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.3.9.6 1.4.6zM73.4 61.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM61 61.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM48.6 61.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM36.2 61.4c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM61 71.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6s.6-.9.6-1.4c0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM48.6 71.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM36.2 71.8c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM23.8 71.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM48.6 81c.4.4.9.6 1.4.6s1-.2 1.4-.6c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM36.2 81c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM23.8 81c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM11.3 78.2c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2-.8-2.8 0zM48.6 51.3c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM61 51.3c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1.1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM73.4 51.3c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM85.8 48.4c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2-.7-2.8 0z" />
                </svg>
              </NuxtLink>
            </div>
          </div>
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
import Generative from '~/components/Generative.vue'
import HeaderBar from '~/components/HeaderBar.vue'
import GenPattern from '~/components/Pattern.vue'
import SocialBar from '~/components/SocialBar.vue'
// import Spacer from '~/components/Spacer.vue'
import VueMarkdown from 'vue-markdown'
//import Weather from '~/components/Weather.vue'

const client = createClient()

export default {
  components: {
    BlogPosts,
    ContactBar,
    Generative,
    FooterBar,
    HeaderBar,
    GenPattern,
    SocialBar,
    // Spacer,
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
  }
}
</script>

<style lang="scss">

.about {
  padding: 120px 0;
  margin: 0 auto;
  text-align: left;
  font-family: var(--ff-base);
  font-weight: var(--fw-base-m);
  color: var(--ff-color);
  font-size: var(--step-1);
  display: flex;
  gap: var(--grid-gap);
  & > div {
    width: 50%;
    flex-shrink: 0;
  }
  & > p:first-child {
    opacity: 0.85;
    text-align: left;
  }
  &-intro {
    & p strong {
      color: var(--clr-third);
      color: #E85A4F;
      padding: 0 5px;
      font-size: calc(var(--step-1) * 1.5);
      position: relative;
      line-height: 1.3;
      top: -2px;
    }
  }
}

.blog {
  position: relative;
  text-align: center;
  display: flex;
  gap: var(--grid-gap);
  flex-direction: column;
  & > div {
    display: flex;
    & > div {
      width: calc(100% / 3 * 2);
      flex-shrink: 0;
      padding-left: 40px;
    }
    & > div:first-child {
      width: calc(100% / 3);
      padding-left: 0;
    }
    & > div:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      & > div {
        width: 100%;
      }
    }
  }
  &__link {
    color: var(--ff-color);
    font-size: var(--step-2);
    display: inline;
    margin-top: 40px;
    color: #ffffff;
    padding: 0 var(--padding-df);
    position: relative;
    transition: .25s ease-in-out color;
    transition-delay: .02s;
    left: -60px;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      background: #E85A4F;
      z-index: -1;
      transition: .25s ease-in-out all;
    }
    &-arrow {
      max-width: 50px;
      position: absolute;
      top: -2.5px;
      right: -50px;
      fill: transparent;
    }
    &:hover {
      color: var(--ff-color);
      transition: .25s ease-in-out color;
      &::before {
        right: -50px;
        width: 50px;
        transition: .25s ease-in-out all;
      }
      & .blog__link-arrow {
        fill: #fff;
      }
    }
  }
}

@media (max-width: 992px) {
  .about {
    margin: 0 auto;
    padding: 40px 0;
    flex-direction: column;
    & div {
      width: 100%;
    }
  }

  .blog > div > div:last-child {
    width: 100%;
    padding-left: 0;
  }
}


</style>
