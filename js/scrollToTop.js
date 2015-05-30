$(document).scroll(function() {

    if ($(document).scrollTop() > 150) {
        $('#scrollTopBtn').fadeIn();
    } else {
        $('#scrollTopBtn').fadeOut();
    }

});

$(document).ready(function() {
    $('#scrollTopBtn').click(function() {
        $('html, body').animate({ scrollTop: '0px'}, 500);
    });
});