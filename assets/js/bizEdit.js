//be able to edit changes to existing content via PATCH request to and endpoint
console.log('business edit ability is connected');

var token = localStorage.getItem('token');
console.log(token);

console.log('user token is: ' + token);

var dateEdits = $('input[id="customDay"]').val();
var timeEdits = $('input[class="inputEdits"]').val();
var bioEdits = $('input[class="businessBio"]').val();


$(document).on('click', '.editSubmitButton', function(e){
  e.preventDefault();
  console.log('submit button has been pressed');
  console.log ('user typed: ' + bioEdits + 'as a bio edit');
  console.log('user typed: ' + timeEdits + 'as a time edit');
  console.log('user typed: ' + dateEdits + 'for special dates');

$.ajax({
  url: 'url',
  dataType: 'json',
  method: 'PATCH',
  data: {question_text: questionText, business_id: 254}, //be able to pass business id from local storage
  headers: {'Authorization': 'token'}, //be able to pass token for Auth from local storage
}).done(function(data){

})
});
