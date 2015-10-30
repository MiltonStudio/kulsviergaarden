$(function(){
    $('#menuBtn').click(function(){
        $('.menu-container').toggleClass('active');
        if ($('.menu-container').hasClass('active')){
            $('#menuBtn').text('Close')
        } else {
            $('#menuBtn').text('Menu')
        }
    });
})
