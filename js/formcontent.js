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

// range control spinner value
const slider = document.getElementById("coefmalus");
const output = document.getElementById("valeurMalus");
        output.innerHTML = slider.value;
        slider.oninput = function() {
            output.innerHTML = this.value;
        };

//civilité option

$("#monsieur").click(function() {
    $("#nomsociete").prop("disabled", true);
    $("#nomsociete").prop('required', false);
    $("#nom").prop("disabled", false);
    $("#prenom").prop("disabled", false);
});
$("#madame").click(function() {
    $("#nomsociete").prop("disabled", true);
    $("#nomsociete").prop('required', false);
    $("#nom").prop("disabled", false);
    $("#prenom").prop("disabled", false);
});
$("#societe").click(function() {
    $("#nomsociete").prop("disabled", false);
    $("#nom").prop("disabled", true);
    $("#prenom").prop("disabled", true);
    $("#nom").prop("required", false);
    $("#prenom").prop("required", false);
});




