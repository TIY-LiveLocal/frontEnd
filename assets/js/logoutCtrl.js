console.log('can logout');

var token = localStorage.getItem('token');
console.log(token);

$('#headerSiteNav-logout').on('click', function(e){
  e.preventDefault();
  localStorage.removeItem('token');

  console.log('user has logged out');
});
