//kaitlin update Thurs 07/28

app.controller('questionCtrl', ['$http', '$scope', function($http, $scope) {

                console.log('question posting is ready');
                var questionText = $('input[id="qASectionHead"]').val();
                var businessIdNo = localStorage.getItem('vm.id');
                var token = localStorage.getItem('token');
                console.log('token');
                console.log(businessIdNo);

                $scope.questionData = {{questionText}};

                $scope.askButton = function() {

                    console.log('ask has been clicked')



                    $http({
                        url: 'https://livelocalrails.herokuapp.com/questions.json',
                        method: 'POST',
                        data: {
                            question_text: questionText,
                            business_id: businessIdNo,
                        },
                        headers: {'Authorization', token},
                    }).success(function(data) {

                        console.log(data);
                        });
                      };
                    }]);
