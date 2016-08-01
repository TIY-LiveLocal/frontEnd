app.controller('qCtrl', ['$http', '$scope', function($http, $scope) {


    console.log('question posting is ready');
    var questionText = $('input[id="qASectionHead"]').val();//will grab what user types in search bar and pass in POST request
    var businessIdNo = localStorage.getItem('business_id');//will need to assign db content to specific businesses
    var token = localStorage.getItem('token');//pulling user token for authorization purposes in POST request
    var answerText = $('input[id="answerInput"]').val();
    var username = localStorage.getItem('username');

    console.log(token);
    console.log(businessIdNo);

      $scope.posts = [] //empty array to push post into so user can see it
      $scope.answers = []

    $scope.askButton = function() { //when "ask" button is clicked....
        console.log('ask has been clicked');


        $scope.posts.push({'content': $scope.newPost})
        $scope.newPost = ''

        console.log('user has typed ' + $("#qASectionHead").val());

        $http({
            url: 'https://9bc2e4d3.ngrok.io/questions',
            // url: ' https://livelocalrails.herokuapp.com/questions', //post request to backend
            method: 'POST',
            data: {
                question_text: $('input[id="qASectionHead"]').val(),
                business_id: businessIdNo,
            },
            headers: {
                'Authorization': token
            }
        }).success(function(data) {

            console.log(data);
        });
    }

}]);
