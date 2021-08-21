const type = 'website'
const url = 'https://dominickjay.com'
const title = 'Dominick Jay - Creative Front End Developer'
const description = 'Dominick Jay is an experienced creative Front-End Developer from Plymouth, UK, that specializes in fun, creative solutions.'
const mainImage = 'https://res.cloudinary.com/dominickjay217/image/upload/v1629481799/main-image.png'
const twitterCard = 'summary_large_image'

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || url
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.mainImage) || mainImage
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || url
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || title
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.mainImage) || mainImage
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: (meta && meta.twitterCard) || twitterCard
    }
  ]
}
