app.controller('bizSearchCtrl', ['$scope','$location','$http', function($scope, $location, $http){

var token = localStorage.getItem('token');
var bizNameTerm = $('input[id="bizNameHere"]').val();
var bizNameLoc  = $('input[id="bizAddressHere"]').val();

  $scope.seekBusiness = function(){

    $http({
      method: 'GET',
      url: 'https://livelocalrails.herokuapp.com/find_business',
      headers: {'Authorization': token},
      params: {'term': $('input[id="bizNameHere"]').val(),
                'location': $('input[id="bizAddressHere"]').val()}
      }).then(function successCallback(response){
        $scope.businesses = response.data; //placed at the right bracket of the response, helps define response and tells it what you need
      }, function errorCallback (response){
      });

      //click & get index of clicked dataThang
        $scope.logID = function(){
          var vm = this.biz;

          dataclicked = $scope.businesses;

          clicked = $(this).dataclicked;

      //logs the object information that has been clicked

        localStorage.setItem('name',vm.name);
        localStorage.setItem('address',vm.address);
        localStorage.setItem('city',vm.city);
        localStorage.setItem('zip',vm.zip_code);
        localStorage.setItem('phone',vm.phone);
        localStorage.setItem('business_id', vm.id);
        localStorage.setItem('username', vm.user_id);
        localStorage.setItem('longitude',vm.location[1]);
        localStorage.setItem('latitude',vm.location[0]);

      //redirect user to business profile dashboard page
          $location.path('/business');
          return vm;
        };

    };

}]);
