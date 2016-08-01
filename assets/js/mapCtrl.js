app.controller('mapCtrl', ['$scope','$document','mapFactory', function($scope, $document, mapFactory) {

//Google Maps HTML / inject $scope coordinates with format


//CAPTURES USER LOCATION
  // var lat = localStorage.getItem('latitude');
  // var lng = localStorage.getItem('longitude');
  //
  // $scope.map = {center: {latitude: lat, longitude: lng}, zoom: 15};
  //
  // console.log(mapFactory.locate());
  //
  // mapFactory.locate()
  // .then(function (position){
  //   pos = [position.longitude, position.latitude];
  //   $scope.position = pos;
  //   console.log(pos);
  //   return pos;



//PLUNKR EXAMPLE// http://embed.plnkr.co/jYMqqnh7qYW7QRNqX5LN/
// app.controller('MainCtrl', function($scope, $document) {
  // map object

  $scope.map = {
    control: {},
    center: {
        latitude: 35.993134,
        longitude: -78.904757
    },
    zoom: 16
  };
  console.log($scope.map);

  // marker object
  $scope.marker = {
    center: {
      latitude: localStorage.getItem('latitude'),
      longitude: localStorage.getItem('longitude')
    }
  }

  // instantiate google map objects for directions
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  var geocoder = new google.maps.Geocoder();

  // directions object -- with defaults
  $scope.directions = {
    origin: "Current Location",
    destination: localStorage.getItem('name'),
    showList: false
  }

  // get directions using google maps api
  $scope.getDirections = function () {
    origin = $scope.marker.center.latitude + ", " + $scope.marker.center.longitude;
    destination = $scope.map.center.latitude + ", " + $scope.map.center.longitude;
    var request = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    console.log(request);
    directionsService.route(request, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        directionsDisplay.setMap($scope.map.control.getGMap());
        directionsDisplay.setPanel(document.getElementById('directionsList'));
        $scope.directions.showList = true;
      } else {
        alert('Google route unsuccesfull!');
      }
    });
  }
}]);





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

// },  function ($error){
//     $scope.position = "not found";
//   });
// });
