---
title: "Using a Local Server in an Angular Project"
description: "We can create a basic local server of dummy data to be consumed into our Angular application."
date: 2021-09-09
tags:
  - Angular
  - Javascript
---


## Why would we need this?

One "real-life" scenario that could occur; lack of an API endpoint that could be called - maybe it's still in development - but waiting for that to finish before getting it into the front-end side of the application isn't an option.

## Let's Get Started!

I've set up a repo [here](https://github.com/dominickjay/local-json-server) with a basic out-of-the-box Angular application, with [Angular Material](https://material.angular.io/) installed for styling. Normally I would do my own, but we're not focusing on that here, so happy to lean on a framework for this one.

## Installing from NPM/Yarn

We're going to install the `json-server` package from npm using the `npm install -g json-server` command, or `yarn add json-server` if you use Yarn. Installing this through npm gave me the latest version, which is set as `^0.16.3` at this time of writing.

## Setting up the JSON

The [Getting Started](https://www.npmjs.com/package/json-server#getting-started) section on NPM seems to hint at making a `db.json` file in the root of our project, but we're going to seperate it out into it's own `/server` folder. I've cobbled together a quick bit of JSON to structure something here;

```json
{
    "albums": [
      {
        "id": 1,
        "title": "The Fragile",
        "band": "Nine Inch Nails",
        "genre": "Industrial Metal",
        "rating": "5/5"
      },
      {
        "id": 2,
        "title": "Kid A",
        "band": "Radiohead",
        "genre": "Alternative Rock",
        "rating": "4/5"
      },
      {
        "id": 3,
        "title": "White Pony",
        "band": "Deftones",
        "genre": "Alternative Metal",
        "rating": "4/5"
      }
    ]
  }
```

1. Lukas Ruebbelke uses `npm run server:all` to use `ng serve` and `npm run server` concurrently - creates local host of project and server on different ports.

Hopefully this was helpful, but if you would like to know more about CSS custom properties, you might want to take a look at these links;


 [json-server - npm](https://www.npmjs.com/package/json-server)

 [How to create a local API server & REST API for testing](https://medium.com/chaya-thilakumara/how-to-create-a-local-api-server-rest-api-for-testing-945bbb2d31b7)

 [The repo used in this post](https://github.com/dominickjay/local-json-server)
