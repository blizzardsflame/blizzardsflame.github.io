// Profession list
const profession_arr = ["Artisant sédentaire","Artisant non sédentaire","Commerçant",
                        "Commerçant non sédentaire","Ecclésiastique","Etudiant",
                        "Exploitant agricole","Fonctionnaire","Fonctionnaire non sédentaire",
                        "Forain","Profession libérale","Profession libérale non sédentaire",
                        "Retraité","Salarié","Salarié non sédentaire","Sans profession",
                        "Taxi","TPM","Véhicule société","VRP"];

        // Profession list population
        // given the id of the <select> tag as function argument, it inserts <option> tags
        const professionElement = document.getElementById("profession");
        professionElement.length=0;
        professionElement.options[0] = new Option('Selectioner une profession','');
        professionElement.selectedIndex = 0;
        for (let i=0; i<profession_arr.length; i++) {
            professionElement.options[professionElement.length] =
            new Option(profession_arr[i],profession_arr[i]);
        }

// Form validation
var formValidation = document.querySelector('.needs-validation');

formValidation.addEventListener('submit', function(event) {
    if (formValidation.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    formValidation.classList.add('was-validated');

});


// alert after validation
const sendifValid = {
    target: '#inforesult',
    url: 'processauto.php',
    success: function(){
        alert('Votre demande a bien été transmise')
    },
    clearForm: true
};


// range control spinner value
const slider = document.getElementById("coefmalus");
const output = document.getElementById("valeurMalus");
        output.innerHTML = slider.value;
        slider.oninput = function() {
            output.innerHTML = this.value;
        };