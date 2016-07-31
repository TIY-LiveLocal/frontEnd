app.controller('answerCtrl', ['$http', '$scope', function($http, $scope) {

    console.log('can POST for answers');

    var answerText = $scope.answerText().val
    var token = localStorage.getItem('token');
    console.log(token);
    console.log(answerText);

    $scope.answerButton = function() {
      console.log('answer has been clicked');

          aData = {
              aText: $("#answerInput").val()
          }

        $http({
            url: 'https://livelocalrails.herokuapp.com/questions',
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
