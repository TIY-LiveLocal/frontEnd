app.controller('matchesCtrl', ['$scope','$http','$location', function($scope,$http,$location){

  var token = localStorage.getItem('token');
  $scope.firstname = localStorage.getItem('firstname');


  $http({
    method: 'GET',
    url: "https://livelocalrails.herokuapp.com/surveys",
    // url: "https://57e91829.ngrok.io/surveys",
    headers: {'Authorization': token}
  }).then(function success(response){

    $scope.userResults = response.data;
    console.log(response);
  });


  $http({
    method: 'GET',
    url: "https://livelocalrails.herokuapp.com/surveys/matches",
    // url: "https://57e91829.ngrok.io/surveys/matches",
    headers: {'Authorization': token}
  }).then(function success(response){

    $scope.matches = response.data;

    console.log(response);
    console.log(response.data);

    var arr = [];
    console.log(arr);

    $scope.viewBiz = function(){

      var vm = this.match;
      console.log(vm);

      arr.push(vm.id);

      console.log(arr);


      // $location.path('/business');
    };

  }, function error(res){
    console.log(res);
  });

//  if response.data[0].survey results contain petFriend,
//  and if response.data.petFriend === true,
//  then show the petFriend icon on the business

}]);
