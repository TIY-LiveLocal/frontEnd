app.controller('qaCtrl', ['$scope', '$http', function($scope, $http) {

    var token = localStorage.getItem('token');
    var id = localStorage.getItem('responder_id');


    $http({
        method: 'GET',
        url: 'https://livelocalrails.herokuapp.com/questions/all',
        headers: {
            'Authorization': token
        },
        params: {
            'business_id': id
        }
    }).then(function(response) {
        $scope.questionGet = response.data;
    }, function error(response) {});

    $scope.askButton = function() {
        data = {
            'business_id': id,
            'question_text': $scope.userQuestion
        };

        $http({
            method: 'POST',
            url: 'https://livelocalrails.herokuapp.com/questions',
            data: data,
            headers: {
                'Authorization': token
            }
        }).then(function(response) {}, function error(response) {});
    };
}]);
