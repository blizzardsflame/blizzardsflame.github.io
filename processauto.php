<?php

$mysqli = new mysqli('localhost','root','infernos1','balandingassurance');

$civilite = $_POST['civilite'];
$name = $_POST['nom'];
$prenom = $_POST['prenom'];
$adresse = $_POST['adresse'];
$ville = $_POST['ville'];
$code_postal = $_POST['codepostal'];
$date_de_naissance = $_POST['datedenaissance'];
$tel1 = $_POST['tel1'];
$tel2 = $_POST['tel2'];
$email = $_POST['email'];
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

$result = $mysqli->query("insert into autoform values('','$civilite','$name','$prenom','$adresse','$ville','$code_postal','$date_de_naissance','$tel1','$tel2','$email','$date_obt_permis','$profession','$usage_vehicule','$marque_voi','$model_voi','$energie','$coefmalus','$motif_resil','$info_comp','$term_condition')");
if($result){
  ?>
  <div class="alert alert-success alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Terminer!</strong> votre demande a été envoyer.
  </div>
  <?php
} else{
  ?>
  <div class="alert alert-danger alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Erreur!</strong> veuillez remplir tous les champs requis.
  </div>
  <?php
}

?>