<template>
  <div>
    <Weather />
    <HeaderBar :person="person" />
    <main>
      <div class="container">
        <section class="content about-me">
          <vue-markdown class="about-me__intro">{{ about.fields.aboutIntro }}</vue-markdown>
          <vue-markdown class="about-me__content about-me__content--one">{{ about.fields.aboutSectionOne }}</vue-markdown>
          <div class="about-me__content about-me__content--joke">
            <strong>
              I love dad jokes, how about-me one of them instead?
            </strong>
            <Joke />
          </div>
          <div class="about-me__content about-me__content--lastfm">
            <p
              v-if="$fetchState.pending"
            >
              Fetching music information...
            </p>
            <p
              v-else-if="$fetchState.error"
            >
              Either an error occurred or I've got Disney playing
            </p>
            <div
              v-else
              class="lastfm-info"
            >
              <p>
                The last song I listened to was
                <strong>{{ music.recenttracks.track[0].name }}</strong> by
                <strong>{{ music.recenttracks.track[0].artist['#text'] }}</strong>
              </p>
              <div class="lastfm-info__imagewrapper">
                <img
                  class="lastfm-info__image"
                  loading="lazy"
                  :src="music.recenttracks.track[0].image[3]['#text']"
                >
                <img
                  :src="music.recenttracks.track[0].image[3]['#text']"
                  loading="lazy"
                >
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
                loading="lazy"
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
                <svg
                  width="85"
                  height="10"
                  viewBox="0 0 85 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.992188 4.48828C0.992188 4.48828 19.6624 7.69204 35.5 7.5C51.3554 7.30774 81.9923 3.50047 81.9923 3.50047" />
                  <path d="M78.428 7.4202L77.75 6.43089L82.1195 3.43962L77.2786 1.07855L77.8047 0L84.498 3.26455L78.428 7.4202Z" />
                </svg>
              </a>
            </li>
          </ul>
        </section>
        <Spacer spacer-no="1" />
        <section class="content testimonial">
          <Testimonial :person="person" />
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
import Joke from '~/components/Joke.vue'
import SocialBar from '~/components/SocialBar.vue'
import Spacer from '~/components/Spacer.vue'
import Testimonial from '~/components/Testimonial.vue'
import VueMarkdown from 'vue-markdown'
import Weather from '~/components/Weather.vue'

const client = createClient()

export default {
  components: {
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
        'https://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=zerosandones217&limit=1&api_key='+ process.env.LASTFM_API_KEY + '&format=json'
      ).then(res => res.json())
  },
  created() {
    this.interval = setInterval(() => this.$fetch(), 60000);
  }
}
</script>

<style lang="scss">

.about-me {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-auto-flow: dense;
    grid-gap: var(--grid-gap);
    &__intro {
        grid-column: span 4;
        font-size: var(--step--1);
        color: var(--ff-color);
    }
    &__picture {
        grid-column: 4 / span 1;
        object-fit: cover;
        &--two {
          align-self: center;
          grid-column: 2 / 3;
        }
    }
    &__content {
        padding-bottom: 40px;
        align-self: center;
        color: var(--ff-color);
        &--one {
            grid-template-columns: subgrid;
            display: grid;
            & p {
              padding-bottom: calc(var(--padding-df) * 2);
            }
            & p:first-child  {
              grid-column: 1 / 4;
            }
            & p:nth-child(2) {
              grid-column: 2 / 4;
            }
            & p:nth-child(3) {
              grid-column: 1 / 4;
            }
            & p:nth-child(4) {
              grid-column: 3 / 5;
            }
            & p:last-child {
              padding-bottom: 0;
            }
        }
        &--joke {
            grid-row: 3;
            grid-column: 2 / 4;
            align-self: center;
            & strong {
                display: block;
                margin-bottom: 20px;
            }
        }
        &--lastfm {
            grid-row: 4;
            grid-column: 1/4;
            padding-top: 60px;
            & strong {
                margin-bottom: 20px;
            }
            & img {
              margin: 20px auto;
            }
        }
    }
}

.work {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--grid-gap);
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
        transition: .25s ease-in-out filter;
        &:hover {
            filter: grayscale(0);
        }
        &-wrapper {
            max-height: 850px;
            overflow: hidden;
            grid-column: 1 / 3;
            & a {
              box-shadow: none;
            }
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
        border-bottom: 1px solid var(--clr-fifth);
        &:last-child {
            border-bottom: 0;
        }
    }
    &__link {
        font-weight: var(--fw-base-m);
        color: var(--other-work-link);
        box-shadow: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--padding-df);
        & svg {
          max-width: 50px;
          position: relative;
          transition: transform 270ms cubic-bezier(0.77, 0, 0.175, 1);
          & path {
            fill: var(--other-work-link);
            &:first-child {
              stroke: var(--other-work-link);
              fill: none;
            }
          }
        }
        &:hover {
          box-shadow: none;
          & svg {
            transform: translateX(5px);
          }
      }
    }
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
    padding-left: 40px;
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
  .about-me {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    &__intro {
      grid-column: span 3;
    }
  }
}

@media (max-width: 768px) {
  .about-me {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    &__intro {
      grid-column: 1 / 5;
      grid-row: 1;
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
      &--one {
        & p {
          grid-column: 1 / 5 !important;
        }
      }
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
