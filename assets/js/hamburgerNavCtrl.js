console.log('hamburger nav connected');
$(document).click('#hamburgerNav', function(e){
  console.log('hamburger nav clicked');
  e.preventDefault();
  $('dropdownMenu-list--item').css('display', 'block');
});
