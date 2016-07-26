//still in process of creating endpoint and search terms 07/26

console.log('can find businesses in the area');

$(document).on('click', '#searchNearMeBtn', function(e){
  e.preventDefault();
  console.log('user clicked search for local');
  $('.businessInfo').css('display', 'block');

var searchNearMe = $('input[class="searchNearMe"]').val();


console.log('Business name is ' + bizName + ' and address is ' + bizAddress);

  $.ajax({
    url: 'https://e74a3659.ngrok.io/find_business', //change endpoint
    dataType:"json",
    method: "GET",
    data: {term:bizName,  },
    headers: {'Authorization': 'asdf'},
  }).done(function(data) {
  })

});
