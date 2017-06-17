
// Remove title
const withoutTitle = input.replace(/#{1,1}(.+)/, '')
const events = withoutTitle.split(/#{2,2}(.+)/).map((a) => a.trim()).filter(a => a)

const output = events.reduce((model, event, index) => {
  if ((index + 1) % 2 === 0) return model
  model[event] = events[index + 1]
  return model
}, {})

// Output is an object dictionary that contains the date of the current events
// console.log(output)

const datesWithEvents = Object.keys(output).reduce((obj, date) => {
  const events = output[date].split('+').filter(x => x.trim())
  const eventsWithDates = events.map((event) => {
    console.log('do something', event.split(/\b((\d.+\-))/img))
    const [ date, url ] = event.split(' - ')
    const hasData = /\[(.+?\r?\n?)\]\((.+?\r?\n?)\)$/img.exec(url)

    if (!hasData) {
    //   / console.log('no data =>', hasData, url, event)
      return {}
    }
    const [ _, title, link ] = hasData
    return {
      date,
      title,
      link
    }
  })
  obj[date] = eventsWithDates
  return obj
}, {})

const eventsByMonths = Object.keys(datesWithEvents).map((key) => {
  return {
    date: key,
    events: datesWithEvents[key]
  }
})

console.log(eventsByMonths)
