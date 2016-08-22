var token = localStorage.getItem('token');

$('#headerSiteNav-logout').on('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('token');

});
