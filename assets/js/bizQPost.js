
app.controller('bizQPost', ['$http', '$scope', function($http, $scope){

  console.log('question posting is ready');

  console.log('test GET request');

  $scope.askQuestion = function(){
      thingData = {
        thingName  $("#searchNearMe").val()
      }


$('#askButton').on('click', function(e){
    e.preventDefault();
    console.log('ask has been clicked');

        $http({
          url: 'https://6b6decab.ngrok.io/questions',
          // url: 'https://livelocalrails.herokuapp.com/questions.json',
          method: 'POST',
          data: {questionDataInput},
          headers: {'Authorization': 'sean.harber'},
        }).success(function(data){

          console.log(data);
        });
      });
    }]);
