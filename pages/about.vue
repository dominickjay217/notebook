<template>
  <div>
    <SocialBar :person="person" />
    <HeaderBar :person="person" />
    <BannerBar :person="person" />
    <main>
      <div class="container">
        <section class="content about">
            <vue-markdown class="about__intro">{{ about.fields.aboutIntro }}</vue-markdown>
            <img
                class="about__picture"
                :src="person.fields.profileImage.fields.file.url + '?w=1200'"
                :alt="person.fields.profileImage.fields.title"
            />
            <vue-markdown class="about__content about__content--one">{{ about.fields.aboutSectionOne }}</vue-markdown>
            <vue-markdown class="about__content about__content--two">{{ about.fields.aboutSectionTwo}}</vue-markdown>
            <div class="about__content about__content--joke">
                <strong>I love dad jokes, how about one of them instead?</strong>
                {{ newJoke }}
            </div>
            <div class="about__content about__content--lastfm">
              <p>The last song I listened to was
                <a
                  target="_blank"
                  relopener="noopener"
                  :href="lastfmSongUrl">
                  <strong>{{ lastfmSong }}</strong>
                  by
                  <strong>{{ lastfmArtist }}</strong>
                  <img :src="lastfmArtwork" alt="">
                </a>
              </p>
            </div>
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
        <section class="content work">
            <h2 class="content__heading heading heading--two">Featured Work</h2>
            <div class="work__image-wrapper">
              <a :href="about.fields.featuredWorkUrl"
                  target="_blank"
                  relopener="noopener">
                  <img
                      class="work__image"
                      :src="about.fields.featuredWork.fields.file.url"
                      :alt="about.fields.featuredWork.fields.title"
                  >
                </a>
            </div>
            <h2 class="content__heading heading heading--two">Other Work</h2>
            <ul class="other-work__list">
                <li
                    class="other-work__item"
                    v-for="otherWork in about.fields.workLink"
                    :key="otherWork.fields.snippetName"
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
          <Testimonial :person="person" />
        </section>
      </div>
      <BannerBar :person="person" />
    </main>
    <ContactBar :person="person" />
    <FooterBar />
    <!-- <code>{{ person.fields }}</code> -->
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import HeaderBar from '~/components/HeaderBar.vue'
import BannerBar from '~/components/BannerBar.vue'
import Testimonial from '~/components/Testimonial.vue'
import SocialBar from '~/components/SocialBar.vue'
import ContactBar from '~/components/ContactBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import VueMarkdown from 'vue-markdown'
import axios from 'axios'

const client = createClient()

export default {
  components: {
    HeaderBar,
    BannerBar,
    Testimonial,
    SocialBar,
    ContactBar,
    FooterBar,
    VueMarkdown,
  },
  data() {
    return {
      newJoke: null,
      currentTrack: {},
      lastfmArtist: localStorage.getItem('artistInfo'),
      lastfmSong: localStorage.getItem('songInfo'),
      lastfmSongUrl: localStorage.getItem('songInfoUrl'),
      lastfmArtwork: localStorage.getItem('albumArtwork')
    }
  },
  mounted() {
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        this.newJoke = response.data.joke
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get('https://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=zerosandones217&limit=1&api_key=86a5b41a85035739e32c576f027c4765&format=json', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        this.music = response.data.recenttracks.track
        console.log(this.music[0].image[0]['#text'])
        localStorage.setItem('artistInfo', this.music[0].artist['#text'])
        localStorage.setItem('songInfo', this.music[0].name)
        localStorage.setItem('songInfoUrl', this.music[0].url)
        localStorage.setItem('albumArtwork', this.music[0].image[3]['#text'])
      })
      .catch((error) => {
        console.log(error)
      })
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
}
</script>

<style lang="scss" scoped>

.about {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 20px;
    &__intro {
        grid-column: 1 / 7;
        grid-row: 1;
    }
    &__picture {
        padding-top: 50px;
        grid-column: 7 / 10;
        grid-row: 1 / 3;
    }
    &__content {
        font-size: 1rem;
        &--one {
            grid-row: 2;
            grid-column: 1 / 5;
        }
        &--two {
            grid-row: 3;
            grid-column: 2 / 7;
        }
        &--joke {
            grid-row: 5;
            grid-column: 4 / 9;
            & strong {
                display: block;
                margin-bottom: 20px;
            }
        }
        &--lastfm {
            grid-row: 6;
            grid-column: 3 / 9;
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

.work {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
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

@media (max-width: 620px) and (orientation: portrait) {
  .about {
    &__intro {
      grid-column: 1 / 10;
      grid-row: 2;
    }
    &__picture {
      grid-column: 3 / 8;
      grid-row: 1;
      padding-top: 0;
    }
    &__content {
      grid-column: 1 / 10;
    }
    &__content:nth-child(3) {
      grid-row: 3;
    }
    &__content:nth-child(4) {
      grid-row: 4;
    }

  }

}



</style>
