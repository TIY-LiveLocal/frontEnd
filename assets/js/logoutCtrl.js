var token = localStorage.getItem('token');

$('#headerSiteNav-logout').click(function(e) {
    e.preventDefault();
    localStorage.removeItem('token');
});
