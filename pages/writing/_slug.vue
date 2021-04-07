<template>
  <div>
    <Weather />
    <HeaderBar :person="person" />
    <main>
      <BannerBar :person="person" />
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
      <BannerBar :person="person" />
    </main>
    <ContactBar :person="person" />
    <SocialBar :person="person" />
    <FooterBar />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import BannerBar from '~/components/BannerBar.vue'
import ContactBar from '~/components/ContactBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import HeaderBar from '~/components/HeaderBar.vue'
import SocialBar from '~/components/SocialBar.vue'
import Weather from '~/components/Weather.vue'
import VueMarkdown from 'vue-markdown'
const client = createClient()

export default {
  components: {
    HeaderBar,
    BannerBar,
    SocialBar,
    ContactBar,
    FooterBar,
    Weather,
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
  },
  mounted() {

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

.template--dark time {
  color: var(--clr-primary);
}

.post {
  --clr-fifth-light: rgba(158, 205, 213, 0.25);
  --backgroundGradient: linear-gradient(var(--clr-fifth), #325d63);
  &__subheading {
    font-weight: var(--fw-base-lg);
    background: var(--backgroundGradient);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-fill-color: transparent;
    color: var(--clr-fifth);
    margin-bottom: 40px;
    display: block;
    text-align: center;
  }
  strong {
    font-weight: var(--fw-base-lg);
    color: var(--clr-fifth);
  }
  aside {
    position: relative;
    padding: 24px 32px;
    margin-top: 48px;
    margin-bottom: 64px;
    border-left: 3px solid;
    border-left-color: var(--clr-fifth);
    border-radius: 6px 6px 6px 3px;
    background-color: var(--clr-fifth-light);
    & i {
      position: absolute;
      top: 0px;
      left: 0px;
      transform: translate(-50%, -50%);
      padding: 8px;
      background: #fff;
      border-radius: 50%;
      color: var(--clr-fifth);
    }
  }
  a {
    font-weight: var(--fw-base-m);
    color: var(--ff-color);
  }
  h3 {
    font-size: var(--step-0);
    font-weight: var(--fw-base-lg);
    background: var(--backgroundGradient);
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
    padding: 4px 6px;
    display: inline;
    color: var(--ff-color);
    margin: 0 1px;
    font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
    border-radius: 3px;
  }
  pre {
    border-radius: 3px;
    margin: 0;
  }
  pre code {
    display: block;
    padding: 30px 20px;
    font-size: var(--step--2);
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

.template--dark .post__subheading,
.template--dark .post h3 {
  --color-third-light: #fcb276;
  --backgroundGradient: linear-gradient(var(--color-third), var(--color-third-light));
}

.template--dark .post__bodytext strong {
  color: var(--color-third);
}

.template--dark .post__bodytext .aside {
  border-left-color: var(--color-third);
  background-color: rgba(252, 178, 118, 0.15);
  & i {
    background-color: #222;
    color: var(--color-third);
  }
}

.template--dark .post code {
  --ff-color: #212121;
}
// .post {
//   &__intro {
//     display: block;
//     padding: 20px 0 0;
//   }
//   &__bodytext {
//     padding: 20px 0;
//     & h3 {
//       font-family: var(--ff-alt-alpha);
//       font-size: 2.25rem;
//     }
//     & a {
//       font-weight: var(--fw-base-m);
//     }
//     img {
//       margin: 5rem auto;
//       border: 8px solid;
//       border-image-slice: 1;
//       border-width: 10px;
//       border-image-source: var(--color-border-gradient);
//     }
//     blockquote {
//       --color-border-gradient: linear-gradient(to left, var(--clr-primary), var(--clr-fifth), var(--clr-primary));
//       margin: 40px 0;
//       padding: 10px 20px;
//       border: 2px solid transparent;
//       background: linear-gradient(#fff, #fff), var(--color-border-gradient);
//       background-origin: padding-box, border-box;
//       background-repeat: no-repeat; /* this is important */
//       border-left: none;
//       border-right: none;
//     }
//   }
// }

// .template--dark .post__content {
//   color: var(--ff-color);
// }

// pre {
//   border: 1px solid var(--clr-fifth);
//   background: rgba(86, 131, 137, 0.10);
//   padding: 20px;
//   font-size: 1rem;
//   margin: 40px 0;
// }
</style>