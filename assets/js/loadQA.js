
app.controller('loadQACtrl', ['$http', '$scope', function($http, $scope){

// var data= {}

  // localStorage.setItem('answerId', data.id);

  console.log('loadQACtrl');

var entryId = localStorage.getItem('answerId');
var token = localStorage.getItem('token');
var businessIdNo = localStorage.getItem('business_id');

console.log(entryId);

// $scope.entries = []


    $http({
        url: 'https://9bc2e4d3.ngrok.io/questions/all',
        method: 'GET',
        headers: {
          'Authorization': token,
        },
        params: {
            'business_id' : businessIdNo
          }

    }).then(function(data) {
        console.log(data);
        console.log('load has been triggered');
    });

  }]);
