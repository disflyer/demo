// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { render } = require('react-dom')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    console.debug('pathname', req.url)
    if (req.url.indexOf('podcast-management-umi') > -1) {
      console.debug(req.url)
      handle(req, res, { pathname: 'http://localhost:8081/content/episodes' })
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
