$(document).ready(function ($) {

    $('#s1').click(function () {
        if ( $('.s1').hasClass('fa-long-arrow-alt-down')) {
            $('.s1').addClass('fa-long-arrow-alt-up');
            $('.s1').removeClass('fa-long-arrow-alt-down');
        } else if ( $('.s1').hasClass('fa-long-arrow-alt-up') ) {
            $('.s1').removeClass('fa-long-arrow-alt-up');
        } 
        else {
            $('.s1').addClass('fa-long-arrow-alt-down');
        }
        
    });

    $('#s2').click(function () {
        if ( $('.s2').hasClass('fa-long-arrow-alt-down')) {
            $('.s2').addClass('fa-long-arrow-alt-up');
            $('.s2').removeClass('fa-long-arrow-alt-down');
        } else if ( $('.s2').hasClass('fa-long-arrow-alt-up') ) {
            $('.s2').removeClass('fa-long-arrow-alt-up');
        } 
        else {
            $('.s2').addClass('fa-long-arrow-alt-down');
        }
    });

    $('#s3').click(function () {
        if ( $('.s3').hasClass('fa-long-arrow-alt-down')) {
            $('.s3').addClass('fa-long-arrow-alt-up');
            $('.s3').removeClass('fa-long-arrow-alt-down');
        } else if ( $('.s3').hasClass('fa-long-arrow-alt-up') ) {
            $('.s3').removeClass('fa-long-arrow-alt-up');
        } 
        else {
            $('.s3').addClass('fa-long-arrow-alt-down');
        }
    });

})  