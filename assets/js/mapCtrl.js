app.controller('mapCtrl', function($scope, mapFactory) {

  $scope.map = {center: {latitude: 35.99277, longitude: -78.9045719}, zoom: 15};

  console.log(mapFactory.locate());

  mapFactory.locate()
  .then(function (position){
    pos = [position.longitude, position.latitude];
    $scope.position = pos;
    console.log(pos);
    return pos;
  // $scope.getDirections = function() {
  //   console.log(pos);
  //   var directionsService = new google.maps.DirectionsService;
  //   var directionsDisplay = new google.maps.DirectionsRenderer;
  //   var map = new google.maps.Map(document.getElementById('map'),{
  //     zoom: 7,
  //     center: {lat: pos[0], lng: pos[1]}
  //   });
  //   directionsDisplay.setMap(map);
  //
  //   var onChangeHandler = function() {
  //     calculateAndDisplayRoute(directionsService, directionsDisplay);
  //   };
  //   document.getElementById('start').addEventListener('change', onChangeHandler);
  //   document.getElementById('end').addEventListener('change', onChangeHandler);
  // }
  //
  // function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  //   directionsService.route({
  //     origin: document.getElementById('start').value,
  //     destination: document.getElementById('end').value,
  //     travelMode: google.maps.TravelMode.DRIVING
  //   }, function(response, status) {
  //     if (status === google.maps.DirectionsStatus.OK) {
  //       directionsDisplay.setDirections(response);
  //     } else {
  //       window.alert('Directions request failed due to ' + status);
  //     }
  //   });
  // }

},  function ($error){
    $scope.position = "not found";
  });
});  // $.when(mapFactory.getCoords()).then(function(){
  //
  //   $scope.coords = mapFactory.getCoords();
  //
  //   console.log($scope.coords);
  // });
  // });
