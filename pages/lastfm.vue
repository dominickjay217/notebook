<template>
  <div>
    <SocialBar :person="person" />
    <HeaderBar :person="person" />
    <BannerBar :person="person" />
    <main>
      <div class="container">
        <section class="content post">
            <p v-if="$fetchState.pending">Fetching music information...</p>
            <p v-else-if="$fetchState.error">Either an error occurred or I've got Disney playing</p>
            <div v-else>
                <strong>{{ mountains.recenttracks.track[0].name }}</strong> by
                <strong>{{ mountains.recenttracks.track[0].artist['#text'] }}</strong>
            </div>
        </section>
      </div>
      <BannerBar :person="person"  />
    </main>
    <ContactBar :person="person"/>
    <FooterBar />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import HeaderBar from '~/components/HeaderBar.vue'
import BannerBar from '~/components/BannerBar.vue'
import ContactBar from '~/components/ContactBar.vue'
import SocialBar from '~/components/SocialBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import axios from 'axios'
const client = createClient()

export default {
  components: {
    HeaderBar,
    BannerBar,
    SocialBar,
    ContactBar,
    FooterBar,
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
  data(){
   return{
    mountains: []
   }
  },
  async fetch(){
   this.mountains = await fetch(
        'https://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=zerosandones217&limit=1&api_key=86a5b41a85035739e32c576f027c4765&format=json'
      ).then(res => res.json())
  }
}
</script>

<style lang="scss" scoped>
.post {
  &__intro {
    display: block;
    padding: 20px 0 0;
  }
  &__bodytext {
    padding: 20px 0;
  }
}
</style>