<template>
  <main>
    <div class="container">
      <section class="content about-me">
        <ol
          class="about-me__list"
        >
          <li><strong>Hi 👋. My name’s Dom, I’m a Front End Developer, a guitarist and comic book enthusiast, and a Dad to two awesome kids. I love making fun, creative solutions. This is my portfolio, which I’ll use as an ongoing playground and blog to keep using all sorts of tech, designs and experimentation.</strong></li>
          <li>I’ve been in the industry for 5 years now under many different titles; Junior Web Developer, PHP Developer, Front End Developer, Space Cowboy and (currently) as a Software Engineer. From companies that have clients in local councils to theatre productions, I’ve been providing quality solutions for both. You can read my CV here</li>
          <li>I’m Dorset-born, but traded coast for coast to live in Plymouth. I play the guitar, but have an unkept secret with wanting to play the drums. If you’d like to get in touch with me then twitter is your best channel.</li>
          <li>I’m proficient in HTML5, CSS3 and JavaScript, and have worked in amongst various backend environments. I have a good working knowledge of build systems such as Gulp and post-processors such as SASS. I also have good working knowledge of version control systems such as Git and SVN. Experience building websites that are SEO friendly, performance optimized and accessible to a AA/WCAG 2.1 standard.</li>
          <li>I am self-motivated and can self-manage to complete tasks and meet deadlines. I care about and take enormous pride in the work that is produced, and have a keen eye for details. I have excellent communication skills with clients and colleagues, exceptional commitment, professionalism and enthusiasm.</li>
        </ol>
        <!-- <vue-markdown class="about-me__intro">{{ about.fields.aboutIntro }}</vue-markdown> -->
        <!-- <vue-markdown class="about-me__content about-me__content--one">{{ about.fields.aboutSectionOne }}</vue-markdown> -->
        <div class="about-me__content about-me__content--joke">
          <div>
            <strong>
              I love dad jokes, how about one of them instead?
            </strong>
          </div>
          <Joke />
        </div>
      </section>
      <Spacer spacer-no="2" />
      <section class="content testimonial">
        <Testimonial />
      </section>
    </div>
  </main>
</template>

<script>

export default {
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
    this.interval = setInterval(() => this.$fetch(), 60000)
  }
}
</script>

<style lang="scss">
.lastfm-info {
  & strong {
    margin-bottom: 20px;
    font-size: 1.25rem;
  }
}

.about-me {
  font-size: var(--step-0);
  &__list {
    padding: 0;
    padding-left: 0;
    margin: 40px 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-template-rows: repeat(4, min-content);
    grid-gap: var(--grid-gap);
    counter-reset: section;
    list-style: none;
    margin-left: 0;
    & li {
      position: relative;
      margin-left: 35px;
      grid-column: 2 / 3;
      &::before {
        counter-increment: section;
        content: "0" counter(section);
        position: absolute;
        font-family: var(--ff-alt-alpha);
        font-weight: var(--fw-base-lg);
        opacity: 0.35;
        font-size: var(--step-5);
        left: -60px;
        top: -25px;
      }
    }
    & li:first-child {
      font-size: var(--step-2);
      position: sticky;
      margin-left: 0;
      padding-right: 25px;
      margin-top: -10px;
      top: 20px;
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      &::before {
        content: none;
      }
    }
  }
  &__content--joke {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-template-rows: repeat(2, minmax(50px, 1fr));
    padding: 40px 0;
    grid-gap: var(--grid-gap);
    div:first-child {
      font-size: var(--step-2);
      grid-column: 1 / 3;
    }
    & #joke {
      grid-column: 1 / 3;
    }
  }
}

@media (max-width: 992px) {
  .about-me__list {
      grid-template-columns: repeat(1, minmax(150px, 1fr));
      & li:first-child {
        grid-column: 1 / 3;
        position: relative;
        margin-bottom: 40px;
      }
      & li {
        grid-column: 1 / 3;
      }
  }

  .about-me__list li::before {
    left: -40px;
  }
}

@media (max-width: 992px) {
  .about-me {
    grid-template-columns: repeat(1, 1fr);
  }
}

.lastfm-info {
  display: flex;
  align-items: center;
  &__imagewrapper {
    position: relative;
    padding-left: 40px;
  }
  & img:last-of-type {
    position: absolute;
    top: 0;
    filter: blur(24px);
    transform: rotate(4deg);
  }
  & .lastfm-info__image {
    transform: rotate(4deg);
    z-index: 1;
    position: relative;
  }
}

@media (max-width: 1024px) and (orientation: landscape) {
  .about-me {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    &__intro {
      grid-column: span 3;
    }
  }
}

@media (max-width: 768px) {
  .about-me {
    padding-top: 0;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    &__intro {
      grid-column: 1 / 5;
      grid-row: 1;
    }
    &__picture {
      grid-column: 1 / 4;
      grid-row: 1;
      padding-top: 0;
      margin: 0 auto;
      &--two {
        grid-row: 3;
      }
    }
    &__content {
      grid-column: 1 / 5;
      &--one {
        & p {
          grid-column: 1 / 5 !important;
        }
      }
    }
    &__content:nth-child(3) {
      grid-row: 4;
    }
    &__content:nth-child(4) {
      grid-row: 5;
    }
    &__content--joke {
      grid-row: 6;
    }
    &__content--lastfm {
      grid-row: 7;
    }

  }

  .lastfm-info {
    align-items: flex-start;
    &__imagewrapper {
      padding-top: 10px;
      max-width: 250px;
      width: 100%;
    }
    p {
      max-width: 350px;
    }
  }
}

@media (max-width: 640px) {
  .lastfm-info {
    &__imagewrapper {
      display: none;
    }
  }
  .about-me__content--lastfm {
    padding: 0 0 20px;
  }
}

</style>
