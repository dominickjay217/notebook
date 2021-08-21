<template>
  <div
    id="joke"
  >
    {{ newJoke }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      newJoke: null
    }
  },
  mounted () {
    // This needs improving/refactoring to use fetch()
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json'
        }
      })
      .then((response) => {
        this.newJoke = response.data.joke
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>
