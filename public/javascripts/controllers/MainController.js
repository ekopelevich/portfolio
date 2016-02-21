app.controller('MainController', function($scope){

  $scope.projects = [
    {
      thumbnail: '../../assets/stumblr-thumbnail.jpg',
      name: 'Stumblr',
      technologies: 'React, Express, Twitter Auth, MongoDB, Bootstrap ',
      description: 'Stumblr is pub crawl planning app that maps a barhopping route based on your current location or a specific address.',
      github: 'https://github.com/designatedDrinkers/stumblr',
      liveURL: 'http://stumblr.club',
      details: 'stumblr'
    },
    {
      thumbnail: '../../assets/planit-thumbnail.jpg',
      name: 'Planit',
      technologies: 'JavaScript, jQuery, Node, Express, PostgreSQL, Knex, LinkedIn Auth, Bootstrap',
      description: 'Planit is an event human resources marketplace. As a user, you act as an event owner or contributor. As an owner, you can create events, add tasks, review (and accept or reject) proposals... ',
      github: 'https://github.com/skuttleman/planit-server',
      liveURL: 'http://planit.space',
      details: 'planit'
    },
    {
      thumbnail: '../../assets/weeks-thumbnail.jpg',
      name: 'Your Life in Weeks',
      technologies: 'JavaScript, jQuery, Bootstrap, localStorage, Google Maps API',
      description: 'An interactive visualization of a life in weeks. Save important events from each week of your life and see how they populate a grid of your life...',
      github: 'https://github.com/ekopelevich/your_life_in_weeks',
      liveURL: 'http://kopelevich.org/weeks',
      details: 'weeks'
    },
    {
      thumbnail: '../../assets/reasonabout-thumbnail.jpg',
      name: 'Reason About',
      technologies: 'Jekyll',
      description: 'I created this group blog as a channel for me and my peers to collaborate on blogging. Quickly built with Jekyll...',
      github: 'https://github.com/ekopelevich/yourlifeinweeks',
      liveURL: 'http://reasonabout.co',
      details: 'reasonabout'
    }
  ];
})
