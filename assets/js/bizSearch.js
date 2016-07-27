
console.log('business search is ready');

$(document).on('click', '#bizSetupSearch', function(e){
  e.preventDefault();
  console.log('search is clicked');
  $('.businessInfo').css('display', 'block');

var bizName = $('input[class="searchPage-inputs--name"]').val();
var bizAddress = $('input[class="searchPage-inputs--address"]').val();

console.log('Business name is ' + bizName + ' and address is ' + bizAddress);

  $.ajax({
    url: 'https://e74a3659.ngrok.io/find_business',
    dataType:"json",
    method: "GET",
    data: {term:bizName,location:bizAddress},
    headers: {'Authorization': 'asdf'},
  }).done(function(data) {
  })
});
