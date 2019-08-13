<?php

$mysqli = new mysqli('localhost','root','infernos1','balandingassurance');

$civilite = $_POST['civilite'];
$name = $_POST['nom'];
$prenom = $_POST['prenom'];
$nomsociete = $_POST['nomsociete'];
$adresse = $_POST['adresse'];
$ville = $_POST['ville'];
$code_postal = $_POST['codepostal'];
$date_de_naissance = $_POST['datedenaissance'];
$tel1 = $_POST['tel1'];
$tel2 = $_POST['tel2'];
$email = $_POST['email'];
$email2 = $_POST['email2'];
$date_obt_permis = $_POST['datepermis'];
$profession = $_POST['profession'];
$usage_vehicule = $_POST['usagevehicule'];
$marque_voi = $_POST['marque'];
$model_voi = $_POST['model'];
$energie = $_POST['energie'];
$coefmalus = $_POST['coefmalus'];
$motif_resil = $_POST['motifresil'];
$info_comp = $_POST['infocomp'];
$term_condition = $_POST['acceptterms'];

// message that will be displayed when everything is OK :)
$okMessage = 'Votre demande a été envoyer.Merci!';

// If something goes wrong, we will display this message.
$errorMessage = 'il y a eu un probleme avec votre demande. Rééssayez SVP';

try
{

    if(count($_POST) === 0) throw new \Exception('Form is empty');

    $result = $mysqli->query("insert into motoform values('','$civilite','$name','$prenom','$nomsociete','$adresse','$ville','$code_postal','$date_de_naissance','$tel1','$tel2','$email','$email2','$date_obt_permis','$profession','$usage_vehicule','$marque_voi','$model_voi','$energie','$coefmalus','$motif_resil','$info_comp','$term_condition')");

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
// else just display the message
else {
    echo $responseArray['message'];
}
