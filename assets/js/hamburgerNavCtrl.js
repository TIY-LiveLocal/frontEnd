app.controller('navCtrl', ['$http', '$scope', function($http, $scope){

$scope.navBtn = function dropNav(){
  console.log('hamburger nav clicked');
   $('.dropdownMenu-list--item').css('display', 'block');

};
}]);
