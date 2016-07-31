app.controller('answerCtrl', ['$http', '$scope', function($http, $scope) {

    console.log('can POST for answers');

    var answerText = $('input[id="answerInput"]').val();
    var businessIdNo = localStorage.getItem('phone');
    var token = localStorage.getItem('token');

    //now to answer the questions

        $scope.answerButton = function() {
          console.log('answer has been clicked');

              $scope.answers.push({
                  'aContent': $scope.newAnswer, //push what user types so it's reflected on the page
              })
              $scope.newAnswer= ''

              $scope.deleteThing = function(index){
                $scope.answers.splice(index, 1); //remove item from index
                }

              console.log('user has typed ' + $("#answerInput").val());

            $http({
                url: 'https://livelocalrails.herokuapp.com/questions',
                method: 'POST',
                data: {
                    question_text: answerText,
                    user_id: token,
                    phone: businessIdNo
                },
                headers: {
                    'Authorization': token
                },
            }).success(function(data) {

                console.log(data);
            });
          }

          $scope.deleteThing = function(index){
            $scope.posts.splice(index, 1); //remove item from index
            }

    }]);
