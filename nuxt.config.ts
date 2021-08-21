import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  head: {
    title: 'Dominick Jay | Front End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { hid: 'og:title', property: 'og:title', content: 'Dominick Jay - Creative Front End Developer'},
      { hid: 'og:image', property: 'og:image', content: '/images/card-image.png'},
      { hid: 'twitter:title', property: 'twitter:title', content: 'Dominick Jay - Creative Front End Developer'},
      { hid: 'twitter:image', property: 'twitter:image', content: '/images/card-image.png'},
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }
    ]
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios'
  ],
  components: true,
  hooks: {
    'content:file:beforeInsert': async (document, database) => {
      if (document.extension === '.json' && document.body) {
        const data = await database.markdown.toJSON(document.body);

        Object.assign(document, data);
      }
    }
  },
  content: {
    nestedProperties: ['categories.slug'],
    extendParser: {
      '.custom': file => ({ body: file.split('\n').map(line => line.trim()) })
    },
  },
  css: ['@/static/css/remedy.css'],
  target: 'static'
};

export default config;
