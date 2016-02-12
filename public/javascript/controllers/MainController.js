app.controller('MainController', function($scope){

  $scope.projects = [
    {
      thumbnail: '../../assets/planit-thumbnail.jpg',
      name: 'Stumblr',
      technologies: 'JavaScript, jQuery, Node, Express, Passport, MongoDB, Knex, Foundation',
      description: 'Inspired, by the blog, "Wait but Why?", I created an interactive visualization of a life in weeks. This was a front-end focused project, created prior to learning about persistence, so events are just kept in localStorage, but the full-stack version is in the works.',
      github: 'http://yourlifeinweeks.space',
      liveURL: 'http://planit.space',
      details: '#/projects/planit'
    },
    {
      thumbnail: '../../assets/planit-thumbnail.jpg',
      name: 'Planit',
      technologies: 'JavaScript, jQuery, Node, Express, PostgreSQL, Knex, Passport, Bootstrap',
      description: 'Planit is a social event resource marketplace. You can post events and requests for help. You can also apply to other\' tasks based on your skillset as defined in your profile. This was a group project focused on demonstrating server-side proficiencies.',
      github: 'https://github.com/skuttleman/planit-server',
      liveURL: 'http://planit.space',
      details: '/projects/planit'
    },
    {
      thumbnail: '../../assets/planit-thumbnail.jpg',
      name: 'Your Life in Weeks',
      technologies: 'JavaScript, jQuery, localStorage',
      description: 'I interactive visualization of a life in weeks. This was a front-end focused project, created prior to learning about persistence, so events are just kept in localStorage, but the full-stack version is in the works.',
      github: 'http://yourlifeinweeks.space',
      liveURL: 'http://planit.space',
      details: '#/projects/planit'
    }
  ];
})
