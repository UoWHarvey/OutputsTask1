
function random() {
    
    return !Math.round(Math.random());
}
function submitButton()
    var rand = random();
    $('#answer').text(rand);
    if(rand) {
        navigator.navigation.beep(1);
    } else {
        navigator.navigation.beep(2);
    }
}
