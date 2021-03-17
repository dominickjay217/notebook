<template>
  <div>
    <Weather />
    <HeaderBar :person="person" />
    <main>
    <BannerBar :person="person" />
      <div class="container">
        <section class="content about">
          <vue-markdown class="about__intro">{{ about.fields.aboutIntro }}</vue-markdown>
          <img
            class="about__picture"
            :src="person.fields.profileImage.fields.file.url + '?w=1200'"
            :alt="person.fields.profileImage.fields.title"
          >
          <vue-markdown class="about__content about__content--one">{{ about.fields.aboutSectionOne }}</vue-markdown>
          <vue-markdown class="about__content about__content--two">{{ about.fields.aboutSectionTwo }}</vue-markdown>
          <img
            class="about__picture about__picture--two"
            src="images/insp1.png"
          >
          <div class="about__content about__content--joke">
            <strong>
              I love dad jokes, how about one of them instead?
            </strong>
            <Joke></Joke>
          </div>
          <div class="about__content about__content--lastfm">
              <p v-if="$fetchState.pending">Fetching music information...</p>
              <p v-else-if="$fetchState.error">Either an error occurred or I've got Disney playing</p>
              <div class="lastfm-info" v-else>
                <p>
                  The last song I listened to was
                  <strong>{{ music.recenttracks.track[0].name }}</strong> by
                  <strong>{{ music.recenttracks.track[0].artist['#text'] }}</strong>
                </p>
                <div class="lastfm-info__imagewrapper">
                  <img class="lastfm-info__image" :src="music.recenttracks.track[0].image[3]['#text']" />
                  <img :src="music.recenttracks.track[0].image[3]['#text']" />
                </div>
              </div>
          </div>
        </section>
        <Spacer spacer-no="2" />
        <section class="content work">
          <h2 class="content__heading heading heading--two">
            Featured Work
          </h2>
          <div class="work__image-wrapper">
            <a
              :href="about.fields.featuredWorkUrl"
              target="_blank"
              relopener="noopener"
            >
              <img
                class="work__image"
                :src="about.fields.featuredWork.fields.file.url"
                :alt="about.fields.featuredWork.fields.title"
              >
            </a>
          </div>
          <h2 class="content__heading heading heading--two">
            Other Work
          </h2>
          <ul class="other-work__list">
            <li
              v-for="otherWork in about.fields.workLink"
              :key="otherWork.fields.snippetName"
              class="other-work__item"
            >
              <a
                class="other-work__link"
                :href="otherWork.fields.snippetLink"
              >
                {{ otherWork.fields.snippetName }}
              </a>
            </li>
          </ul>
        </section>
        <Spacer spacer-no="1" />
        <section class="content testimonial">
          <Testimonial :person="person" />
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
import Joke from '~/components/Joke.vue'
import SocialBar from '~/components/SocialBar.vue'
import Spacer from '~/components/Spacer.vue'
import Testimonial from '~/components/Testimonial.vue'
import VueMarkdown from 'vue-markdown'
import Weather from '~/components/Weather.vue'

const client = createClient()

export default {
  components: {
    BannerBar,
    ContactBar,
    FooterBar,
    HeaderBar,
    Joke,
    Testimonial,
    SocialBar,
    Spacer,
    VueMarkdown,
    Weather,
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID,
      }),
      client.getEntries({
        'sys.id': env.CTF_ABOUT_PERSON_ID,
      }),
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      }),
    ])
      .then(([entries, about, posts]) => {
        return {
          person: entries.items[0],
          posts: posts.items,
          about: about.items[0]
        }
      })
      .catch(console.error)
  },
  data() {
    return {
      music: []
    }
  },
  async fetch(){
    this.music = await fetch(
        'https://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=zerosandones217&limit=1&api_key=86a5b41a85035739e32c576f027c4765&format=json'
      ).then(res => res.json())
  },
  created() {
    this.interval = setInterval(() => this.$fetch(), 60000);
  }
}
</script>

<style lang="scss" scoped>

/* Inline #12 | http://localhost:3000/about */

