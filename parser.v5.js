
const h1 = /^#\s(.+)/img
const h2 = /^##\s(.+)/img
const h4 = /####\s(.+)/img
const event = /^\+/

const parser = (text) => {
  const lines = text.split('\n')

  const output = lines.map(trimLine)
  .map(headingFactory('h1', h1))
  .map(headingFactory('h2', h2))
  .map(headingFactory('h4', h4))
  .map(isNewLine)

  const outputWithLines = output.map((line, index) => {
    let categoryIndex = index
    while (output[categoryIndex] && output[categoryIndex].type !== 'h4') {
      categoryIndex--
    }

    let dateIndex = index
    while (output[dateIndex] && output[dateIndex].type !== 'h2') {
      dateIndex--
    }

    const category = output[categoryIndex] && output[categoryIndex].value
    const date = output[dateIndex] && output[dateIndex].value
    return isEvent(line, date, category)
  })
  // .filter(x => x)

  const indexToBeRemoved = outputWithLines.findIndex((e) => {
    return e && e.value && e.value.toLowerCase() === 'sources'
  })

  const outputWithoutSources = outputWithLines.splice(0, indexToBeRemoved)
  outputWithoutSources.shift()
  // return outputWithLines
  return trimBreak(outputWithoutSources)
}

function trimLine (line) {
  return line.trim()
}

function headingFactory (type, fn) {
  return function (line) {
    const heading = fn.exec(line)
    if (heading) {
      return {
        type,
        value: heading[1]
      }
    }
    return line
  }
}

function isNewLine (line) {
  if (line === '') {
    return {
      type: 'br'
    }
  }
  return line
}

function isEvent (line, date, category) {
  const e = event.exec(line)
  if (e) {
    return cleanEvent(line, date, category)
  }
  return line
}
function getMonths (month) {
  if (!month) {
    return ''
  }

  const index = month.slice(0, 3).toLowerCase()

  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
  return months.indexOf(index)
}
function cleanEvent (event, rawDate, category) {
  if (!category || !rawDate) {
    return event
  }
  const infoPattern = /^\+\s(.+)\s\-\s\[(.+)\]\((.+?)\)$/ig
  const results = infoPattern.exec(event)
  if (!results) {
    return null
  }

  const month = getMonths(rawDate.split(' ')[0])
  const year = rawDate.split(' ')[1]
  const datePattern = /(\d+)/ig
  const date = datePattern.exec(results[1])[1]

  return {
    timestamp: new Date(year, month, date),
    title: results[2],
    url: results[3],
    category: category
  }
}

function trimBreak (ori) {
  const arr = [].concat(ori)
  while (arr[0] && arr[0].type === 'br') {
    arr.shift()
  }
  while (arr[arr.length - 1] && arr[arr.length - 1].type === 'br') {
    arr.pop()
  }
  return arr
}

module.exports = parser
