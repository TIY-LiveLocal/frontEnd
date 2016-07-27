app.controller('mapCtrl', function($scope, mapFactory) {

mapFactory.locate()
.then(function (position){
  var pos = position.longitude + ' ' + position.latitude;
  $scope.position = pos;
  console.log(pos);
},  function ($error){
    $scope.position = "not found";
  });
});

  // $.when(mapFactory.getCoords()).then(function(){
  //
  //   $scope.coords = mapFactory.getCoords();
  //
  //   console.log($scope.coords);
  // });



// }]);
