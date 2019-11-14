
function random() {
    
    return !Math.round(Math.random());
}
function submitButton() {
    
    $('#answer').text(random());
    navigator.notification.beep(1);
    navigator.notigication.beep(2);
}
