<template>
  <main>
    <div class="container">
      <section class="content post">
        <article class="blogpost__content">
          <button class="back-button" onclick="history.back()">
            <svg
              class="back-button__arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 125"
            >
              <path d="M11.3 19c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6s1-.2 1.4-.6c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2-.7-2.8 0zM25.2 22.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.3.4.8.6 1.4.6zM37.6 22.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.3.4.9.6 1.4.6zM50 22.4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6zM23.8 32.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4zM36.2 32.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4zM48.6 32.1c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1.1.6 1.4zM62.4 32.7c.5 0 1-.2 1.4-.6s.6-.9.6-1.4c0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6zM36.2 41.4c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM48.6 41.4c.4.3.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.7-2.8 0-.4.3-.6.8-.6 1.4 0 .5.2 1 .6 1.4zM61 41.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM74.8 42c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.3.9.6 1.4.6zM73.4 61.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM61 61.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM48.6 61.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM36.2 61.4c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4zM61 71.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6s.6-.9.6-1.4c0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM48.6 71.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM36.2 71.8c.4.4.9.6 1.4.6.5 0 1.1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM23.8 71.8c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM48.6 81c.4.4.9.6 1.4.6s1-.2 1.4-.6c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM36.2 81c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM23.8 81c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2.1-.8-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM11.3 78.2c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.8-2-.8-2.8 0zM48.6 51.3c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM61 51.3c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1.1-.6-1.4-.7-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM73.4 51.3c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.8-.7-2.1-.7-2.8 0-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4zM85.8 48.4c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.7-.7-2-.7-2.8 0z" />
            </svg>
            <span>
              Head back
            </span>
          </button>
          <h2 class="blogpost__heading heading heading--two">
            {{ article.title }}
          </h2>
          <strong class="blogpost__subheading">
            {{ article.description }}
          </strong>
          <nuxt-content :document="article" />
        </article>
      </section>
    </div>
  </main>
</template>

<script>

import getShareImage from '@jlengstorf/get-share-image'
import getSiteMeta from '~/utils/getSiteMeta.js'

export default {
  async asyncData ({ $content, params }) {
    const { year, month, slug } = params

    const article = await $content('articles', year, month, slug).fetch()

    const socialImage = getShareImage({
      title: article.title,
      tagline: article.tags,
      cloudName: 'dominickjay217',
      imagePublicID: 'post-template',
      textAreaWidth: '850',
      titleColor: '203140',
      titleBottomOffset: '300',
      titleLeftOffset: '220',
      titleFont: 'Hackney.ttf',
      titleExtraConfig: '_bold',
      titleFontSize: '100',
      taglineFont: 'Hackney.ttf',
      taglineFontSize: '45',
      taglineLeftOffset: '225',
      taglineTopOffset: '450'
    })

    return {
      article,
      socialImage
    }
  },
  head () {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : ''
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Dominick Jay' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : ''
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://dominickjay.com/articles/${this.$route.params.year}/${this.$route.params.month}/${this.$route.params.slug}`
        }
      ]
    }
  },
  computed: {
    meta () {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `https://dominickjay.com/articles/${this.$route.params.year}/${this.$route.params.month}/${this.$route.params.slug}`,
        mainImage: this.socialImage
      }
      return getSiteMeta(metaData)
    }
  }
}
</script>

<style lang="scss">

.back-button {
  border: none;
  background: none;
  box-shadow: none;
  margin-top: 20px;
  cursor: pointer;
  font-size: var(--step-1);
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  & span {
    background-color: var(--main-background);
    position: relative;
    z-index: 1;
    display: block;
    padding: 12px 0 12px 10px;
    left: -25px;
    transition: var(--trn-default);
  }
  &__arrow {
    transform: rotate(180deg);
    max-width: 50px;
    margin-right: 10px;
    height: auto;
    max-height: 40px;
    fill: var(--clr-fifth-dk);
    top: -1px;
    position: relative;
    transition: var(--trn-default);
  }
  &:hover svg {
    fill: var(--clr-third-dk);
  }
  &:hover span {
    left: 0;
  }
}

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

.content.post {
  padding: 10px 0;
}

.blogpost {
  color: var(--ff-color);
  &__heading {
    margin-top: 0;
  }
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

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: var(--code-block-background);
  text-shadow: none;
}

.token.regex,
.token.important,
.token.variable {
  color: #bb8117;
}

p > code {
  background: var(--code-block-background);
  padding: 2px 4px;
  font-weight: var(--fw-base-lg);
}

@media (prefers-color-scheme: dark) {

code[class*="language-"],
pre[class*="language-"] {
  color: #f8f8f2;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: var(--code-block-background);
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #d4d0ab;
}

.token.punctuation {
  color: #fefefe;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #ffa07a;
}

.token.boolean,
.token.number {
  color: #00e0e0;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #abe338;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #00e0e0;
  background: none;
}

.token.atrule,
.token.attr-value,
.token.function {
  color: #ffd700;
}

.token.keyword {
  color: #00e0e0;
}

.token.regex,
.token.important {
  color: #ffd700;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

@media screen and (-ms-high-contrast: active) {
    code[class*="language-"],
    pre[class*="language-"] {
      color: windowText;
      background: window;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: window;
    }

    .token.important {
      background: highlight;
      color: window;
      font-weight: normal;
    }

    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.keyword,
    .token.operator,
    .token.selector {
      font-weight: bold;
    }

    .token.attr-value,
    .token.comment,
    .token.doctype,
    .token.function,
    .token.keyword,
    .token.operator,
    .token.property,
    .token.string {
      color: highlight;
    }

    .token.attr-value,
    .token.url {
      font-weight: normal;
    }
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

.article-pagination {
  display: flex;
  justify-content: space-between;
  font-size: var(--step-2);
  & a:hover {
    text-decoration: underline;
    text-decoration-color: #E85A4F;
    text-decoration-thickness: 2px;
  }
}

.articles-slug {
  padding: 40px 0;
}

@media (max-width: 640px) {
  .content.post {
    display: block;
  }
}

</style>
