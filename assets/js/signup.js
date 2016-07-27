app.controller('signupController', ['$http', '$scope','$location', function($http, $scope, $location) {

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
    url: "https://livelocalrails.herokuapp.com/sign_up",
    // url: "https://7213619f.ngrok.io/sign_up",
    data: data
    }).then(function success(response){
      localStorage.setItem('token',response.data.token);
      $location.path('/login');

    console.log(response);
  }, function errorCallback(error){
    $scope.first_nameErr =  error.data.message.first_name;
    $scope.last_nameErr =  error.data.message.last_name;
    $scope.usernameErr =  error.data.message.username;
    $scope.emailErr =  error.data.message.email;
    $scope.passwordErr =  error.data.message.password;
    $scope.confirm_passwordErr =  error.data.message.confirm_password;
    $scope.zip_codeErr =  error.data.message.zip_code;
    // alert(error.data.message.email);
    // $scope.validate = {
    //   email: error.data.message.email
    // };

    console.log(error.data.message);
  });

};

}]);





// "https://livelocalrails.herokuapp.com/find?zipcode=" + ZIPCODE VARIABLE + "&name=" + BIZ NAME VARIABLE;
