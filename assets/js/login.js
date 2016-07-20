app.controller('loginController', ['$http', '$scope', '$location', function($http, $scope, $location) {

  $scope.login = function(){
    data = {
      username : $scope.username,
      password : $scope.password,
    };
    console.log(data);


  $http({
    method: 'POST',
    url: "https://9ac18a38.ngrok.io/sign_in",
    data: data,
    headers: {'Authorization': 'a@a.com'}
  }).then(function success(response){
    console.log(response);
    console.log(response.data.token); //LOGS THE TOKEN
    localStorage.setItem('token',response.data.token);  //SET LOCALSTORAGE TOKEN TO RETURNED DATA
        $location.path('/dashboard');     //if call is successful, send user to dashboard page
  }, function errorCallback(response){
      console.log(response);
      alert('not today junior');
  });



};

}]);





// "https://livelocalrails.herokuapp.com/find?zipcode=" + ZIPCODE VARIABLE + "&name=" + BIZ NAME VARIABLE;
