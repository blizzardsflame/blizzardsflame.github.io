//Profession
var profession_arr = new Array(
    "Artisant sédentaire","Artisant non sédentaire","Commerçant",
    "Commerçant non sédentaire","Ecclésiastique","Etudiant",
    "Exploitant agricole","Fonctionnaire","Fonctionnaire non sédentaire",
    "Forain","Profession libérale","Profession libérale non sédentaire",
    "Retraité","Salarié","Salarié non sédentaire","Sans profession",
    "Taxi","TPM","Véhicule société","VRP");

    function populateProfession(professionElementId){
        // given the id of the <select> tag as function argument, it inserts <option> tags
        var professionElement = document.getElementById(professionElementId);
        professionElement.length=0;
        professionElement.options[0] = new Option('Selectioner une profession','-1');
        professionElement.selectedIndex = 0;
        for (var i=0; i<profession_arr.length; i++) {
            professionElement.options[professionElement.length] =
            new Option(profession_arr[i],profession_arr[i]);
        }
    }