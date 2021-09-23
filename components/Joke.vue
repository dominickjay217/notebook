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
      newJoke: '5/4 of people admit they’re bad at fractions.'
    }
  },
  mounted () {
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
