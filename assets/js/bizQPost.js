//make a POST request so users can submit questions to the business's Page
//make it show up dynamically with ng-show
//will have to pass the business_id and


app.controller('bizQPost', ['$http', '$scope', function($http, $scope){

  console.log('question posting is ready');

// var businessIdNo = how do we go about pulling this information out?

$(document).on('click', '#askButton', function (e){
  e.preventDefault();
  console.log('ask has been clicked');

var questionText = $('input[id="qASectionHead"]').val();

  console.log('The user has typed: ' + questionText);

      $http({
        url: 'https://livelocalrails.herokuapp.com/questions.json',
        method: 'POST',
        data: {question_text: questionText},
        headers: {'token': 'df'},
      }).success(function(data){

  });

});

}]);
