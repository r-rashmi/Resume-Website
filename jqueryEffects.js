$(document).ready(function(){
    $('#headerwrap').hide().slideDown(1500);
    $('.col-lg-12').show().animate({opaque: '1'});
    $('#headerwrap').fadeTo('slow', 0.90, function()
    {
        $(this).css('background-image', 'url(' + $img + ')');
    }).delay(1000).fadeTo('slow', 1);
    

        $(".container desc").fadeIn();

        $("imp").mouseover(function(){
             $("imp").css("background-color", "#003459");
        });

        $("imp").mouseout(function(){
            $("imp").css("background-color", "#E63946");
        });

        $("button").click(function () {
            $(this).css("background-color", "#70C1B3");
        });

        $(function () {
            $('.mail').on('click', function (event) {
                event.preventDefault();
              alert("You Are About to Send An Email to Rashmi!");
              var email = 'rashmir@umd.edu';
              var subject = 'Interested In Employing You';
              var emailBody = 'Lets Connect Through Email!';
              window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
            });
        });

        $('.tel').text(function () {
            $( this ).replaceWith( '<a href="tel:' + $( this ).text() + '">' + $( this ).text() + "</a>" );
          });

        $(".container desc").finish();
        jQuery.fx.interval = 100;
        jQuery.speed(400);  
});
 