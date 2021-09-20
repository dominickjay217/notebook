<template>
  <main>
    <div class="container">
      <section class="content uses">
        <nuxt-content :document="usesPage" />
      </section>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  async asyncData ({ $content }) {
    const usesPage = await $content('uses').fetch()
    return {
      usesPage
    }
  }
}
</script>

<style lang="scss">

.uses a {
  text-decoration: underline;
  text-decoration-color: #E85A4F;
  text-decoration-thickness: 2px;
  font-size: calc(var(--step-1) * 1.05);
  line-height: 1;
}

.uses a:hover {
  text-decoration: none;
}

.uses strong {
    font-size: var(--step-2);
    background-color: transparent;
}

</style>
