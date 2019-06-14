/*$(document).ready(function() {
	console.log("it should play music");
    $('audio#pop')[0].play();
});*/

jQuery(document).ready(function($){
    $('audio#pop')[0].play().then(response => {

    }).catch(e => {
        console.log(e);
    })
});