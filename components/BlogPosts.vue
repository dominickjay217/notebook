<template>
    <div>
        <div v-if="isHome">
            <ul class="blog-posts">
                <li
                    v-for="post in posts.slice(0, 3)"
                    :key="post.fields.title"
                    class="blog-posts__item"
                >
                    <div class="post">
                        <time class="post__date">
                            <span>
                                {{ new Date(post.fields.publishDate).getDate() }}
                            </span>
                            /
                            <span>
                                {{ new Date(post.fields.publishDate).getMonth() }}
                            </span>
                        </time>
                        <span class="post__title">{{ post.fields.title }}</span>
                        <nuxt-link
                        :to="{
                            name: 'blog-slug',
                            params: {
                            slug: post.fields.slug,
                            },
                        }"
                        class="post__link"
                        >
                        Read post
                        </nuxt-link>
                    </div>
                </li>
            </ul>
        </div>
        <div v-else>
            <ul class="blog-posts">
                <li
                    v-for="post in posts"
                    :key="post.fields.title"
                    class="blog-posts__item"
                >
                    <div class="post">
                        <time class="post__date">
                            <span>
                                {{ new Date(post.fields.publishDate).getDate() }}
                            </span>
                            /
                            <span>
                                {{ new Date(post.fields.publishDate).getMonth() }}
                            </span>
                        </time>
                        <span class="post__title">{{ post.fields.title }}</span>
                        <nuxt-link
                        :to="{
                            name: 'blog-slug',
                            params: {
                            slug: post.fields.slug,
                            },
                        }"
                        class="post__link"
                        >
                        Read post
                        </nuxt-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: ['posts'],
  computed: {
    isHome() {
      return this.$route.name === 'index'
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &__link {
    text-decoration: none;
    font-weight: 700;
    color: var(--color-fourth);
    text-align: center;
    width: 100%;
    display: block;
    padding: 20px 0;
    &:hover {
      text-decoration: underline;
    }
  }
}

.blog-posts {
  list-style: none;
  padding: 0;
  margin: 0;
  &__item {
    padding: 40px 0;
    border-bottom: 1px solid var(--color-secondary);
    &:last-child {
      border-bottom: 0;
    }
  }
}

.post {
  font-size: 1.25rem;
  display: flex;
  &__title {
    text-align: left;
    font-weight: 700;
  }
  &__link {
    margin-left: auto;
    text-decoration: none;
    font-weight: 700;
    color: var(--color-fourth);
    font-size: 1.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
  &__date {
    display: flex;
    justify-content: flex-start;
    margin-right: 40px;
    min-width: 50px;
    & span {
      font-weight: 700;
    }
    & span:last-child {
      opacity: 0.5;
    }
  }
}
</style>
