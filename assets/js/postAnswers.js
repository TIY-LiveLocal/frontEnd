app.controller('answerCtrl', ['$http', '$scope', function($http, $scope) {

    console.log('can POST for answers');

    var answerText = $scope.answerText().val
    var token = localStorage.getItem('token');
    console.log(token);
    console.log(answerText);

    $scope.answerData = {{answerText}};

    $scope.answerButton = function() {

        $http({
            url: 'https://livelocalrails.herokuapp.com/questions.json',
            method: 'POST',
            data: {
                question_text: answerText,
                user_id: token
            },
            headers: {
                'Authorization': token
            },
        }).success(function(data) {

            console.log(data);
        });
    };
}]);
