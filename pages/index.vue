<template>
  <div>
    <ul class="social-media">
      <li class="social-media__item">
        <a
          :href="person.fields.github"
          arget="_blank"
          relopener="noopener"
          class="social-media__link"
        >
          <span class="accessibility">Github</span>
          <img src="~assets/images/github.svg" alt="" />
        </a>
      </li>
      <li class="social-media__item">
        <a
          :href="person.fields.linkedin"
          arget="_blank"
          relopener="noopener"
          class="social-media__link"
        >
          <span class="accessibility">LinkedIn</span>
          <img src="~assets/images/linkedin.svg" alt="" />
        </a>
      </li>
      <li class="social-media__item">
        <a
          :href="person.fields.twitter"
          arget="_blank"
          relopener="noopener"
          class="social-media__link"
        >
          <span class="accessibility">Twitter</span>
          <img src="~assets/images/twitter.svg" alt="" />
        </a>
      </li>
    </ul>
    <HeaderBar :person="person" />
    <div class="banner">
      <div class="banner__content">
        <code>{{ person.fields }}</code>
      </div>
    </div>
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
          <ul class="blog-posts">
            <li
              v-for="post in posts"
              :key="post.fields.title"
              class="blog-posts__item"
            >
              <div class="post">
                <time class="post__date">
                  <span>
                    {{ new Date(post.fields.publishDate).getDate() }}
                  </span>
                  /
                  <span>
                    {{ new Date(post.fields.publishDate).getMonth() }}
                  </span>
                </time>
                <span class="post__title">{{ post.fields.title }}</span>
                <nuxt-link
                  :to="{
                    name: 'blog-slug',
                    params: {
                      slug: post.fields.slug,
                    },
                  }"
                  class="post__link"
                >
                  Read post
                </nuxt-link>
              </div>
            </li>
          </ul>
          <a class="blog__link" href="http://">View all posts</a>
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
          <div class="testimonial__copy">
            <p>
              Dom is a pleasure to have around. A friendly, passionate,
              motivated individual who will stop at nothing to help if needed.
              Dom is a self driven guy who works equally well on his own as he
              does as part of a team. He is always looking for better ways to
              create solutions to problems and is great at dissecting code to
              create innovative creative. Highly recommended.
            </p>
          </div>
        </section>
      </div>
      <div class="banner">
        <div class="banner__content">
          <code>{{ person.fields }}</code>
        </div>
      </div>
    </main>
    <footer class="footer">
      <ul class="navigation">
        <li class="navigation__item">
          <a href="" class="navigation__link">About</a>
        </li>
        <span class="dot"></span>
        <li class="navigation__item">
          <a href="" class="navigation__link">Blog</a>
        </li>
        <span class="dot"></span>
        <li class="navigation__item">
          <a href="" class="navigation__link">Contact</a>
        </li>
        <span class="dot"></span>
        <li class="navigation__item">
          <a href="https://codepen.io/dominickjay217" class="navigation__link">
            Creative
          </a>
        </li>
      </ul>
      <p>© 2013–Today / Copyright Dominick Jay. All rights reserved.</p>
    </footer>
    <!-- <code>{{ person.fields }}</code> -->
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import HeaderBar from '~/components/HeaderBar.vue'

const client = createClient()

export default {
  components: {
    HeaderBar
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
// Heading styles
.heading {
  font-family: 'SaltedMocha-Regular';
}

// Header styles
.header {
  padding: 20px;
  background-color: #f2f5fa;
  margin-bottom: 40px;
  margin-top: -140px;
  &__title {
    text-align: center;
    font-size: 3rem;
    margin: 0;
  }
  &__tagline {
    font-size: 0.85rem;
    text-align: center;
    font-family: 'Mosk-light';
    margin-top: 0;
    color: var(--color-fourth);
  }
}

// Navigation
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  padding: 0;
  list-style: none;
  &__item {
    margin: 0 10px;
    position: relative;
  }
  &__link {
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Mosk-light';
    color: #212121;
    padding: 10px 20px;
    &:hover {
      // background-image: url(~assets/images/paint-stripe.svg);
      // background-size: contain;
      // background-repeat: no-repeat;
      // background-position: center;
      &::before,
      &::after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
      }
      &::before {
        content: '{';
        left: 5px;
        top: calc(50% - 5px);
      }
      &::after {
        content: '}';
        right: 5px;
        top: calc(50% + 5px);
      }
    }
  }
}

//hero
.hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  align-items: center;
  &__tagline {
    padding: 100px 50px 150px;
    font-size: 5.25rem;
    font-family: 'SaltedMocha-Regular';
    transform: rotate(-15deg);
  }
  &__image {
    padding: 100px 50px;
    margin-left: 50px;
    transform: rotate(5deg);
  }
}

//social-media
.social-media {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 40px;
  padding-left: 40px;
  list-style: none;
  max-width: 70px;
  &__item {
    margin-bottom: 20px;
  }
  img {
    max-width: 25px;
    opacity: 0.5;
    transition: 0.25s ease-in-out opacity;
    &:hover {
      opacity: 1;
    }
  }
}

.about {
  padding: 40px 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  font-family: 'Mosk-light';
}

.banner {
  overflow: hidden;
  opacity: 0.25;
  position: relative;
  padding: 42px 0;
  margin: 40px auto;
  &__content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-2deg);
    font-size: 0.85rem;
  }
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

.blog-posts {
  list-style: none;
  padding: 0;
  margin: 0;
  &__item {
    padding: 40px 0;
    border-bottom: 1px solid var(--color-secondary);
    &:last-child {
      border-bottom: 0;
    }
  }
}

.post {
  font-size: 1.25rem;
  display: flex;
  &__title {
    text-align: left;
    font-weight: 700;
  }
  &__link {
    margin-left: auto;
    text-decoration: none;
    font-weight: 700;
    color: var(--color-fourth);
    font-size: 1.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
  &__date {
    display: flex;
    justify-content: flex-start;
    margin-right: 40px;
    min-width: 50px;
    & span {
      font-weight: 700;
    }
    & span:last-child {
      opacity: 0.5;
    }
  }
}

.testimonial {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  &__copy {
    margin-bottom: 20px;
    position: relative;
    padding: 0 20px;
  }
  &__copy:first-child {
    grid-column: 3 / 8;
  }
}

.footer {
  background-color: var(--color-body);
  padding: 60px 20px;
  display: grid;
  grid-template: repeat(3, 1fr);
  & .navigation {
    grid-column: 1 / 3;
  }
  & p {
    font-size: 0.85rem;
    font-weight: 700;
    grid-column: 1 / 3;
    text-align: center;
  }
}
</style>
