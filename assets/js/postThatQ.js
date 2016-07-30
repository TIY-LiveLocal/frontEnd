
app.controller('qCtrl', ['$http', '$scope',  function($http, $scope) {

                console.log('question posting is ready');
                var questionText = $('input[id="qASectionHead"]').val();
                var businessIdNo = localStorage.getItem('phone');
                var token = localStorage.getItem('token');

                console.log(token);
                console.log(businessIdNo);

                $scope.askButton = function() {
                  console.log('ask has been clicked');

                      qData = {
                          qText: $("#qASectionHead").val()
                      }

                    console.log('user has typed ' + $("#qASectionHead").val());

                    $http({
                        url: ' https://291a9b88.ngrok.io/questions',
                        method: 'POST',
                        data: {
                            question_text: questionText,
                            phone: businessIdNo,
                        },
                        headers: {'Authorization': token},
                    }).success(function(data) {

                        console.log(data);
                        });
                      };
                    // });
                    }]);
