exports = module.exports = {
  template: require('./template.html'),
  data: function() {
    return {
      projects: [{
        meta: 'Nov 14, 2015',
        title: 'Anapest Press',
        summary: 'Free Wordpress.com site with Paypal Integration',
        description: 'One product store, Children\'s Poetry book using Wordpress.',
        detail: 'One of my friends, Blair Reeve, had self-published a children\'s themed poetry book called Hogart the Hedgehog Turns Nink and I really loved the initiative he took, from idea through to execution...', 
        link: 'http://www.anapestpress.com',
        picture: '/img/projects/2015/anapestpress/0001-min.jpg'
      }, {
        meta: 'Jul 22, 2015',
        title: 'Peel Street Poetry',
        summary: 'Community based Wordpress.com site',
        description: 'Customise front-end theme, integrate social media channels and regularly publish content',
        detail: 'Before I regularly performed on stage at an Open Mic Night, I found doing any public speaking quite unnerving. As such, I gave myself the challenge of overcoming my anxiety by desensitising myself to public speaking.',
        link: 'http://www.peelstreetpoetry.com',
        picture: '/img/projects/2015/peelstreetpoetry/0001-min.jpg'
      // }, {
      //   meta: '',
      //   title: '',
      //   summary: '',
      //   description: '',
      //   link: ''
      }]
    }
  }
}