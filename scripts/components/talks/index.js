exports = module.exports = {
  template: require('./template.html'),
  data: function() {
    return {
      talks: [{
        meta: 'Oct 10, 2015',
        title: 'Wit is Slackémon',
        summary: 'Exploring NLP, API Services and Slack API',
        description: 'Building a chatbot on top of slack infrastructure whilst leveraging existing API services and WIT.AI',
        link: 'https://docs.google.com/presentation/d/1cMX6nJ8IKtBchjwmj6ilwWD4YZ-EPg5yz0lcb8pOfco/edit?usp=sharing'
      }, {
        meta: 'May 28, 2014',
        title: 'Introduction to Lock Picks',
        summary: 'Singapore Hackerspace Workshop',
        description: 'Hobby talk about physical security design flaws.',
        link: '',
      }, {
        meta: 'Apr 23, 2014',
        title: 'Sass... CSS on Steroids',
        summary: 'Frontend Workshop for Women who code HK',
        description: 'Spoke about how to install SASS, using mixins, partials, imports, extends and variables within a sample frontend project.',
        link: 'http://www.womenwhocodehk.com/'
      }, {
        meta: 'Oct 02, 2013',
        title: 'Introduction to ThreeJS',
        summary: 'Introductory Talk',
        description: 'A short talk about how to setup the scene, lighting, shaders and how to manipulate objects within three.js',
        link: 'http://www.meetup.com/HK-Web-Developers/events/139597242/'
      }, {
        meta: 'Aug 22, 2013',
        title: 'Introduction to CSS3',
        summary: 'CSS Transitions, Animations and Keyframes',
        description: 'This was my first tech talk that I gave at Hong Kong Web Developers (HKWD)',
        link: ''
      }]
    }
  }
}