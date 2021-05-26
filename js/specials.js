window.onload= function(){
    jQuery(document).ready(function(){
        //starts hidden specials
        $('.main div').hide(function(){});

        $('h3').click(function(){
            $('.main div').toggle(2000);
        });

    });

}