const https = require("https");

async function getPosts() {
  return new Promise((resolve, reject) => {
    const query = `
    query {
        blogPostCollection {
            items {
            sys {
                firstPublishedAt
                id
            }
            title
            description
            }
        }
    }
    `;

    const options = {
      protocol: "https:",
      hostname: "graphql.contentful.com",
      path: "/content/v1/spaces/d44h62nxqp3d",
      method: "POST",
      headers: {
        Authorization: "Bearer eeqGkkQqdNdxsPE8vxGK2yBjZctkKYf2w6vb6Gr3IEg",
        "Content-Type": "application/json",
      },
    };

    let posts = "";

    const req = https.request(options, (res) => {
      res.on("data", (data) => {
        posts += data;
      });

      res.on("end", () => {
        const parsedPosts = JSON.parse(posts);
        resolve(parsedPosts.data.blogPostCollection.items);
      });
    });

    req.on("error", (e) => {
      console.error(e);
    });

    req.write(JSON.stringify({ query }));
    req.end();
  });
}

function buildRssItems(items) {
  const truncateLength = 44;

  return items
    .map((item) => {
      const hasText = item.title;
      const hasLink = item.link;
      const titleMaybeTruncated = hasText && item.title.length > truncateLength ? "..." : "";
      const title = hasText
        ? `${item.title.slice(0, truncateLength)}${titleMaybeTruncated}`
        : "New post";
      const maybeLink = hasLink ? ` - ${item.link}` : "";
      const description = hasText ? `${item.description}${maybeLink}` : "";

      return `
        <item>
        <title>${title}</title>
        <description>${description}</description>
        <author>Dom Jay</author>
        <link>https://dominickjay.com#${item.sys.id}</link>
        <guid>https://dominickjay.com#${item.sys.id}</guid>
        <pubDate>${item.sys.firstPublishedAt}</pubDate>
        </item>
        `;
    })
    .join("");
}

exports.handler = async function (event, context) {
  const rssFeed = `
  <?xml version="1.0"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>dominickjay.com</title>
    <atom:link href="https://dominickjay.com/.netlify/functions/rss" rel="self" type="application/rss+xml" />
    <link>https://dominickjay.com</link>
    <description>dominickjay.com is a lightweight microblogging site powered by Contentful and vanilla HTML, CSS and JavaScript.</description>
    ${buildRssItems(await getPosts())}
  </channel>
  </rss>
  `;

  return {
    statusCode: 200,
    contentType: "text/xml",
    body: rssFeed,
  };
};

exports.handler = async () => {
    return fetch('https://dominickjay.com/.netlify/functions/rss')
        .then(response => response.json())
        .then(processNotes)
        .catch(err => ({
            statusCode: 422,
            body: String(err)
        }))}

const twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const processNotes = async notes => {
    // assume the last note was not yet syndicated
    const latestNote = notes[0]

    // check if the override flag for this note is set
    if (!latestNote.syndicate) {
        return {
            statusCode: 400,
            body: 'Latest note has disabled syndication.'
        }
    }

    // check twitter for any tweets containing note URL.
    // if there are none, publish it.
    const search = await twitter.get('search/tweets', { q: latestNote.url })
    if (search.statuses && search.statuses.length === 0) {
        return publishNote(latestNote)
    } else {
        return {
            statusCode: 400,
            body: 'Latest note was already syndicated.'
        }
    }
}

// Prepare the content string for tweet format
const prepareStatusText = note => {
    const maxLength = 200

    // strip html tags and decode entities
    let text = note.content.trim().replace(/<[^>]+>/g, '')
    text = entities.decode(text)

    // truncate note text if its too long for a tweet.
    if (text.length > maxLength) {
        text = text.substring(0, maxLength) + '...'
    }

    // include the note url at the end.
    text = text + ' ' + note.url
    return text
}

// Push a new note to Twitter
const publishNote = async note => {
    const statusText = prepareStatusText(note)
    const tweet = await twitter.post('statuses/update', {
        status: statusText
    })
    if (tweet) {
        return {
            statusCode: 200,
            body: `Note ${note.date} successfully posted to Twitter.`
        }
    }
}