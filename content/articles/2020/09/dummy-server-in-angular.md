---
title: "Using a Local Server in an Angular Project (Part 1)"
description: "Part 1 of a series where we create a basic local server of dummy data and feed it to our Angular application."
date: 2021-09-09
tags:
  - Angular
  - Javascript
---


## Why would we need this?

One "real-life" scenario that could occur; lack of an API endpoint that could be called - maybe it's still in development - but waiting for that to finish before getting it into the front-end side of the application isn't an option.

## Let's Get Started!

I've set up a branch on a repo [here](https://github.com/dominickjay/local-json-server/tree/01---Set-up-the-local-development-server) with a basic out-of-the-box Angular application, with [Angular Material](https://material.angular.io/) installed for styling. Normally I would do my own, but we're not focusing on that here, so happy to lean on a framework for this one.

## Installing from NPM/Yarn

We're going to install the `json-server` package from npm using the `npm install -g json-server` command, or `yarn add json-server` if you use Yarn. Installing this through npm gave me the latest version, which is set as `^0.16.3` at this time of writing.

## Setting up the JSON

The [Getting Started](https://www.npmjs.com/package/json-server#getting-started) section on NPM seems to hint at making a `db.json` file in the root of our project, but we're going to seperate it out into it's own `server` folder. I've cobbled together a quick bit of JSON to structure something here;

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

## Starting the Server

Now we've got our dummy JSON at `server/db.json`, we can add a command into the `package.json` file to start the server up. This command should be `"server": "json-server --watch server/db.json"`, but the `server` text can be changed to whatever is considered appropriate.

<aside class="info">

  **FYI** - As I was working on this, the original attempt at running this command didn't work. Due to this site running locally on port 3000, and the local server attempting to do the same (as it's default), I needed to add the following flag to the command in the `package.json` file: `--port 3004`. This means that the whole command now reads as `json-server --watch server/db.json --port 3004`. I'm going to continue to reference this port number change throughout the rest of the post.

</aside>

After running this command, we can access the data in our server at `http://localhost:3004/albums`!

On from this, I've tended to change the command further based on what [Lukas Ruebbelke](https://twitter.com/simpulton?lang=en) has setup in his [Angular course](https://frontendmasters.com/courses/angular-9/). This meant creating a new command that starts both the local Angular application and the local server by adding `"server:all": "concurrently \"npm run server\" \"ng serve\""` to the package json. **Do not** replace the original `server` command. This runs both scripts one after another, using the [Concurrently](https://www.npmjs.com/package/concurrently) npm package.

As it's Part 1, actually *getting* the data into an Angular application will be involved in the next post. But this was a good start into how it can be setup at the beginning stages.

Hopefully this was helpful, but if you would like to know more about what you can do with the json-server, you might want to take a look at these links;


 [json-server - npm](https://www.npmjs.com/package/json-server)

 [How to create a local API server & REST API for testing](https://medium.com/chaya-thilakumara/how-to-create-a-local-api-server-rest-api-for-testing-945bbb2d31b7)

 [The repo used in this post](https://github.com/dominickjay/local-json-server/tree/01---Set-up-the-local-development-server)
