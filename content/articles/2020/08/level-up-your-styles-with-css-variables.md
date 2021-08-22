---
title: "Level Up Your Styles With CSS Variables"
description: Let's do a quick dive into CSS variables and see what they can offer us.
date: 2021-08-17
tags:
  - CSS
  - Javascript
---


## So, What are CSS Variables?

CSS variables - otherwise known as custom properties - are specific values that can be reused throughout a document, similar to how variables are used in other programming languages. Let's see a quick example and break the parts down.

## Basic Usage

```css
    :root {
      --primaryColour: hsla(4, 99%, 66%, 1);
      --backgroundColour: hsla(207, 100%, 96%, 1);
    }

    main {
      background-color: var(--backgroundColour);
    }

    h1 {
      font-family: 'Atkinson Hyperlegible', sans-serif;
      letter-spacing: -0.5px;
      font-size: 3rem;
      color: var(--primaryColour);
      text-align: center;
    }
```

There. Nice, quick example there - you can see this working below.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Variables - Basic Usage" src="https://codepen.io/dominickjay217/embed/abWMvGp?default-tab=&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dominickjay217/pen/abWMvGp">
  CSS Variables - Basic Usage</a> by Dom Jay (<a href="https://codepen.io/dominickjay217">@dominickjay217</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Now we've got that up, let's see how this is put together, so...

![Break It Down Gif](//images.contentful.com/d44h62nxqp3d/4RFimCeEtyGe4303IpqolX/b7c31216699d05d4247d1d9b7789a965/break-it-down.gif#gif)

Firstly, the `:root` pseudo-class being used at the top of the example? That represents the root of the document tree (typically the `html` element) and is used to define custom properties in a way that will allow them to be used globally across your site. Neat! They can be defined elsewhere, but let's not go into that right now.

Second, CSS custom properties are always prefixed with a `--`. Similar to class names and IDs, there's no specific naming convention, so the world is your oyster and there is lots of different opinions on the best way.

After setting up the custom properties in `:root`, they can then be used within any CSS selector by using them alongside the `var()` function, which is what is being shown in the `background-color` and `color` properties in the example above.

## Fallbacks

If a custom property has been set, __but__ is actually invalid or just hasn't been defined, for example, in both these cases;

```css
:root {
  --primaryColour: hsla(4, 99%, 66%, 1);
  --backgroundColour: hsla(207, 100%, 96%, 1);
  --secondaryColour: hsla(155, 61%, 51%, 1);
  --secondaryBackgroundColour: hsla(343, 6%, 21%, 1);
}

h2 {
  color: var(--thisDoesntExist, lightgreen);
  background-color: var(--thisDoesntExist, black);
}
```

I've declared my `secondaryColour` and `secondaryBackgroundColour` in `:root`, but for my `h2` element I've used a different custom property name (aptly titled "This Doesn't Exist" for obvious reasons). Notice, that rather the function closing after `--thisDoesntExist`, another parameter is passed. __That__ is our fallback colours.

<iframe height="600" style="width: 100%;" scrolling="no" title="CSS Variables - Basic Usage" src="https://codepen.io/dominickjay217/embed/PomLaBp?default-tab=&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dominickjay217/pen/PomLaBp">
  CSS Variables - Basic Usage</a> by Dom Jay (<a href="https://codepen.io/dominickjay217">@dominickjay217</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Support?

Support for CSS custom properties is excellent, you would have to be using a relatively old browser at this time of writing to __not__ be able to use them.

![Can I use Support tables for CSS Custom Properties](//images.contentful.com/d44h62nxqp3d/2CacnERymSW3hpuUaRV0ug/0715640040f5f3b42b137f459d97e4c3/Screenshot_2021-08-12_at_15-51-50_CSS_Variables__Custom_Properties__Can_I_use_Support_tables_for_HTML5__CSS3__etc.png)

*Source:* [CanIUse](https://caniuse.com/css-variables "CanIUse link for CSS Variable support")

## Context Changing

One of the benefits of custom properties, is that they can be changed based on the context of the element it is assigned to.

<iframe height="600" style="width: 100%;" scrolling="no" title="CSS Variables - Basic Usage with Fallbacks" src="https://codepen.io/dominickjay217/embed/eYWXPeL?default-tab=&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dominickjay217/pen/eYWXPeL">
  CSS Variables - Basic Usage with Fallbacks</a> by Dom Jay (<a href="https://codepen.io/dominickjay217">@dominickjay217</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

In this example, the first h2 element we see uses the custom properties for `color` and `background-color`;

  color: var(--changeColour, hotpink);
  background-color: var(--changeBgColour, black);

But, they are not defined yet so they use the fallback colours instead. On the second h2 element, we then use the `.add-styles` class to define these custom properties of `changeColour` and `changeBgColour`, which in turn, allows this element to fullfil where they were originally being used, rather than using the fallback. Clever, eh? A great example I've seen of this is [this post](https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode/ "A post by Andy Bell for User Controlled Dark or Light Mode") by Andy Bell, where it is being used within the `prefers-color-scheme` media query.

## Using With Javascript

<iframe height="350" style="width: 100%;" scrolling="no" title="CSS Variables - Basic Usage with Fallbacks and Context Changing" src="https://codepen.io/dominickjay217/embed/RwVmGQB?default-tab=&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dominickjay217/pen/RwVmGQB">
  CSS Variables - Basic Usage with Fallbacks and Context Changing</a> by Dom Jay (<a href="https://codepen.io/dominickjay217">@dominickjay217</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

In this example, inline custom properties are set to allow new values for the `max-width` and `color` properities. While `max-width` uses a fallback of 550px, the `--maxWidth` value is not passed anywhere in the stylesheet, allowing it to differ from the example in the previous section. With the value of the `color` property, it is not using a fallback, or a different custom property. Instead, it is overwriting the `--primaryColour` value with a new color, and using CSS specificity to allow for the color to be changed.

## Conclusion

CSS custom properties are a great way to keep your styles controlled and consistent (because who wants to rely on a Find and Replace when a new branding colour comes along), and allows for *less* CSS to be written overall.

Hopefully this was helpful, but if you would like to know more about CSS custom properties, you might want to take a look at these links;


[MDN: Using Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

[A Complete Guide to Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties)
