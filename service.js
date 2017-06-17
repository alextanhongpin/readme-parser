const request = require('request')

request('https://raw.githubusercontent.com/engineersmy/events/master/README.md', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body)

    // const headings = /(?:##)\s(.+)(?:\r?\n?)*(?:\r?\n?)*/gmi.exec(body)
    // console.log(headings)

    const headings1 = body.match(/^(?!##)\s(.+)/gmi)/// (?:##)\s(.+)(?:\r?\n?)*(?:\r?\n?)*/gmi)
    console.log(headings1)

    // const titles = /^(?:##)\s(.+)(?:\r?\n?)((+.\r?\n?))/gmi.exec(body)
    // const events = body.match(/^(?:##)\s(.+)(?:\r?\n?)((+.\r?\n?))/gmi)
    // console.log(events)
  }
})