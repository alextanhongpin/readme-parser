const fs = require('fs')
const parser = require('./parser.v5.js')

const input = `# Events

## June 2017

##### Meetup

+ 3rd - [React for Beginners (Lets build awesome stuff)](https://www.facebook.com/events/559256264462799/)
+ 3rd - [ReactJS Malaysia Group Meetup](https://www.facebook.com/events/218631575299111/)
+ 6th - [Ruby Tuesday #41](https://www.facebook.com/events/1290349431072502)
+ 10th - [Angular + Firebase: Up & Running (2 days workshop)](https://www.facebook.com/events/692675487579521/)
+ 10th - [2nd Kubernetes Malaysia Meetup](https://www.meetup.com/Malaysia-Kubernetes-Meetup/events/240573917/)
+ 11th - [New Developer Onboarding Checklist - Open Office Hours](https://www.facebook.com/events/801291223382839/)
+ 13th - [Leveraging Big Data Without Breaking The Bank](https://www.facebook.com/events/208084136368642/)
+ 14th - [Dapps; Ideas,Opportunities­ And Wealth](https://www.meetup.com/Blockchain-South-East-Asia/events/240624592/)
+ 14th - [JavaScript Meetup (Talks: GraphQL, Webpack)](https://www.facebook.com/events/711911042343990/)
+ 15th - [How Will Artificial Intelligence Shake Up Growth Hacking?](https://www.facebook.com/events/1685397001762027/)
+ 16th - [Grill or Chill #June 2017](https://mymagic.my/events/event/grill-chill-june-2017/)
+ 17th - [CCC: Andrew Ng's Machine Learning Study Group Meetup](https://www.facebook.com/events/703098599895777/)
+ 17th - [KL Global Reddit Meetup Day](https://www.facebook.com/events/636335076574956/)
+ 19th - [Innovation in AgriTech and BioTech for Malaysia](https://events.bizzabo.com/205020/)
+ 20th - [Big Data & Machine Learning on Google Cloud at Malaysia](https://www.facebook.com/events/1716983011928075/)
+ 20th - [Golang Meetup June 2017](https://www.facebook.com/events/225944401244844/)
+ 21st - [Laratalks #6 (API Edition) :D](https://www.facebook.com/events/1334957796595067/)
+ 21st - [Product Lifecycle Management - Streamline and Improve Innovation](http://peatix.com/event/269217)
+ 22nd - [ATAP TALK : The Symphony of Innovation](http://ataptalk01.peatix.com/)
+ 22nd - [Lets Get Greasy & Slippery! - Blockchain Rebels Meetup #3](https://www.meetup.com/blockchain-rebels/events/240630807/)
+ 22nd - [The Pitch Ep12 : Hacking Lifestyle](http://hacking-lifestyle.peatix.com/)
+ 29th - [ET Youth - Man VS Machine (The Misconception of Technology)](https://www.eventbrite.com/e/et-youth-man-vs-machine-the-misconception-of-technology-tickets-35225115268)
+ 29th - [Agile Talk and Discussion](http://peatix.com/event/277509)

##### Workshop

+ 8th - [Intelligent Video Analytics (IVA) Deep Learning­](http://academy.mymagic.my/events/event/intelligent-video-analytics-iva-deep-learning/)
+ 15th - [Getting Started with Firebase](https://goo.gl/forms/pYzYHBuglWAkJtco2)
+ 15th - [Working with SQLite and Mobile Data with Hands-On Lab](https://www.eventbrite.com/e/working-with-sqlite-and-mobile-data-with-hands-on-lab-tickets-35172434699)
+ 15th - [DevCon #6](http://peatix.com/event/274103/)
+ 16th - [Security x Microsoft Azure Workshops | Business Intelligence & Azure Stack](https://www.eventbrite.com/e/security-x-microsoft-azure-workshops-business-intelligence-azure-stack-tickets-34100740232)
+ 17th - [Xamarin Intermediate Workshop](https://www.meetup.com/Malaysia-Mobile-NET-Developers-Group/events/240106356/)
+ 19th - [Alibaba Cloud Certified Professional Training at WORQ](http://alibabacloudprofessional.peatix.com/)
+ 30th - [Web Analytics Bootcamp - Kuala Lumpur](http://peatix.com/event/273665)

## July 2017

##### Meetup

+ 1st - [CCC: Andrew Ng's Machine Learning Study Group](https://www.facebook.com/events/296287707503092/)
+ 1st - [AI: General Discussion, Industry Momentum](https://www.meetup.com/Kuala-Lumpur-Artificial-Intelligence-Meetup/events/241012039/)
+ 4th - [Bitcoin/Eth Study Group #1](https://www.facebook.com/events/1682644995098126/)
+ 4th - [HR Meetup #5: Let's talk about OKRs](http://peatix.com/event/275825)
+ 5th - [Build a Simple Web App for Absolute Beginners (Workshop)](https://www.facebook.com/events/1350401191710356/)
+ 5th - [Fundamentals of Statistics for Professionals](https://www.facebook.com/events/1946796035557930/)
+ 6th - [AR & VR - ActivateCyberjaya #07](http://activatecyberjaya07.peatix.com/)
+ 6th - [ReactJS Study Group at NEXT](https://www.facebook.com/events/240378366465232/)
+ 6th - [TensorFlow and Deep Learning Malaysia Meetup (July 2017)](https://www.eventbrite.com/e/tensorflow-and-deep-learning-malaysia-meetup-july-2017-tickets-35251255454)
+ 6th - [Free coworking day at WORQ](https://www.facebook.com/events/236239506893413/)
+ 7th - [Game Dev Hangout July 2017 : Playtest Night](https://www.facebook.com/events/434243780291741/)
+ 9th - [KakiRepair - Repair your own stuff!](https://www.facebook.com/events/303311400111300/)
+ 10th - [The Future Outlook of Big Data & Data Science Careers](https://www.eventbrite.com/e/the-future-outlook-of-big-data-data-science-careers-tickets-35842791755)
+ 11th - [Cloud OnBoard: Learn how to Build with Google Cloud Platform](https://cloudplatformonline.com/2017-OnBoard-APAC.html)
+ 11th - [Delve into the world of Artificial Intelligence with Intellij](https://mymagic.my/events/event/delve-world-artificial-intelligence-intellij/)
+ 13th - [Malaysia R User Group Meetup](https://www.eventbrite.com/e/r-user-group-malaysia-meetup-july-2017-tickets-35838014466)
+ 14th - [Kuala Lumpur Blockchain Evening](https://www.eventbrite.co.uk/e/kuala-lumpur-blockchain-evening-tickets-35779469356)
+ 16th - [CRYPTOCURRENCY MEETUP](https://www.meetup.com/CRYPTOCURRENCY-MEETUP/events/240171968/)
+ 18th - [OWASP Malaysia Q2 Meetup 2017](https://www.facebook.com/events/132873913944030/)
+ 18th - [Public Lecture: Large scale bioinformatics data integration and data mining](https://www.eventbrite.com/e/public-lecture-large-scale-bioinformatics-data-integration-and-data-mining-of-resources-for-tickets-32345274587)
+ 19th - [“Do You Want To Wrangle” – Planning To Go Into Data Science and Big Data. You Must Learn To Wrangle](https://www.eventbrite.com/e/do-you-want-to-wrangle-planning-to-go-into-data-science-and-big-data-you-must-learn-to-wrangle-tickets-35585342718)
+ 19th - [Laratalks #7 (A.I. Edition) :D](https://www.facebook.com/events/1870957499893793/)
+ 20th - [Common Ground x Catcha Group x AWS Launch Party](http://cgxawsxcg.peatix.com/)
+ 25th - [Golang Meetup July 2017](https://www.facebook.com/events/1929403620681457/)
+ 25th - [Tech Tuesday by Redbox Studio](https://www.eventbrite.com/e/tech-tuesday-by-redbox-studio-registration-34747066411s)
+ 26th - [37th MDA Digital Wednesday](https://www.facebook.com/events/1944963749113134/)
+ 27th - [Software Architecture by Dev Con](https://mymagic.my/events/event/software-architecture-dev-con/)
+ 28th - [Grill or Chill #July 2017](https://mymagic.my/events/event/grill-chill-july-2017/)

##### Workshop
+ 5th - [Build a Simple Web App for Absolute Beginners (Workshop)](https://www.facebook.com/events/1350401191710356/)
+ 17th - [International Workshop On Data Analytics 2017](http://www.iwda.is-workshop.org/)
+ 21st - [MVP Development Bootcamp](http://www.sitecacademy.com/event/mvp-development-bootcamp/)
+ 22nd - [Web Development for Absolute Beginner (2 day workshop)](http://web-dev-beginner.peatix.com/)
+ 27th - [HTML5 & CSS Training](https://www.facebook.com/events/209656716220252/)

##### Hackathon

+ 1st - [Kids Hack Day: Kuala Lumpur](https://www.eventbrite.com/e/kids-hack-day-kuala-lumpur-tickets-34588614477)
+ 7th - [Startup Weekend Kuala Lumpur at APU](http://startupweekendatapu.peatix.com/)
+ 28th - [CIMB Data Science Challenge (Viewing)](https://www.facebook.com/events/427514890924687/)
+ 28th - [FinTech Hackathon KL](https://www.eventbrite.co.uk/e/fintech-hackathon-kl-tickets-35032641574)
+ 29th - [Advoc8 Hack](https://www.eventbrite.com/e/advoc8-hack-tickets-35119596659)

##### Conference

+ 11th - [IoT Innovation Day](https://www.eventbrite.com/e/iot-innovation-day-tickets-35398037483)
+ 12th - [Experience Entrepreneurship: Startup Career Fair](https://www.eventbrite.com/e/experience-entrepreneurship-a-startup-career-fair-tickets-34314705207)

## August 2017

##### Hackathon

+ 11th - [AT&T MCMC 2017 Malaysia Developers’ Day](https://www.eventbrite.com/e/att-mcmc-2017-malaysia-developers-day-tickets-34318474481)

##### Conference

+ 5th - [BarCamp Cyberjaya 2017](https://www.eventbrite.com/e/barcamp-cyberjaya-2017-tickets-33954124701)
+ 9th - [IT&NT Hackathon 2017](https://www.eventbrite.com/e/itnt-hackathon-2017-tickets-35530050337)
+ 11th - [Malaysia Digital Economy Forum 3.0, 2017](https://www.eventbrite.com/e/malaysia-digital-economy-forum-30-2017-tickets-35397628259)
+ 26th - [PyCon APAC 2017](http://pycon-apac-2017.peatix.com/)

## September 2017

+ 7th - [Selangor Smart City & Future Commerce Convention 2017: MYR](http://selangorsmartcityconvention.peatix.com/)
+ 12th - [BIGIT 2017 (#BIGIT17)](https://www.eventbrite.com/e/bigit-2017-bigit17-tickets-29635145518)

## October 2017

+ 2nd - [Data Science Carnival](https://www.eventbrite.com/e/data-science-carnival-tickets-32345345800)
+ 2nd - [NextBigTech Asia 17](https://www.eventbrite.com/e/nextbigtech-asia-17-tickets-35404376443)
+ 12th - [RUBYCONF MY 2017](http://rubyconf.my/)

## November 2017

+ 1st - [Healthcare Transformation to be brought by Artificial Intelligence](https://www.eventbrite.com/e/healthcare-transformation-to-be-brought-by-artificial-intelligence-tickets-34348530379)


#### Sources
* Facebook
* [Meetup](https://www.meetup.com/)
* [Peatix](https://www.peatix.com/)
* [Eventbrite](https://www.eventbrite.com/)
* [MaGIC](https://www.mymagic.my/)
`
const output = parser(input)
console.log('PRINTING RESULT\n\n\n\n\n')
console.log(JSON.stringify(output, null, 2))

fs.writeFile('ouput.json', JSON.stringify(output), 'utf-8', (error, ok) => {
  if (error) {
    console.log(error)
  }
  console.log('successfully wrote it to output.json')
})

// console.log(output.titles[0])
// console.log(output.sections[0])
