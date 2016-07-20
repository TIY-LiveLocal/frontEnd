app.controller('loginController', ['$http', '$scope', function($http, $scope) {

  $scope.login = function(){
    data = {
      username : $scope.username,
      password : $scope.password,
    };
    console.log(data);


  $http({
    method: 'POST',
    url: "https://362ad842.ngrok.io/sign_in",
    data: data,
    headers: {'Authorization': 'a@a.com'}
  }).then(function success(response){
    console.log(response);
  });



};

}]);





// "https://livelocalrails.herokuapp.com/find?zipcode=" + ZIPCODE VARIABLE + "&name=" + BIZ NAME VARIABLE;
