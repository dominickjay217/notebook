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
        <section class="resume">
          <div class="resume__content resume__content--tldr">
            <h2>About</h2>
            <vue-markdown>{{ person.fields.longBio }}</vue-markdown>
          </div>
          <div class="resume__content resume__content--skills">
            <h2>Skills</h2>
            <ul>
              <li
                v-for="skill in person.fields.skills"
                :key="skill"
                :to="{ params: { skill: skill } }"
              >
                {{ skill }}
              </li>
            </ul>

            <h2>Tools &amp; Libraries</h2>

            <ul>
              <li
                v-for="tool in person.fields.tools"
                :key="tool"
                :to="{ params: { tool: tool } }"
              >
                {{ tool }}
              </li>
            </ul>
          </div>
          <div class="resume__content resume__content--work">
            <h2>Work Experience</h2>
            <ol>
              <li v-for="job in jobs" :key="job.fields.jobName">
                <div class="work">
                  <h3 class="work__position">
                    {{ job.fields.jobTitle }}
                    <span class="work__company">
                      @ {{ job.fields.jobName }}
                    </span>
                  </h3>
                  <p class="work__date">
                    {{ job.fields.jobDate }}
                  </p>
                  <div class="work__description">
                    <vue-markdown>{{ job.fields.jobDescription }}</vue-markdown>
                  </div>
                  <!-- eslint-disable-next-line prettier/prettier -->
                  <vue-markdown class="work__testimonial">{{ job.fields.jobTestimonial }}</vue-markdown>
                </div>
              </li>
            </ol>
          </div>
          <div class="resume__content resume__content--education">
            <h2>Education</h2>
            <div class="education">
              <h3 class="education__certification">
                Bachelor's Degree (2:1)
                <span class="education__location">
                  @ Bournemouth University
                </span>
              </h3>
              <p class="work__date">
                2014 - 2015
              </p>
            </div>
            <div class="education">
              <h3 class="education__certification">
                Foundation Degree (Computing with Networking; Merit)
                <span class="education__location">
                  @ Bournemouth University
                </span>
              </h3>
              <p class="work__date">
                2012 - 2014
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import Navigation from '~/components/Navigation.vue'
import Heading from '~/components/Heading.vue'
import VueMarkdown from 'vue-markdown'

const client = createClient()

export default {
  components: {
    Navigation,
    Heading,
    VueMarkdown,
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
        title: 'heading--resume',
        heading: 'Resume',
      },
      longstory: true,
    }
  },
  methods: {
    showdata: function () {
      this.longstory = !this.longstory
    },
  },
  head() {
    return {
      title:
        this.person.fields.name + ' Has A Very Professional Looking Resume',
    }
  },
}
</script>

<style lang="scss">
.resume {
  padding-top: 3em;
  font-size: 1em;
  line-height: var(--font-line-height);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 1/5;
  grid-gap: 40px;
  grid-template-areas: 'tldr tldr tldr' 'work work skills' 'education education .';
  grid-template-rows: minmax(250px auto) auto;
  h2 {
    font-family: var(--font-family-secondary);
    position: relative;
    display: inline-block;
    &::before {
      content: '';
      height: 2px;
      width: calc(50% + 20px);
      position: absolute;
      right: -20px;
      bottom: 0px;
      background-color: currentColor;
      transform: rotate(-2deg);
    }
  }
}

.resume__content {
  font-family: var(--font-family);
  color: var(--font-color);
  &--tldr {
    grid-area: tldr;
    font-size: 1.15rem;
  }
  &--work {
    grid-area: work;
    & ol {
      margin: 0;
      padding: 0;
      list-style: none;
      counter-reset: work-counter;
    }
  }
  &--education {
    grid-area: education;
  }
  &--skills {
    font-size: 1rem;
    grid-area: skills;
    & ul {
      list-style: none;
      & li {
        position: relative;
      }
      & li::before {
        content: '-';
        font-family: var(--font-family-secondary);
        transform: rotate(5deg);
        position: absolute;
        top: -0.25em;
        left: -1em;
        font-size: 1.25rem;
      }
    }
  }
}

