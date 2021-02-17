<template>
    <header class="header">
        <div class="container">
            <h1 class="header__title heading heading--one">
                {{ person.fields.name }}
            </h1>
            <h2 class="header__tagline heading heading--two">
                {{ person.fields.title }}
            </h2>
            <ul class="navigation">
                <li class="navigation__item">
                <a href="" class="navigation__link">About</a>
                </li>
                <span class="dot"></span>
                <li class="navigation__item">
                <a href="" class="navigation__link">Blog</a>
                </li>
                <span class="dot"></span>
                <li class="navigation__item">
                <a href="" class="navigation__link">Contact</a>
                </li>
                <span class="dot"></span>
                <li class="navigation__item">
                <a
                    target="__blank"
                    rel="noopener"
                    href="https://codepen.io/dominickjay217"
                    class="navigation__link"
                >
                    Creative
                </a>
                </li>
            </ul>
        </div>
        <div class="container">
            <div class="hero">
                <span class="hero__tagline">
                “Leave it better than you found it.”
                </span>
                <span class="hero__image">
                <img
                    :src="person.fields.profileImage.fields.file.url + '?w=1200'"
                    :alt="person.fields.profileImage.fields.title"
                />
                </span>
            </div>
        </div>
    </header>

</template>

<script>
export default {
  props: ['person']
}
</script>