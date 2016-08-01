app.controller('matchesCtrl', ['$scope','$http','$location', function($scope,$http,$location){

  var token = localStorage.getItem('token');
  $scope.firstname = localStorage.getItem('firstname');


  $http({
    method: 'GET',
    url: "https://livelocalrails.herokuapp.com/surveys",
    headers: {'Authorization': token}
  }).then(function success(response){

    $scope.pets = response.data.petFriend;
    $scope.artsCrafts = response.data.artsCrafts;
    // $scope.hiring = response.data.hiring;

    // console.log(response.data);
    console.log(response);
  });


  $http({
    method: 'GET',
    url: "https://livelocalrails.herokuapp.com/surveys/matches",
    headers: {'Authorization': token}
  }).then(function success(response){

    $scope.matches = response.data;

    console.log(response);
    console.log(response.data);


    $scope.viewBiz = function(){

      var vm = this.match;
      console.log(vm);

      // $location.path('/business');
    };

  });

//  if response.data[0].survey results contain petFriend,
//  and if response.data.petFriend === true,
//  then show the petFriend icon on the business

}]);