.work {
  margin-bottom: 80px;
  position: relative;
  counter-increment: work-counter;
  &:last-child {
    margin-bottom: 40px;
  }
  &::before {
    content: '0' counter(work-counter);
    position: absolute;
    font-size: 5rem;
    left: -7rem;
    opacity: 0.1;
    font-family: var(--font-family-secondary);
    top: 1rem;
    transform: rotate(-2deg);
  }
  &:not(:last-child)::after {
    content: '-';
    font-family: var(--font-family-secondary);
    transform: rotate(-5deg);
    position: relative;
    font-size: 3rem;
    text-align: center;
    width: 100%;
    display: block;
    line-height: 1;
  }
  &__date {
    font-weight: var(--font-weight-bold);
    opacity: 0.5;
    font-size: 0.875rem;
  }
  &__position,
  &__company {
    display: flex;
    align-items: center;
  }
  &__company {
    padding: 0 0 0 10px;
  }
  &__description {
    margin-bottom: 20px;
  }
  &__testimonial {
    padding: 20px 60px;
    position: relative;
    margin: 0;
    font-style: italic;
    &::before,
    &::after {
      font-family: permanent-marker, sans-serif;
      font-family: var(--font-family-secondary);
      position: absolute;
      font-size: 4rem;
      color: #fe9948;
      color: var(--color-third);
      opacity: 0.5;
      font-style: normal;
    }
    &::before {
      content: '{';
      top: calc(50% - 40px);
      left: -10px;
      transform: translateY(-50%) rotate(5deg);
    }
    &::after {
      content: '}';
      top: calc(50% + 10px);
      right: -10px;
      transform: translateY(-50%) rotate(10deg);
    }
    &:empty {
      display: none;
    }
    & strong {
      font-family: var(--font-family-secondary);
      font-style: normal;
      font-weight: normal;
    }
  }
}

.work__description ul {
  list-style: none;
  & li {
    position: relative;
    margin-bottom: 0.5em;
    &::before {
      content: '-';
      font-family: var(--font-family-secondary);
      transform: rotate(5deg);
      position: absolute;
      top: -0.25em;
      left: -1em;
      font-size: 1.25rem;
    }
  }
}

.education {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__certification {
    max-width: 75%;
    font-size: 1rem;
  }
}

@media (max-width: 992px) {
  :root {
    --grid-gap: 15px;
  }
}

@media (max-width: 640px) {
  .resume {
    grid-template-areas: 'tldr tldr tldr' 'work work work' 'skills skills skills' 'education education education';
  }
  // .resume__image {
  //     max-width: 250px;
  //     margin: 0 auto;
  //     grid-column: 1 / span 3;
  //     top: 0;
  //     left: 25px;
  // }

  .work {
    margin-bottom: 0;
  }
}

@media print {
  .resume {
    grid-gap: 0;
    &::after {
      content: 'A much nicer version of this resume can be found at dominickjay.com - this is just a professional version for print';
      grid-column: 1 / 5;
      text-align: center;
      font-weight: var(--font-weight-bold);
      padding: 20px 0;
      background-color: #333;
      color: #fff;
    }
    & * {
      grid-column: 1 / 5;
      grid-row: auto;
    }
    & h2 {
      font-family: var(--font-family);
    }
    & h2::before {
      content: none;
    }

    & .work::after {
      content: none;
    }

    & ol {
      & li::before {
        content: none;
      }
    }

    .resume__content--skills {
      grid-row: 4;
      margin-bottom: 40px;
    }

    .work,
    .resume__content--education {
      border-bottom: 1px solid currentColor;
      padding-bottom: 0;
      padding: 20px 0;
      margin-bottom: 0;
    }

    .work__testimonial {
      padding: 20px 0;
      & strong {
        font-family: var(--font-family);
        font-weight: var(--font-weight-bold);
      }
    }

    .work__description ul {
      list-style: disc;
    }

    .work__testimonial::before,
    .work__testimonial::after {
      content: none;
    }
  }

  .header,
  .navigation,
  .social-bar,
  .footer {
    display: none;
  }
}
</style>
