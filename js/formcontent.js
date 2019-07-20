// Profession list
var profession_arr = new Array(
    "Artisant sédentaire","Artisant non sédentaire","Commerçant",
    "Commerçant non sédentaire","Ecclésiastique","Etudiant",
    "Exploitant agricole","Fonctionnaire","Fonctionnaire non sédentaire",
    "Forain","Profession libérale","Profession libérale non sédentaire",
    "Retraité","Salarié","Salarié non sédentaire","Sans profession",
    "Taxi","TPM","Véhicule société","VRP");

    // Profession list population
        // given the id of the <select> tag as function argument, it inserts <option> tags
        var professionElement = document.getElementById("Profession");
        professionElement.length=0;
        professionElement.options[0] = new Option('Selectioner une profession','');
        professionElement.selectedIndex = 0;
        for (var i=0; i<profession_arr.length; i++) {
            professionElement.options[professionElement.length] =
            new Option(profession_arr[i],profession_arr[i]);
        }

// Form validation
var form = document.querySelector('.needs-validation');

form.addEventListener('submit', function(event){
    if(form.checkValidity() === false){
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
})

// range control spinner value
var slider = document.getElementById("coefMalus");
        var output = document.getElementById("valeurMalus");
        output.innerHTML = slider.value;
        slider.oninput = function() {
            output.innerHTML = this.value;
        }