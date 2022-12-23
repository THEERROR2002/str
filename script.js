function play() {
    $('#ziak').trigger('play');
    var vid = document.querySelector('video');
    vid.style.visibility = 'visible';
    vid.volume = "0.1";

    var bio = document.getElementById('bio');
    bio.style.visibility = 'visible';
 }