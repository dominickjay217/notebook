<template>
  <div>
    <header class="header">
      <div class="wrapper">
        <Navigation />
        <Heading :page-title="page.title" :heading="page.heading" />
      </div>
    </header>
    <main>
      <div class="wrapper">
        <section class="error-page">
          <svg style="position: absolute; width: 0; height: 0;">
            <filter id="borked">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.002 0.008"
                :numOctaves="octaves"
                :seed="seed"
                stitchTiles="stitch"
                result="turbulence"
              />
              <feColorMatrix
                type="saturate"
                values="30"
                in="turbulence"
                result="colormatrix"
              />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 150 -15"
                in="colormatrix"
                result="colormatrix1"
              />
              <feComposite
                in="SourceGraphic"
                in2="colormatrix1"
                operator="in"
                result="composite"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="colormatrix1"
                scale="15"
                xChannelSelector="R"
                yChannelSelector="A"
                result="displacementMap"
              />
            </filter>
          </svg>
          <span style="filter: url(#borked);">You broke it!</span>
          <p>You didn't find what you were looking for did you?</p>
        </section>
      </div>
    </main>
  </div>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
import Navigation from '~/components/Navigation.vue'
import Heading from '~/components/Heading.vue'
import axios from 'axios'

const client = createClient()

export default {
  components: {
    Navigation,
    Heading,
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
      client.getEntries({
        content_type: 'employment',
        order: 'sys.createdAt',
      }),
    ])
      .then(([entries, posts, jobs]) => {
        return {
          person: entries.items[0],
          posts: posts.items,
          jobs: jobs.items,
        }
      })
      .catch(console.error)
  },
  data() {
    return {
      page: {
        title: 'heading--404',
      },
      seed: null,
      octaves: null,
    }
  },
  mounted() {
    const min = Math.ceil(2),
      max = Math.floor(8)
    this.seed = Math.floor(Math.random() * (max - min)) + min
    this.octaves = Math.floor(Math.random() * (max - min)) + min
    return this.seed, this.octaves
    // this.seed = Math.random();
    // this.seed = Math.ceil(this.seed);
    // console.log(this.seed);
    // return this.seed;
  },
  head() {
    return {
      title: '😱 You Broke Me!',
    }
  },
}
</script>

<style lang="scss">
.heading--404 {
  display: none;
}

.error-page {
  grid-column: 1 / span 4;
  text-align: center;
  color: var(--font-color);
  & span {
    display: block;
    text-align: center;
    filter: url('#filter');
    font-size: 8rem;
    font-family: var(--font-family-secondary);
  }
  img {
    max-width: 350px;
    margin: 0 auto 2rem;
    border-radius: 50%;
  }
}
</style>
