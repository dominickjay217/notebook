<template>
  <main>
    <div class="container">
      <section class="content now">
        <nuxt-content :document="markdown" />
        <strong>My most recently played song/podcast</strong> episode is <a :href="music.recenttracks.track[0].url">
          {{ music.recenttracks.track[0].name }}
        </a> by {{ music.recenttracks.track[0].artist['#text'] }}
        <p>This page is inspired by Derek Sivers
          <a href="https://nownownow.com/">Now project</a>.
        </p>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  async asyncData ({ $content }) {
    const markdown = await $content('now-page').fetch()
    return {
      markdown
    }
  },
  data () {
    return {
      music: []
    }
  },
  async fetch () {
    this.music = await fetch(
      'https://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=zerosandones217&limit=1&api_key=' + process.env.LASTFM_API_KEY + '&format=json'
    ).then(res => res.json())
  },
  created () {
    setInterval(() => this.$fetch(), 60000)
  }
}
</script>

<style lang="scss">

.now a {
  text-decoration: underline;
  text-decoration-color: #E85A4F;
  text-decoration-thickness: 2px;
  font-size: calc(var(--step-1) * 1.05);
  line-height: 1;
}

.now a:hover {
  text-decoration: none;
}

.now strong {
    font-size: var(--step-2);
}

</style>
