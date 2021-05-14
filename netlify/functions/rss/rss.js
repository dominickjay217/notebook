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