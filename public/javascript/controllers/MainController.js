app.controller('MainController', function($scope){
  console.log('main controller');
  $scope.projects = [
    {
      name: 'planit',
      description: 'things',
      thumbnail: '../../images/github.png',
      github: 'http://planit.space',
      liveURL: 'http://planit.space'
    },
    {
      name: 'planit',
      description: 'things',
      thumbnail: '../../images/github.png',
      github: 'http://planit.space',
      liveURL: 'http://planit.space'
    },
    {
      name: 'planit',
      description: 'things',
      thumbnail: '../../images/github.png',
      github: 'http://planit.space',
      liveURL: 'http://planit.space'
    }
  ];
})
