$(function() {
    let banner_messages = [
        "This site uses cookies to track you", 
        "We have implemented a tracking haddock",
        "Nudger Barnes is following you home",
        "Nudger Barnes is still following you home"
    ]
    let banner_message_index = 0;

    function next_banner_message() {
        $(".banner_message").hide();
        $(".banner_message .banner_text").text(banner_messages[banner_message_index]);
        banner_message_index++;
        if (banner_message_index == banner_messages.length) {
            banner_message_index--;

        }
        setTimeout(function() {
            $(".banner_message").show();
        }, 3000);
    }

    next_banner_message();
    $(".banner_button").click(function() {
        next_banner_message();
    });
});
