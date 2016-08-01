app.controller('qCtrl', ['$http', '$scope', function($http, $scope) {

    console.log('question posting is ready');
    var questionText = $('input[id="qASectionHead"]').val();//will grab what user types in search bar and pass in POST request
    var businessIdNo = localStorage.getItem('phone');//will need to assign db content to specific businesses
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
            url: ' https://livelocalrails.herokuapp.com/questions', //post request to backend
            method: 'POST',
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


// //now to answer the questions
//
//     console.log('able to ANSWER questions');
//
//     $scope.answerButton = function() {
//       console.log('answer has been clicked');
//
//           $scope.answers.push({
//               'aContent': $scope.newAnswer, //push what user types so it's reflected on the page
//           })
//           $scope.newAnswer= ''
//
//           $scope.deleteThing = function(index){
//             $scope.answers.splice(index, 1); //remove item from index
//             }
//
//           console.log('user has typed ' + $("#answerInput").val());
//
//         $http({
//             url: 'https://livelocalrails.herokuapp.com/questions',
//             method: 'POST',
//             data: {
//                 question_text: answerText,
//                 user_id: token,
//                 phone: businessIdNo
//             },
//             headers: {
//                 'Authorization': token
//             },
//         }).success(function(data) {
//
//             console.log(data);
//         });
//       }
//
//       $scope.deleteThing = function(index){
//         $scope.posts.splice(index, 1); //remove item from index
//         }
//
}]);
