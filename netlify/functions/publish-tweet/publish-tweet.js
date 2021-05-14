import Twitter from 'twitter'

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

exports.handler = async () => {
    return fetch('https://dominickjay.com/.netlify/functions/rss')
        .then(response => response.json())
        .then(processNotes)
        .catch(err => ({
            statusCode: 422,
            body: String(err)
        }))}
