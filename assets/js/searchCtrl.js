//still in process of creating endpoint and search terms 07/26

console.log('can find businesses in the area');

$(document).on('click', '#searchNearMeBtn', function(e){
  e.preventDefault();
  console.log('user clicked search for local');
  $('.businessInfo').css('display', 'block');

var searchNearMe = $('input[class="searchNearMe"]').val();

console.log('user searching for ' + searchNearMe);

  $.ajax({
    // url: 'https://e74a3659.ngrok.io/find_business', //change endpoint
    url: 'https://livelocalrails.herokuapp.com/businesses',
    dataType:"json",
    method: "GET",
    data: {term:searchNearMe},
    headers: {'Authorization': 'bob'},
  }).done(function(data) {
  })

});
