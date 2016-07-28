console.log ('can POST for answers');

var businessIdNo = localStorage.getItem('vm.id');
console.log(businessIdNo);

$('#askButton').on('click', '#askButton', function (e){
  e.preventDefault();
  console.log('ask has been clicked');

var questionText = $('input[id="qASectionHead"]').val();

  console.log('The user has typed: ' + questionText);

      $http({
        url: 'https://livelocalrails.herokuapp.com/questions.json',
        method: 'POST',
        data: {question_text: questionText,
                business_id: 254},
        headers: {'Authorization': 'sean.harber'},
      }).success(function(data){

        console.log(data);
