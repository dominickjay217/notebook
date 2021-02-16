<template>
  <div class="blog-entry">
    <div class="blog-entry__content">
      <nuxt-link
        :to="{ name: 'blog-slug', params: { slug: post.fields.slug } }"
        class="blog-entry__title"
      >
        {{ post.fields.title }}
      </nuxt-link>
      <p class="blog-entry__summary">{{ post.fields.description }}</p>
      <time class="tiny">
        {{ new Date(post.fields.publishDate).toDateString() }}
      </time>
    </div>
    <!-- <picture>
      <img
        :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=350&h=196'"
        :srcset="`${post.fields.heroImage.fields.file.url}?w=100&h=100&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=100&h=100&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=100&h=100&fit=fill 2000w`"
        size="100vw"
        :alt="post.fields.heroImage.fields.description"
        class="blog-entry__image"
      />
    </picture> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      default: 'This is a post',
      type: String,
    },
  },
}
</script>
