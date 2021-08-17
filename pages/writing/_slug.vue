<template>
  <div>
    <!-- <Weather /> -->
    <!-- <HeaderBar :person="person" /> -->
    <main>
      <div class="container">
        <section class="content post">
          <!-- <article class="blogpost__content">
            <h2 class="blogpost__heading heading heading--two">
              {{ post.fields.title }}
            </h2>
            <strong class="blogpost__subheading">
              {{ post.fields.subheading }}
            </strong>
            <vue-markdown class="blogpost__bodytext">
              {{ post.fields.body }}
            </vue-markdown>
            <time class="blogpost__date">
              <span>Published at:</span>
              <span class="blogpost__datetime">
                {{ ( new Date(post.fields.publishDate).toLocaleString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })) }}
              </span>
            </time>
          </article> -->
          <pre> {{ article }} </pre>
        </section>
      </div>
    </main>
    <!-- <ContactBar :person="person" />
    <SocialBar :person="person" /> -->
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
    // HeaderBar,
    // SocialBar,
    // ContactBar,
    FooterBar,
    //Weather,
    // VueMarkdown,
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
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
  & .blogpost__datetime {
    opacity: 1;
    font-weight: var(--fw-base-m);
  }
}

img[src*="#gif"] {
   max-width: 350px;
}

.blogpost {
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
}

iframe {
  margin: 40px auto;
}

img {
  margin: 40px auto;
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

code {
  background: var(--clr-secondary-lt);
  padding: 2px 6px;
  display: inline;
  color: var(--code-font-color);
  margin: 0 1px;
  font-family: var(--ff-code);
  border-radius: 3px;
}

.code-block {
  position: relative;
  &__language {
    background: #d3d3d3 none repeat scroll 0% 0%;
    margin-bottom: -2px;
  }
}

strong {
  font-size: var(--step-2);
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

</style>