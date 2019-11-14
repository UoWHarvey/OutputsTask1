
function random() {
    
    return !Math.round(Math.random());
}
function submitButton() {
    
    $('#answer').text(random());
    
}
