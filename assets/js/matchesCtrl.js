app.controller('matchesCtrl', ['$scope','$http', function($scope,$http){


  $http({
    method: 'GET',
    url: "https://livelocalrails.herokuapp.com/surveys",
    headers: {'Authorization': token}
  }).then(function success(response){

    $scope.pets = response.data.petFriend;
    $scope.hiring = response.data.hiring;

    console.log(response.data);
  });
  $http({
    method: 'GET',
    url: "https://livelocalrails.herokuapp.com/surveys/matches",
    headers: {'Authorization': token}
  }).then(function success(response){

    $scope.biz = response.data;

    console.log(response.data);
    console.log(response.data[0].survey);
  });

//  if response.data[0].survey results contain petFriend,
//  and if response.data.petFriend === true,
//  then show the petFriend icon on the business

}]);
