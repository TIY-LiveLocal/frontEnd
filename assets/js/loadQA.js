app.controller('qaCtrl', ['$scope', '$http', function($scope, $http){

  var token = localStorage.getItem('token');
  var id = localStorage.getItem('id');


  $http({
    url: 'https://livelocalrails.herokuapp.com/questions/all',
    method: 'GET',
    headers: {'Authorization':token},
    params: {'business_id':532}
  }).then(function(response){
    $scope.questionGet = response.data;
    // $scope.answerGet = response.data[4].answers;
    // $scope.answerGet2 = response.data[9].answers;
    console.log(response);
    // console.log(response.data[4].answers[0]);
  }, function error(response){
    console.log(response);
  });

  $scope.askButton = function(){
    data = {
      'business_id'   : id,
      'question_text' : $scope.userQuestion
    };

    $http({
      url: 'https://livelocalrails.herokuapp.com/questions',
      method:'POST',
      headers: {'Authorization':token},
      data: data
    }).then(function(response){
      console.log(response);
      console.log(data);
    }, function error(response){
      console.log(response);
    });
  };

}]);
