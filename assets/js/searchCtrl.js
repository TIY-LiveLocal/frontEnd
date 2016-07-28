//still in process of creating endpoint and search terms 07/26
$(document).on('click', '#searchNearMeBtn', function(e) {
    e.preventDefault();
    $('.businessInfo').css('display', 'block');

    var searchNearMe = $('input[class="searchNearMe"]').val();


    $.ajax({
        url: 'https://livelocalrails.herokuapp.com/businesses',
        dataType: "json",
        method: "GET",
        data: {
            term: searchNearMe
        },
        headers: {
            'Authorization': 'bob'
        },
    }).done(function(data) {});

});