.about {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    //grid-template-rows: repeat(5, minmax(50px, 1fr));
    grid-auto-flow: dense;
    grid-gap: var(--grid-gap);
    &__intro {
        grid-column: span 2;
    }
    &__picture {
        grid-column: 4 / span 1;
        object-fit: cover;
        // grid-row: 1 / 3;
        &--two {
          align-self: center;
          // grid-row: 3 / 3;
          grid-column: 2 / 3;
        }
    }
    &__content {
        font-size: 1rem;
        padding-bottom: 40px;
        align-self: center;
        &--one {
            // grid-row: 2;
            grid-column: 1 / 4;
        }
        &--two {
            grid-row: 3;
            grid-column: 2 / 4;
        }
        &--joke {
            // grid-row: 5;
            grid-column: 3 / 5;
            align-self: center;
            & strong {
                display: block;
                margin-bottom: 20px;
            }
        }
        &--lastfm {
            grid-row: 5;
            grid-column: 1/4;
            padding-top: 60px;
            & strong {
                margin-bottom: 20px;
                font-size: 1rem;
            }
            & img {
              margin: 20px auto;
            }
        }
    }
}

.template--dark .about {
  color: var(--color-font);
}

.work {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--grid-gap);;
    & .heading:first-child {
        grid-column: 1 / 3;
        grid-row: 1;
    }
    & .heading:last-of-type {
        grid-column: 3 / 4;
        grid-row: 1;
    }
    &__image {
        filter: grayscale(100%);
        transition: .25s ease-in-out all;
        &:hover {
            filter: grayscale(0);
        }
        &-wrapper {
            max-height: 850px;
            overflow: hidden;
            grid-column: 1 / 3;
        }
    }
}

.other-work {
    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        grid-row: 2;
        grid-column: 3 / 4;
    }
    &__item {
        padding: 0;
        border-bottom: 1px solid var(--color-secondary);
        &:last-child {
            border-bottom: 0;
        }
    }
    &__link {
        text-decoration: none;
        font-weight: 700;
        color: var(--color-fourth);
        text-align: left;
        width: 100%;
        display: block;
        padding: 20px;
        &:hover {
            text-decoration: underline;
        }
    }
}

.template--dark .other-work__link {
  color: var(--color-font);
}

@media (max-width: 992px) {
  .work {
    grid-template-columns: repeat(1, 1fr);
    & .heading {
        grid-column: 1;
      &:first-child {
        grid-row: 1;
        grid-column: 1;
      }
      &:last-of-type {
        grid-row: 3;
        grid-column: 1;
      }
    }
    &__image-wrapper {
      grid-column: 1;
      grid-row: 2;
    }
  }

  .other-work {
    &__list {
        grid-column: 1;
        grid-row: 4;
    }
  }
}

.lastfm-info {
  display: flex;
  align-items: center;
  &__imagewrapper {
    position: relative;
    padding-left: 20px;
  }
  & img:last-of-type {
    position: absolute;
    top: 0;
    filter: blur(24px);
    transform: rotate(4deg);
  }
  & .lastfm-info__image {
    transform: rotate(4deg);
    z-index: 1;
    position: relative;
  }
}

@media (max-width: 1024px) and (orientation: landscape) {
  .about {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    &__intro {
      grid-column: span 3;
    }
  }
}

@media (max-width: 768px) and (orientation: portrait) {
  .about {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    &__intro {
      grid-column: 1 / 5;
      grid-row: 2;
    }
    &__picture {
      grid-column: 1 / 4;
      grid-row: 1;
      padding-top: 0;
      margin: 0 auto;
      &--two {
        grid-row: 3;
      }
    }
    &__content {
      grid-column: 1 / 5;
    }
    &__content:nth-child(3) {
      grid-row: 4;
    }
    &__content:nth-child(4) {
      grid-row: 5;
    }
    &__content--joke {
      grid-row: 6;
    }
    &__content--lastfm {
      grid-row: 7;
    }

  }

  .lastfm-info {
    align-items: flex-start;
    &__imagewrapper {
      padding-top: 10px;
      max-width: 250px;
      width: 100%;
    }
    p {
      max-width: 350px;
    }
  }
}



</style>
