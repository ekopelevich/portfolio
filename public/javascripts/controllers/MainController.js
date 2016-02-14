app.controller('MainController', function($scope){

  $scope.projects = [
    {
      thumbnail: '../../assets/planit-thumbnail.jpg',
      name: 'Planit',
      technologies: 'JavaScript, jQuery, Node, Express, PostgreSQL, Knex, Passport, Bootstrap',
      description: 'Planit is an event human resources marketplace. As a user, you act as an event owner or contributor. As an owner, you can create events, add tasks, review (and accept or reject) proposals... ',
      github: 'https://github.com/skuttleman/planit-server',
      liveURL: 'http://planit.space',
      details: 'planit'
    },
    {
      thumbnail: '../../assets/weeks-thumbnail.jpg',
      name: 'Your Life in Weeks',
      technologies: 'JavaScript, jQuery, Bootstrap, localStorage, Google Maps API',
      description: 'An interactive visualization of a life in weeks. This was a front-end focused project, created prior to learning about persistence, so life events are kept in localStorage, but the full-stack version is in the works...',
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
    // },
    // {
    //   thumbnail: '../../assets/stumblr.jpg',
    //   name: 'Stumblr',
    //   technologies: 'React, Twitter, Uber API',
    //   description: 'Bar hopping!',
    //   github: 'http://github...',
    //   liveURL: 'http://stumblr.something',
    //   details: 'stumblr'
    }
  ];
})
