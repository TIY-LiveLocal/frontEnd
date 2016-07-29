app.controller('loginController', ['$http', '$scope', '$location', function($http, $scope, $location) {

  $scope.login = function(){
    data = {
      username : $scope.username,
      password : $scope.password,
    };

  $http({
    method: 'POST',
    url: "https://livelocalrails.herokuapp.com/sign_in",
    data: data,
    headers: {'Authorization': 'firebaseToken'}
  }).then(function success(response){
    localStorage.setItem('token',response.data.token);  //SET LOCALSTORAGE TOKEN TO RETURNED DATA
        $location.path('/dashboard');     //if call is successful, send user to dashboard page
  }, function errorCallback(response){
      alert('not today junior');
  });



};

}]);





// "https://livelocalrails.herokuapp.com/find?zipcode=" + ZIPCODE VARIABLE + "&name=" + BIZ NAME VARIABLE;
