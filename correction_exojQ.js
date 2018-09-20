$(function(params) {

    // Declare mon tableau :
    var tableauContact = [];

    // Vérifier l'adresse email :
    function emailValide(email) {
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return reg.test(String(email).toLowerCase());
    }

    // Verifier le téléphone :
    var telephone = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }

    $('#contact').on('submit', function(e){
        e.preventDefault();

        // Récupère les champs à verifier :
        var nom = $('#nom'),
        prenom = $('#prenom'),
        email = $('#email'),
        tel =$('#tel');

        // Vérification des informations :
        var mesInformationsSontValides =true;

        // vérification nom :
        if(nom.val().length=== 0) {
            // le champ est inccorect car vide
            mesInformationsSontValides = false;
        
        }
        // Vérifier email :
        if(!emailValide(email.val())) {
            mesInformationsSontValides =false;
        }

        // Vérification téléphone :
        if(!telephone(tel.val())) {
            mesInformationsSontValides = false;
        }

        if (mesInformationsSontValides) {
            // Une fois qu'on tous vérifié on créé l'objet contact
            var Contact = {
                //Clé          //Valeur
                nom:        nom.val(),
                prenom:   prenom.val(),
                email:      email.val(),
                tel:           tel.val()
            };

            // Verifie si un contact est présent
            var leContactEstDejaPresent = false;

            // Parcourir le tableau de contact
            for(var i = 0; i < tableauContact.length; i++) {
                if (Contact.email === tableauContact[i].email) {
                    leContactEstDejaPresent = true;
                    break;
                }
            }

            if (!leContactEstDejaPresent) {
                // Ajoute le contact
                tableauContact.push(Contact);

                // Mettre à joutr le tableau HTML
                $('.aucuncontact').hide();
                $(`<tr>
                        <td>${Contact.nom}</td>
                        <td>${Contact.prenom}</td>
                        <td>${Contact.email}</td>
                        <td>${Contact.tel}</td>
                    </tr>`
                ).appendTo($('#LesContacts > tbody'));

                // Rénitialiser le formulaire
                $('#contact')[0].reset();
                $('#contact').get(0).reset();
                $('#contact').trigger('reset');
                $('#contact .form-control').val('');
                document.getElementById('contact').reset();

                $('.alert-contact').fadeIn().delay(4000).fadeOut();
            } else {
                alert('Ce contact existe déjà !!!');
                $('#contact').get(0).reset();
            }
        } else {
            alert('Veuillez renseigné tous les champs !!');
        }
    });

}); // fin du document