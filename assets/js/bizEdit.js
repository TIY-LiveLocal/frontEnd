//be able to edit changes to existing content via PATCH request to and endpoint
var token = localStorage.getItem('token');
// var dateEdits = $('input[id="customDay"]').val();
// var timeEdits = $('input[class="inputEdits"]').val();
// var bioEdits = $('input[class="businessBio"]').val();
// stringData= {
//   name : $scope.name,
//   address : $scope.address,
//   city : $scope.city,
//   zipcode : $scope.zipcode,
//   phone : $scope.phone,
//   website_url : $scope.website_url,
//   image_url : $scope.image_url,
//   biz_descrip : $scope.biz_descrip
// };

$(document).on('click', '.editSubmitButton', function(e) {
    e.preventDefault();

    $http({
        method: 'PATCH',
        url:"https://0e2ee143.ngrok.io/questions/28",
        data: stringData, //be able to pass business id from local storage
        headers: {
            'Authorization': 'token'
        }, //be able to pass token for Auth from local storage
    }).done(function(data) {

    });
});
