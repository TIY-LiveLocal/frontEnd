
app.controller('loadQACtrl', ['$http', '$scope', function($http, $scope){

  console.log('loadQACtrl');

var token = localStorage.getItem('token');
var businessIdNo = localStorage.getItem('phone');

$scope.entries = []

  $scope.loadStuff = function(){
    $http({
        url: 'https://291a9b88.ngrok.io/questions/all',
        method: 'GET',
        // data: {
        //     user_id: token,
        //     phone: businessIdNo
        //   },
        headers: {
          'Authorization': token,
        },
        params: {
            'business_id' : 254
          },
    }).success(function(data) {
        console.log(data);
    });
  }
    $scope.loadStuff();
  }

]);
