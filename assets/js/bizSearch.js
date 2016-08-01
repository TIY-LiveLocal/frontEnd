
app.controller('bizSearchCtrl', ['$http', '$scope', function($http, $scope){

var token = localStorage.getItem('token');
var bizNameTerm = $('input[id="bizNameHere"]').val();
var bizNameLoc  = $('input[id="bizAddressHere"]').val();

  $scope.seekBusiness = function(){

    console.log('search has been clicked');
    console.log('user has typed '+ $('input[id="bizNameHere"]').val());

    $http({
      method: 'GET',
      url: 'https://livelocalrails.herokuapp.com/find_business',
      // url: 'https://9da6162d.ngrok.io/find_business',
      headers: {'Authorization': token},
      params: {'term': bizNameTerm,
                'location': bizNameLoc}
      }).then(function successCallback(response){
        console.log(response);
      }, function errorCallback (response){

      });
    };
}]);
