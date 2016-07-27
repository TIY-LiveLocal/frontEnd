app.factory('mapFactory', function($q, $rootScope){

  var locate = function(){
    var deferred = $q.defer();
    console.log(deferred);
    navigator.geolocation.getCurrentPosition(success,error);
    function success(position){
      $rootScope.$apply(function () {deferred.resolve(position.coords);});
    }
    function error(error){
      $rootScope.$apply(function (){deferred.reject(error);});
    }
    return deferred.promise;
  };
  return {locate : locate};
});

//REFERENCE http://embed.plnkr.co/onrmfu/

  // return{
  //   getCoords: function() {
  //     var printGeo;
  //     navigator.geolocation.getCurrentPosition(success, error);
  //
  //     // if (!navigator.geolocation){
  //     //   console.log('Not supported');
  //     //   // return;
  //     // }
  //     function success(position){
  //       var userLatitude = position.coords.latitude;
  //       var userLongitude = position.coords.longitude;
  //
  //       printGeo = [userLatitude, userLongitude];
  //       console.log(printGeo);
  //     }
  //
  //     function error() {
  //       console.log("Unable to retrieve your location");
  //     }
  //   return position;
  //   }
  // };
// });















// HTML
// <!-- GEOFIND -->
// <p><button onclick="geoFindMe()">Show my location</button></p>
// <div id="out"></div>

//GOOGLE script
// function initMap() {
//         var directionsService = new google.maps.DirectionsService;
//         var directionsDisplay = new google.maps.DirectionsRenderer;
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 7,
//           center: {lat: 41.85, lng: -87.65}
//         });
//         directionsDisplay.setMap(map);
//
//         var onChangeHandler = function() {
//           calculateAndDisplayRoute(directionsService, directionsDisplay);
//         };
//         document.getElementById('start').addEventListener('change', onChangeHandler);
//         document.getElementById('end').addEventListener('change', onChangeHandler);
//       }
//
//       function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//         directionsService.route({
//           origin: document.getElementById('start').value,
//           destination: document.getElementById('end').value,
//           travelMode: google.maps.TravelMode.DRIVING
//         }, function(response, status) {
//           if (status === google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
//       }

      //GOOGLE reference:https://developers.google.com/maps/documentation/javascript/examples/directions-simple
      //Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 3.0 License, and code samples are licensed under the Apache 2.0 License. For details, see our Site Policies. Java is a registered trademark of Oracle and/or its affiliates.
