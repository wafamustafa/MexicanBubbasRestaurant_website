// hide the paragraphs
jQuery(document).ready(function(){
    jQuery("p").hide();
//hide the paragraph when you toggle to the next one
    function paragraphTransition(){
        jQuery("p").hide(1000);
        $(this).next().toggle(1000);
    }
    //comeplete the function when you click on the heading
    $("h2").click(paragraphTransition);
});
