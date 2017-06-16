// const request = require('request')

// request('https://raw.githubusercontent.com/engineersmy/events/master/README.md', (error, response, body) => {
//   if (!error && response.statusCode === 200) {
//     console.log(body)

//     // const headings = /(?:##)\s(.+)(?:\r?\n?)*(?:\r?\n?)*/gmi.exec(body)
//     // console.log(headings)

//     const headings1 = body.match(/^(?!##)\s(.+)/gmi)/// (?:##)\s(.+)(?:\r?\n?)*(?:\r?\n?)*/gmi)
//     console.log(headings1)

//     // const titles = /^(?:##)\s(.+)(?:\r?\n?)((+.\r?\n?))/gmi.exec(body)
//     // const events = body.match(/^(?:##)\s(.+)(?:\r?\n?)((+.\r?\n?))/gmi)
//     // console.log(events)
//   }
// })

const input = `# Events

## June 2017

+ 3rd - [React for Beginners (Lets build awesome stuff)](https://www.facebook.com/events/559256264462799/)
+ 3rd - [ReactJS Malaysia Group Meetup](https://www.facebook.com/events/218631575299111/)
+ 6th - [Ruby Tuesday #41](https://www.facebook.com/events/1290349431072502)
+ 8th - [Intelligent Video Analytics (IVA) Deep Learning­](http://academy.mymagic.my/events/event/intelligent-video-analytics-iva-deep-learning/)
+ 10th - [Angular + Firebase: Up & Running (2 days workshop)](https://www.facebook.com/events/692675487579521/)
+ 10th - [2nd Kubernetes Malaysia Meetup](https://www.meetup.com/Malaysia-Kubernetes-Meetup/events/240573917/)
+ 11th - [New Developer Onboarding Checklist - Open Office Hours](https://www.facebook.com/events/801291223382839/)
+ 13th - [Leveraging Big Data Without Breaking The Bank](https://www.facebook.com/events/208084136368642/)
+ 14th - [Dapps; Ideas,Opportunities­ And Wealth](https://www.meetup.com/Blockchain-South-East-Asia/events/240624592/)
+ 14th - [JavaScript Meetup (Talks: GraphQL, Webpack)](https://www.facebook.com/events/711911042343990/)
+ 15th - [Getting Started with Firebase](https://goo.gl/forms/pYzYHBuglWAkJtco2)
+ 15th - [How Will Artificial Intelligence Shake Up Growth Hacking?](https://www.facebook.com/events/1685397001762027/)
+ 15th - [Working with SQLite and Mobile Data with Hands-On Lab](https://www.eventbrite.com/e/working-with-sqlite-and-mobile-data-with-hands-on-lab-tickets-35172434699)
+ 15th - [DevCon #6](http://peatix.com/event/274103/)
+ 16th - [Security x Microsoft Azure Workshops | Business Intelligence & Azure Stack](https://www.eventbrite.com/e/security-x-microsoft-azure-workshops-business-intelligence-azure-stack-tickets-34100740232)
+ 16th - [Grill or Chill #June 2017](https://mymagic.my/events/event/grill-chill-june-2017/)
+ 17th - [CCC: Andrew Ng's Machine Learning Study Group Meetup](https://www.facebook.com/events/703098599895777/)
+ 17th - [Xamarin Intermediate Workshop](https://www.meetup.com/Malaysia-Mobile-NET-Developers-Group/events/240106356/)
+ 17th - [KL Global Reddit Meetup Day](https://www.facebook.com/events/636335076574956/)
+ 19th - [Innovation in AgriTech and BioTech for Malaysia](https://events.bizzabo.com/205020/)
+ 19th - [Alibaba Cloud Certified Professional Training at WORQ](http://alibabacloudprofessional.peatix.com/)
+ 20th - [Big Data & Machine Learning on Google Cloud at Malaysia](https://www.facebook.com/events/1716983011928075/)
+ 20th - [Golang Meetup June 2017](https://www.facebook.com/events/225944401244844/)
+ 21st - [Laratalks #6 (API Edition) :D](https://www.facebook.com/events/1334957796595067/)
+ 22nd - [ATAP TALK : The Symphony of Innovation](http://ataptalk01.peatix.com/)
+ 22nd - [Lets Get Greasy & Slippery! - Blockchain Rebels Meetup #3](https://www.meetup.com/blockchain-rebels/events/240630807/)
+ 22nd - [The Pitch Ep12 : Hacking Lifestyle](http://hacking-lifestyle.peatix.com/)

## July 2017

+ 1st - [Kids Hack Day: Kuala Lumpur](https://www.eventbrite.com/e/kids-hack-day-kuala-lumpur-tickets-34588614477)
+ 5th - [Fundamentals of Statistics for Professionals](https://www.facebook.com/events/1946796035557930/)
+ 11th - [Cloud OnBoard: Learn how to Build with Google Cloud Platform](https://cloudplatformonline.com/2017-OnBoard-APAC.html)
+ 12th - [Experience Entrepreneurship: Startup Career Fair](https://www.eventbrite.com/e/experience-entrepreneurship-a-startup-career-fair-tickets-34314705207)
+ 17th - [International Workshop On Data Analytics 2017](https://www.facebook.com/events/403448290035103/)
+ 18th - [OWASP Malaysia Q2 Meetup 2017](https://www.facebook.com/events/132873913944030/)
+ 18th - [Public Lecture: Large scale bioinformatics data integration and data mining](https://www.eventbrite.com/e/public-lecture-large-scale-bioinformatics-data-integration-and-data-mining-of-resources-for-tickets-32345274587)
+ 20th - [MVP Development Bootcamp](http://www.sitecacademy.com/event/mvp-development-bootcamp/)
+ 27th - [HTML5 & CSS Training](https://www.facebook.com/events/209656716220252/)
+ 28th - [CIMB Data Science Challenge (Viewing)](https://www.facebook.com/events/427514890924687/)
+ 28th - [FinTech Hackathon KL](https://www.eventbrite.co.uk/e/fintech-hackathon-kl-tickets-35032641574)
+ 29th - [Advoc8 Hack](https://www.eventbrite.com/e/advoc8-hack-tickets-35119596659)

## August 2017

+ 11th - [AT&T MCMC 2017 Malaysia Developers’ Day](https://www.eventbrite.com/e/att-mcmc-2017-malaysia-developers-day-tickets-34318474481)
+ 26th - [PyCon APAC 2017](http://pycon-apac-2017.peatix.com/)

#### Sources
* Facebook
* [Meetup](https://www.meetup.com/)
* [Peatix](https://www.peatix.com/)
* [Eventbrite](https://www.eventbrite.com/)
* [MaGIC](https://www.mymagic.my/)
`
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

Object.keys(output).map((date) => {
  console.log(output[date].split('+'))
})
