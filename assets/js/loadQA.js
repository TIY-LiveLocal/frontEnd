
app.controller('loadQACtrl', ['$http', '$scope', function($http, $scope){

  console.log('loadQACtrl');

var token = localStorage.getItem('token');
var businessIdNo = localStorage.getItem('phone');

$scope.entries = []

  $scope.loadStuff = function(){
    $http({
        url: 'https://livelocalrails.herokuapp.com/questions/all',
        method: 'GET',
        headers: {
          'Authorization': token,
        },
        params: {
            'phone' : businessIdNo
          },
    }).success(function(data) {
        console.log(data);
    });
  }
    $scope.loadStuff();
  }

]);
