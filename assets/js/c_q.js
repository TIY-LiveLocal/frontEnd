app.controller('cqController', ['$http', '$scope','$location',
 function($http, $scope,$location) {

   //nav bar toggle
     $scope.dropDown = false;

  $scope.hiring = false;
  $scope.glutFree = false;
  $scope.musicians = false;
  $scope.lgbt = false;
  $scope.livWage = false;
  $scope.localFood = false;
  $scope.minorityOwned = false;
  $scope.petFriend = false;
  $scope.artCrafts = false;
  $scope.charNonprof = false;
  $scope.sustain = false;
  $scope.veganPeta = false;
  $scope.claimBusiness = false;

  // $('li').click(function(){
  //   $(this).css('color','black');
  // });

  $('li').click(function(){
  $(this).addClass('black');
});

  // //////  below doesn't seem to work  //////////////
  // $( "li" ).toggleClass(function() {
  //   if ( $(this) parent().is("signUpForm") ) {
  //     return "black";
  //   } else {
  //     return "signUpForm";
  //   }
  // });
  // ////////////////////
  // function textColorToggle() {
  //     var color = document.getElementById('li').style.color;
  //     if (color == "#9E9E9E")
  //         document.getElementById('li').style.color="black";
  //     else
  //         document.getElementById('li').style.color="#9E9E9E";
  // }
  // document.getElementById('li).onclick = function(e){
  //     textColorToggle();// call the function
  // };
  // /////////////////

$scope.clicked = function(){
// //////////////////////
  // $('.checkBox').click(function() {
  //     $(this).toggleClass('signUpFormClicked');
  //     $(this).toggleClass('signUpForm');
  // });
  // //////////////////////

    // if ($scope.claimBusiness === false){
    //   $location.path('/dashboard');
    // } else{
    //   $location.path("/business_search");
    // }


      $location.path('/dashboard');


  console.log($scope.claimBusiness);

  data = {
    hiring : $scope.hiring,
    glutFree : $scope.glutFree,
    musicians : $scope.musicians,
    lgbt : $scope.lgbt,
    livWage : $scope.livWage,
    localFood : $scope.localFood,
    minorityOwned : $scope.minorityOwned,
    petFriend : $scope.petFriend,
    artCrafts : $scope.artCrafts,
    charNonprof : $scope.charNonprof,
    sustain : $scope.sustain,
    veganPeta : $scope.veganPeta
  };

  console.log(data);

  var token = localStorage.getItem('token');

  $http({
    method: 'POST',
    url: "https://livelocalrails.herokuapp.com/surveys",
    data:data,
    headers:{'Authorization': token}
  }).then(function success(response){
    console.log(response);
  });

};


}]);
