app.controller('dashboardCtrl', ['$scope','$location','dbFactory', function($scope, $location, dbFactory){

  callOne();

  function callOne(){
    dbFactory.callOne()
      .then(function(response){
        console.log(response);
        $scope.businesses = response.data;
        $scope.firstname = localStorage.getItem('firstname');
        $scope.user_zipcode = localStorage.getItem('user_zipcode');

        //click & get index of clicked 
          $scope.logID = function(){
            var vm = this.biz;

            dataclick = $scope.businesses;
            clicked = $(this).dataclick;

          localStorage.setItem('name',vm.name);
          localStorage.setItem('address',vm.address);
          localStorage.setItem('city',vm.city);
          localStorage.setItem('zip',vm.zip_code);
          localStorage.setItem('phone',vm.phone);
          localStorage.setItem('longitude',vm.location[1]);
          localStorage.setItem('latitude',vm.location[0]);
          localStorage.setItem('id',vm.id);

        //redirect user to business profile dashboard page
            $location.path('/business');
            return vm;
          };
      });
  }

//nav bar toggle
  $scope.dropDown = false;
}]);
