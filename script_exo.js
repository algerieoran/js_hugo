function(){
    var nom = $('#nom');
    var prenom = $('#prenom');
    var email = $('#email');
    var tel = $('#tel');

$('#contact').submit(function(event){
    var erreure = false;
    event.preventDefault;

 // on verifie le champ nom :
 if (nom.val().length()=== 0) {
     nom.addClass('red');
     erreure = true;
     
 } else {
     nom.addClass('green');
 }






}); // fin du submit

































}; // fin document ready