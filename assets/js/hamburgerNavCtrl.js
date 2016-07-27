//issues getting the .css assignment change to show.
//haven't found anything specific about it online yet.

console.log('hamburger nav connected');
$('#hamburgerNav').click(function(e){
  console.log('hamburger nav clicked');
  e.preventDefault();
  $('dropdownMenu-list--item').css('display', 'block');
});
