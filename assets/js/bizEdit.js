//be able to edit changes to existing content via PATCH request to and endpoint
console.log('business edit ability is connected');

// var token = localStorage.getItem(response.data.token);
//
// console.log('user token is: ' + token);

var specialDates = $('input[id="customDay"]').val();
console.log('user typed: ' + specialDates + 'for special dates');

var timeEdits = $('input[class="businessHours-hours"]').val();
console.log('user typed: ' + timeEdits + 'as a time edit');

var bioEdits = $('input[class="businessBio"]').val();
console.log ('user typed: ' + bioEdits + 'as a bio edit');

$('.editSubmitButton').on('click', function(e){
  e.preventDefault();

$.ajax({
  url: 'url',
  dataType: 'json',
  method: 'PATCH',
  data: {},
  headers: {},
}).done(function(data){

})
});
