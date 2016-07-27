app.controller('bizSearchController', ['$scope','$http', function($scope, $http){

  $scope.searchToClaim = function(){

    searchToClaimData = {
      term: $scope.term,
      location: $scope.location
    };

    console.log(searchToClaimData);

    // var token = localStorage.getItem('Authorization');

    $http({
      method: 'GET',
      url: 'https://6b6decab.ngrok.io/find_business',
      // https://livelocalrails.herokuapp.com/find_business
      params: searchToClaimData,
      headers: {'Authorization':'blah'}


      }).then(function successCallback(response){
        console.log(response);
      }, function errorCallback (response){

      });

  // below closes searchButtonClicked function
  };
  //  below closes controller line 1
}]);


// Kaitlin's code below
// console.log('business search is ready');
//
// $(document).on('click', '#bizSetupSearch', function(e){
//   e.preventDefault();
//   console.log('search is clicked');
//   $('.businessInfo').css('display', 'block');
//
// var bizName = $('input[class="searchPage-inputs--name"]').val();
// var bizAddress = $('input[class="searchPage-inputs--address"]').val();
//
// console.log('Business name is ' + bizName + ' and address is ' + bizAddress);
//
//   $.ajax({
//     url: 'https://e74a3659.ngrok.io/find_business',
//     dataType:"json",
//     method: "GET",
//     data: {term:bizName,location:bizAddress},
//     headers: {'Authorization': 'asdf'},
//   }).done(function(data) {
//   })
// });
