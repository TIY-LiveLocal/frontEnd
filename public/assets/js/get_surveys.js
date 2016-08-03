app.controller('surveyResultsController', ['$scope','$http', function($scope, $http ) {

  // var token = localStorage.getItem('token');
  // console.log(token);

  $scope.getSurveyResults = function(){

    $http({
        method: 'GET',
        // Get survey results for current user
        // url: ' https://fb8726ca.ngrok.io/surveys',
        url: 'https://livelocalrails.herokuapp.com/surveys',
        headers: {'Authorization':token}

    }).then(function call(userList) {

        $scope.businesses = userList.data;
        $scope.username = userList.config.headers.Authorization;

        console.log(userList);
    });
    $http({
        method: 'GET',
        // Get survey results for businesses matching current user
        url: 'https://livelocalrails.herokuapp.com/surveys/matches',
        // url: ' https://fb8726ca.ngrok.io/surveys/matches',
        headers: {'Authorization':token}

    }).then(function call(userList) {

        $scope.businesses = userList.data;
        $scope.username = userList.config.headers.Authorization;

        console.log(userList);
    });
    // below closes getSurveyResults function
  }
}]);
