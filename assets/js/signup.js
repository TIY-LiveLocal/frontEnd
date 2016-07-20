app.controller('signupController', ['$http', '$scope', function($http, $scope) {

  $scope.getStarted = function(){
    data = {
      first_name : $scope.first_name,
      last_name : $scope.last_name,
      username : $scope.username,
      email : $scope.email,
      password : $scope.password,
      confirm_password : $scope.confirm_password,
      zip_code : $scope.zip_code
    };
    console.log(data);

  $http({
    method: 'POST',
    url: "https://39348887.ngrok.io/test_ngrok",
    data: data,
    headers: {'Authorization':'application/json'}
    }).then(function success(response){
    console.log(response);
  });

};

}]);





// "https://livelocalrails.herokuapp.com/find?zipcode=" + ZIPCODE VARIABLE + "&name=" + BIZ NAME VARIABLE;
