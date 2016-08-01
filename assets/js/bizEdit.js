//be able to edit changes to existing content via PATCH request to and endpoint
var token = localStorage.getItem('token');
var dateEdits = $('input[id="customDay"]').val();
var timeEdits = $('input[class="inputEdits"]').val();
var bioEdits = $('input[class="businessBio"]').val();


$('.editSubmitButton').on('click', function(e) {
  console.log('submit edits clicked');
    e.preventDefault();

    $.ajax({
        url: 'url',
        dataType: 'json',
        method: 'PATCH',
        data: {
            question_text: questionText,
            business_id: 254
        }, //be able to pass business id from local storage
        headers: {
            'Authorization': 'token'
        }, //be able to pass token for Auth from local storage
    }).done(function(data) {

    });
});
