
  const EOF = '\n\n$'

  const eventPattern = /\+\s(.+)/img

  const parser = (input) => {
    const headings = ['#', '##', '###', '####', '#####', '######']
    const headingsRegex = headings.map((h) => {
      return headingToRegex(h)
    })

    const h1 = headingsRegex[0]
    const h2 = headingsRegex[1]
    // const h3 = headingsRegex[2]
    const h4 = headingsRegex[3]
    // const h5 = headingsRegex[4]
    // const h6 = headingsRegex[5]

    // const inBetween = captureMiddlePattern('## June 2017', '## July 2017').exec(input)[1]
    // const inBetweenNested = captureMiddlePattern('##### Meetup', '##### Workshop').exec(inBetween)[1]
    // const inBetweenUntilNext = captureMiddlePattern('##### Workshop', EOF).exec(inBetween)[1]
    const headingsOutput = input.match(h2)
    const output = headingsOutput.map((h, i) => {
      const start = h
      const end = headingsOutput[i + 1]
      // console.log('start:end', start, end)
      const hasNext = headingsOutput[i + 1]
      if (!hasNext) {
        const pattern = captureMiddlePattern(start, EOF)
        const sections = pattern.exec(input)[1]
        return sections.match(eventPattern)
      }
      const pattern = captureMiddlePattern(start, end)
      const sections = pattern.exec(input)[1]
      // console.log('sections', sections)
      const subsections = sections.match(/####\s(.+)/img)

      console.log('subsections', sections.match(/####\s(.+)/img))
      if (subsections) {
        return subsections.map((subsection, i) => {
          console.log('subsection', subsection)
          const start = subsection
          const end = subsections[i + 1]
          // console.log('start:end', start, end)
          const hasNext = subsections[i + 1]
          if (!hasNext) {
            const pattern = captureMiddlePattern(start, EOF)
            const subsubsection = pattern.exec(sections)[1]
            return subsubsection.match(eventPattern).map((event) => {
              return cleanEvent(start.replace('##', ''), cleanH4(start), event)
            })
          }
          const pattern = captureMiddlePattern(start, end)
          const subsubsection = pattern.exec(sections)[1]
          return subsubsection.match(eventPattern).map((event) => {
            return cleanEvent(start.replace('##', ''), cleanH4(start), event)
          })
        })
      }
      return sections.match(eventPattern)
    })

    return {
    // h1: input.match(h1),
    // h2: input.match(h2),
    // h4: input.match(h4),
    // inBetween,
    // inBetweenNested,
    // inBetweenUntilNext,
      output
    }
  }

  // Utils to create a simple regex that matches everything in between two patterns and excludes the start and end pattern
  function captureMiddlePattern (start, end) {
  // Replace white spaces with the regex pattern \s
    const startPattern = excludePattern(start.replace(/\s/g, '\\s'))
    const endPattern = excludePattern(end.replace(/\s/g, '\\s'))

  // Double backward slash is required to escape the backward slash
    return new RegExp(startPattern + '([\\s\\S]*?)' + endPattern, 'igm')
  }

// This pattern can only be used with `exec`, not `match`
  function excludePattern (value) {
    return ['(?:', value, '\n?\n?)'].join('')
  }

  function headingToRegex (h) {
    return new RegExp(`^${h}\\s(.+)`, 'img')
  }

  function cleanH4 (h) {
    return h.split(' ')[1]
  }
  function getMonths (month) {
    if (!month) {
      return ''
    }
    console.log('month', month)
    const index = month.slice(0, 3).toLowerCase()
    console.log('index', index)
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    return months.indexOf(index)
  }
  function cleanEvent (title, category, event) {
    const infoPattern = /^\+\s(.+?)\s-\s\[(.+?)\]\((.+?)\)/ig
    const results = infoPattern.exec(event)
    if (!results) {
      return null
    }
    console.log('title')
    const month = getMonths(title.split(' ')[0])
    const year = title.split(' ')[1]
    const datePattern = /(\d+)/ig
    const date = results[1].match(datePattern)

    return {
      datetime: new Date(year, month, date),
      title: results[2],
      url: results[3],
      category: category
    }
  }

  module.exports = parser
