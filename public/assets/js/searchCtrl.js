app.controller('searchController', ['$http', '$scope', function($http, $scope) {

var searchWords = $('input[class = "profileHeader-search"]').val();
  console.log("User typed " + searchWords)

// var searchNow = [];
//   "profileHeader-search".push(searchWords);

$http({
    method: 'GET',
    url: 'https://livelocalrails.herokuapp.com/businesses/find?zipcode='+ searchWords +'.json'
}).success(function call(userList) {

    $scope.businesses = userList;

  console.log("Get call to the zip code specific stuff works");

});
}]);
