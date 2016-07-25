app.controller('testController', ['$http', '$scope', function($http, $scope) {

  var token = localStorage.getItem('token');
  console.log(token);

    $http({
        method: 'GET',
        // url: 'https://681ca077.ngrok.io/businesses/1.json'
        url: 'https://livelocalrails.herokuapp.com/businesses.json',
        headers: {'Authorization':token}

    }).success(function call(userList) {
        $scope.businesses = userList.businesses;

        console.log(userList);
    
    });

}]);
// original code above
// app.controller('testController', ['$http', '$scope', function($http, $scope) {
//
//
//     $http({
//         method: 'GET',
//         // url: 'https://681ca077.ngrok.io/businesses/1.json'
//         url: 'https://livelocalrails.herokuapp.com/businesses.json',
//         data: {"location": zipcode},
//     }).success(function call(data) {
//
//         $scope.businesses = userList;
//
//         console.log(data);
//
//     });
// }]);

// //////////////////
// $.ajax({
//   method: 'GET',
//   url: 'http://74be7da1.ngrok.io/my_bookmarks',
//   data: { "username": plockUser, "password": plockPassword},
// })
// // .success returns the data from the url above, console.log proves that it made a successful connection
//   .success(function (data) {
//   console.log("success");
