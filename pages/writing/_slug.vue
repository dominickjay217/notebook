<template>
  <div>
    <!-- <Weather /> -->
    <HeaderBar :person="person" />
    <main>
      <div class="container">
        <section class="content post">
          <article class="post__content">
            <h2 class="post__heading heading heading--two">
              {{ post.fields.title }}
            </h2>
            <strong class="post__subheading">
              {{ post.fields.subheading }}
            </strong>
            <vue-markdown class="post__bodytext">
              {{ post.fields.body }}
            </vue-markdown>
            <time class="post__date">
              <span>Published at:</span>
              <span class="post__datetime">
                {{ ( new Date(post.fields.publishDate).toLocaleString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })) }}
              </span>
            </time>
          </article>
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
import ContactBar from '~/components/ContactBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import HeaderBar from '~/components/HeaderBar.vue'
import SocialBar from '~/components/SocialBar.vue'
//import Weather from '~/components/Weather.vue'
import VueMarkdown from 'vue-markdown'
const client = createClient()

export default {
  components: {
    HeaderBar,
    SocialBar,
    ContactBar,
    FooterBar,
    //Weather,
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
  }
}
</script>

<style lang="scss">

time {
  display: block;
  & span {
    display: block;
    font-weight: var(--fw-base-xl);
    opacity: 0.5;
  }
  & .post__datetime {
    opacity: 1;
    font-weight: var(--fw-base-m);
  }
}

.post {
  color: var(--ff-color);
  &__subheading {
    background: var(--blog-gradient);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-fill-color: transparent;
    margin-bottom: 40px;
    display: block;
    text-align: center;
    font-size: 1.5rem;
  }
  strong {
    font-weight: var(--fw-base-lg);
    color: var(--blog-ff-strong);
  }
  aside {
    position: relative;
    padding: 24px 32px;
    margin-top: 48px;
    margin-bottom: 64px;
    border-left: 3px solid;
    border-left-color: var(--aside-border);
    border-radius: 6px 6px 6px 3px;
    background-color: var(--aside-background);
    & strong {
      font-size: var(--step-2);
    }
    & i {
      position: absolute;
      top: 0px;
      left: 0px;
      transform: translate(-50%, -50%);
      padding: 8px;
      background: var(--main-background);
      border-radius: 50%;
      color: var(--aside-icon);
    }
  }
  a {
    font-weight: var(--fw-base-m);
    color: var(--ff-color);
  }
  ol {
    counter-reset: section;
    list-style: none;
    margin-bottom: 1rem;
    margin-left: 0;
    & li {
      position: relative;
      margin-left: 25px;
    }
    & li::before {
      counter-increment: section;
      content: "0" counter(section);
      position: absolute;
      font-weight: var(--fw-base-lg);
      opacity: 0.5;
      font-size: var(--step--1);
      left: -20px;
      top: -2px;
    }
  }
  h3 {
    font-size: var(--step-0);
    font-weight: var(--fw-base-lg);
    background: var(--blog-gradient);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-fill-color: transparent;
    color: var(--clr-fifth);
  }
  iframe {
    margin: 40px auto;
  }
  code {
    background: #d3d3d3 none repeat scroll 0% 0%;
    padding: 2px 6px;
    display: inline;
    color: var(--code-font-color);
    margin: 0 1px;
    font-family: var(--ff-code);
    border-radius: 3px;
  }
  pre {
    border-radius: 3px;
    margin: 0;
  }
  pre code {
    display: block;
    padding: 30px 20px;
    font-size: var(--step-0);
  }
  img {
    margin: 40px auto;
  }

  .code-block {
    position: relative;
    &__language {
      background: #d3d3d3 none repeat scroll 0% 0%;
      margin-bottom: -2px;
    }
  }
}

</style>