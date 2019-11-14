
function random() {
    
    return !Math.round(Math.random());
}
function submitButton() {
    
    $('#answer').text(random());
    if ("random" = "true") {
        navigator.notification.beep(1);
    } else if ("random" = "false") {
        navigator.notigication.beep(2);
    }
    
}
