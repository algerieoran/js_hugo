$(function(params){
    // Declare mon tableau :

    var nom = $('#nom');
    var prenom = $('#prenom');
    var email = $('#email');
    var tel = $('#tel');
    var caractere = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");

$('#contact').submit(function(event){
    var erreure = false;
    event.preventDefault();

 // on verifie le champ nom :
 if (nom.val().length === 0) {
     nom.addClass('red');
     erreure = true;
     
 } else {
     nom.addClass('green');
 }

 // on verifier le champ prenom :
 if(prenom.val().length === 0) {
     prenom.addClass('red');
     erreure = true;
 } else {
     prenom.addClass('green');
 }

 // on verifier le champ email :
 if(email.val().length === 0 && email.val().indexOf('@') == -1) {
     email.addClass('red');
     erreure = true;
 } else {
     email.addClass('green');
 }

 // on verifier le champ telephone :
 if (tel.val() === caractere) {
     tel.addClass('red');
     erreure = true;
 } else {
     tel.addClass('green');
 }






}); // fin du submit

































}); // fin document ready