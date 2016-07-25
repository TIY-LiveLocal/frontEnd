app.controller('dashboardCtrl', ['$scope','$location','dbFactory', function($scope, $location, dbFactory){

  getYelp();

  function getYelp(){
    dbFactory.getYelp()
      .then(function(response){
        console.log(response);
        $scope.businesses = response.data;
        $scope.username = response.config.headers.Authorization;

//determine typeof response.data
  console.log('type of $scope.businesses = ' + typeof $scope.businesses);

//get length of array = $scope.businesses
  console.log($scope.businesses.length);

//click & get index of clicked dataThang


  $scope.logID = function(){
    var vm = this.biz;

    myDataThing = $scope.businesses;
//an object
  console.log(typeof myDataThing);

    clicked = $(this).myDataThing;

//logs the object information that has been clicked
  console.log(vm, vm.name);

//redirect user to business profile dashboard page
    $location.path('/bizdash');
    return vm;
  };




        // angular.forEach($scope.businesses, function(value, obj){
        //   console.log(obj + ': ' + value);
        // });
      });
  }



}]);
