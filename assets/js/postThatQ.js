app.controller('qCtrl', ['$http', '$scope', function($http, $scope) {

    console.log('question posting is ready');
    var questionText = $('input[id="qASectionHead"]').val();//will grab what user types in search bar and pass in POST request
    var businessIdNo = localStorage.getItem('phone');//will need to assign db content to specific businesses
    var token = localStorage.getItem('token');//pulling user token for authorization purposes in POST request

    console.log(token);
    console.log(businessIdNo);

      $scope.posts = [] //empty array to push post into so user can see it

    $scope.askButton = function() { //when "ask" button is clicked....
        console.log('ask has been clicked');

        qData = {
            qText: $("#qASectionHead").val()
        }


        $scope.posts.push({
            'content': $scope.newPost, //push what user types so it's reflected on the page
        })
        $scope.newPost = ''

        console.log('user has typed ' + $("#qASectionHead").val());

        $http({
            url: ' https://livelocalrails.herokuapp.com/questions', //post request to backend
            method: 'GET',
            data: {
                question_text: questionText,
                phone: businessIdNo,
            },
            headers: {
                'Authorization': token
            },
        }).success(function(data) {

            console.log(data);
        });
    }
}]);
