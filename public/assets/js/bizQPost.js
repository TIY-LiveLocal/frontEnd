//make it show up dynamically with ng-show
//will have to pass the business_id and token via local storage


app.controller('bizQPost', ['$http', '$scope', function($http, $scope){

  console.log('question posting is ready');

// var businessIdNo = how do we go about pulling this information out?

// $(document).on('click', '#askButton', function (e){
//   e.preventDefault();
//   console.log('ask has been clicked');
//
// var questionText = $('input[id="qASectionHead"]').val();
//
//   console.log('The user has typed: ' + questionText);

      // $http({
      //   url: 'https://75cc3e1e.ngrok.io/questions',
      //   // url: 'https://livelocalrails.herokuapp.com/questions.json',
      //   method: 'POST',
      //   data: {question_text: questionText,
      //           business_id: 254},
      //   headers: {'Authorization': 'sean.harber'},
      // }).success(function(data){
      //
      //   console.log(data);
console.log('test GET request');

$(document).on('load', function(e){
    e.preventDefault();

        $http({
          url: 'https://livelocalrails.herokuapp.com/questions',
          // url: 'https://livelocalrails.herokuapp.com/questions.json',
          method: 'GET',
          data: {business_id: 254},
          headers: {'Authorization': 'sean.harber'},
        }).success(function(data){

          console.log('GET sent');
        });
      // });
});

}]);
