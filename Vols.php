<?php
require 'db.class.php';
require 'panier.class.php';
$DB = new DB();
$panier= new panier($DB);
?>

<html>
  <head>
    <title>Vols</title>
    <link rel="stylesheet" href="Vols.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Prociono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Advent+Pro&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lobster+Two&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merienda&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Courgette&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Gabriela&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Yeseva+One&display=swap" rel="stylesheet">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
  </head>

  <body>
    <div id="banniere">
      <div id="logo">
        <p>Happism</p>
      </div>
      <div id="slogan"> 
        <p>Happism, c'est voyager avec charisme</p>
      </div>
    </div>

    <div class="menu_onglet">
      <ul class="menu_onglet">
        <li><a href="index.html"><img class="icons" src="https://image.flaticon.com/icons/svg/25/25694.svg" alt="home" width="15"> Home</a></li>
        <li><a href="Vols.php"><img class="icons" src="https://image.flaticon.com/icons/svg/67/67076.svg" alt="vols" width="15"> Vols</a></li>
        <li><a href="Hebergement.php"><img class="icons" src="https://image.flaticon.com/icons/svg/632/632339.svg" alt="hébergements" width="15"> Hébergements</a></li>
        <li><a href="Activite.php"><img class="icons" src="https://image.flaticon.com/icons/svg/71/71422.svg" alt="activités" width="15"> Activités</a></li>
        <li><a href="Vsav.php"><img class="icons" src="https://image.flaticon.com/icons/svg/149/149829.svg" alt="séjour perso" width="15"> Votre séjour à vous...</a></li>
        <li><a href="Panier.php"><img class="icons" src="https://image.flaticon.com/icons/svg/1077/1077979.svg" alt="panier" width="15"> Votre panier </a></li>
      </ul>
    </div>

    <div id="lieu">
    <form action="Vols.php" method="POST">
      <span id="lieuvol_quest"> Je souhaite partir </span><br/> 
        <span id="lieu_depart"> de : </span>
          <select class="selection" name="depart" id="ldepart" required>
          <option value="choix" selected>--Choisir--</option>
          <option value="athenes">Athènes</option>
          <option value="bahamas">Bahamas</option>
          <option value="berlin">Berlin</option>
          <option value="cancun">Cancùn</option>
          <option value="helsinki">Helsinki</option>
          <option value="johannesbourg">Johannesburg</option>
          <option value="los angeles">Los Angeles</option>
          <option value="marrakech">Marrakech</option>
          <option value="montreal">Montréal</option>
          <option value="new york">New York</option>
          <option value="paris">Paris</option>
          <option value="pekin">Pékin</option>
          <option value="rome">Rome</option>
          <option value="sao Paulo">Sao Paulo</option>
          <option value="tanzanie">Au coeur de la Savane</option>
          </select>
        <span id="lieu_arrivee"> à : </span>
        <select class="selection" name="arrivee" id="larrivee" required>
        <option value="choix" selected>--Choisir--</option>
          <option value="athenes">Athènes</option>
          <option value="bahamas">Bahamas</option>
          <option value="berlin">Berlin</option>
          <option value="cancun">Cancùn</option>
          <option value="helsinki">Helsinki</option>
          <option value="johannesbourg">Johannesburg</option>
          <option value="los angeles">Los Angeles</option>
          <option value="marrakech">Marrakech</option>
          <option value="montreal">Montréal</option>
          <option value="new york">New York</option>
          <option value="paris">Paris</option>
          <option value="pekin">Pékin</option>
          <option value="rome">Rome</option>
          <option value="sao Paulo">Sao Paulo</option>
          <option value="tanzanie">Au coeur de la Savane</option>
        </select>
        <input id="b_research" type=submit name="dest" value=" Let's go !">
</form>
    </div>
  
  <?php 
    if(isset($_POST['dest'])){
      $dep = $_POST['depart'];
      $arr = $_POST['arrivee'];
      if ($dep==$arr){
        echo("<script>alert(\"Le départ et l'arrivée doivent être different\")</script>");
      }
      else
      {
        echo "<h1 id ='resultatrecherche'> Résultat de votre recherche de <span class='ville'>".$dep."</span> à <span class='ville'>".$arr."</span>: </h1>";
        $products = $DB->query("SELECT * FROM vol WHERE lieudep='$dep' AND lieuar='$arr'");
        echo "<div id='offres'>";
        foreach($products as $vol):
          if($vol->vol_placetot > $vol->vol_placeres && $vol->hdep == '09:00:00'){
            echo "<div id='matin'>
            <div class='vol'>
            <div class='compagnie'>".$vol->compagnie." Départ : ".$vol->hdep."
            <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> ".$vol->har."</div></div>
            <div class='diffclasses>";
            if($vol->eco_placetot > $vol->eco_placeres){
              echo "<div class= 'eco'><p class='categorie eco' id='eco_matin'> Classe économique </p>
              <p class='prix'> Prix : <span class='prixvol' id='prixecomat'>".$vol->prixeco."€ </span></p>
              <form action='addpanier.php?nvol=".$vol->nvol."' method='Post'>
              <input class='panier' type='submit' value='Ajouter Au Panier !' name='prix_eco'></form></div>";
            }
            else{
              echo "<div class= 'eco'><p class='categorie eco' id='eco_matin'> Classe économique </p>
              <p class='rupt'> Il n'y a plus de billets pour cette catégorie... </p></div>";
            }
            if($vol->ecop_placetot > $vol->ecop_placeres){
              echo "<div class= 'ecop'><p class='categorie ecop' id='ecoprem_matin'> Classe économique premium </p>
              <p class='prix'> Prix : <span class='prixvol' id='prixecopremmat'>".$vol->prixecop."€ </span></p>
              <form action='addpanier.php?nvol=".$vol->nvol."' method='Post'>
              <input class='panier' type='submit' value='Ajouter Au Panier !' name='prix_ecop'></form></div>";
            }
            else{
              echo "<div class= 'ecop'><p class='categorie' id='ecoprem_matin'> Classe économique premium </p>
              <p class='rupt'> Il n'y a plus de billets pour cette catégorie... </p></div>";
            }
            if($vol->busi_placetot > $vol->busi_placeres){
              echo "<div class= 'busi'><p class='categorie' id='business_matin'> Classe affaire </p>
              <p class='prix'> Prix : <span class='prixvol' id='prixaffmat'>".$vol->prixbusi."€ </span></p>
              <form action='addpanier.php?nvol=".$vol->nvol."' method='Post'>
              <input class='panier' type='submit' value='Ajouter Au Panier !' name='prix_busi'></form></div>";
            }
            else if($vol->busi_placetot == 0){
              echo "<div class= 'busi'><p class='categorie' id='business_matin'> Classe affaire </p>
              <p class='rupt'> Il n'y a plus de billets pour cette catégorie... </p></div>";
            }
            echo "</div>";
          }
          if($vol->vol_placetot > $vol->vol_placeres && $vol->hdep == '14:00:00'){
            echo "<div id='aprem'>
            <div class='vol'>
            <div class='compagnie'>".$vol->compagnie." Départ : ".$vol->hdep."
            <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> ".$vol->har."</div></div>
            <div class='diffclasses>";
            if($vol->eco_placetot > $vol->eco_placeres){
              echo "<div class= 'eco'><p class='categorie' id='eco_aprem'> Classe économique </p>
              <p class='prix'> Prix : <span class='prixvol' id='prixecoaprem'>".$vol->prixeco."€ </span></p>
              <form action='addpanier.php?nvol=".$vol->nvol."' method='Post'>
              <input class='panier' type='submit' value='Ajouter Au Panier !' name='prix_eco'></form></div>";
            }
            else{
              echo "<div class= 'eco'><p class='categorie' id='eco_aprem'> Classe économique </p>
              <p class='rupt'> Il n'y a plus de billets pour cette catégorie... </p></div>";
            }
            if($vol->ecop_placetot > $vol->ecop_placeres){
              echo "<div class= 'ecop'><p class='categorie' id='ecoprem_aprem'> Classe économique premium </p>
              <p class='prix'> Prix : <span class='prixvol' id='prixecopremaprem'>".$vol->prixecop."€ </span></p>
              <form action='addpanier.php?nvol=".$vol->nvol."' method='Post'>
              <input class='panier' type='submit' value='Ajouter Au Panier !' name='prix_ecop'></form></div>";
            }
            else{
              echo "<div class= 'ecop'><p class='categorie' id='ecoprem_aprem'> Classe économique premium </p>
              <p class='rupt'> Il n'y a plus de billets pour cette catégorie... </p></div>";
            }
            if($vol->busi_placetot > $vol->busi_placeres){
              echo "<div class= 'busi'><p class='categorie' id='business_aprem'> Classe affaire </p>
              <p class='prix'> Prix : <span class='prixvol' id='prixaffaprem'>".$vol->prixbusi."€ </span></p>
              <form action='addpanier.php?nvol=".$vol->nvol."' method='Post'>
              <input class='panier' type='submit' value='Ajouter Au Panier !' name='prix_busi'></form></div>";
            }
            else if($vol->busi_placetot == 0){
              echo "<div class= 'busi'><p class='categorie' id='business_aprem'> Classe affaire </p>
              <p class='rupt'> Il n'y a plus de billets pour cette catégorie... </p></div>";
            }
            echo "</div>";
          }
          if($vol->vol_placetot > $vol->vol_placeres && $vol->hdep == '20:00:00'){
            echo "<div id='soir'>
            <div class='vol'>
            <div class='compagnie'>".$vol->compagnie." Départ : ".$vol->hdep."
            <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'>  ".$vol->har."</div></div>
            <div class='diffclasses>";
            if($vol->eco_placetot > $vol->eco_placeres){
              echo "<div class= 'eco'><p class='categorie' id='eco_soir'> Classe économique </p>
              <p class='prix'> Prix : <span class='prixvol' id='prixecosoir'>".$vol->prixeco."€ </span></p>
              <form action='addpanier.php?nvol=".$vol->nvol."' method='Post'>
              <input class='panier' type='submit' value='Ajouter Au Panier !' name='prix_eco'></form></div>";
            }
            else{
              echo "<div class= 'eco'><p class='categorie' id='eco_soir'> Classe économique </p>
              <p class='rupt'> Il n'y a plus de billets pour cette catégorie... </p></div>";
            }
            if($vol->ecop_placetot > $vol->ecop_placeres){
              echo "<div class= 'ecop'><p class='categorie' id='ecoprem_soir'> Classe économique premium </p>
              <p class='prix'> Prix : <span class='prixvol' id='prixecopremsoir'>".$vol->prixecop."€ </span></p>
              <form action='addpanier.php?nvol=".$vol->nvol."' method='Post'>
              <input class='panier' type='submit' value='Ajouter Au Panier !' name='prix_ecop'></form></div>";
            }
            else{
              echo "<div class= 'ecop'><p class='categorie' id='ecoprem_soir'> Classe économique premium </p>
              <p class='rupt'> Il n'y a plus de billets pour cette catégorie... </p></div>";
            }
            if($vol->busi_placetot > $vol->busi_placeres){
              echo "<div class= 'busi'><p class='categorie' id='business_soir'> Classe affaire </p>
              <p class='prix'> Prix : <span class='prixvol' id='prixaffsoir'>".$vol->prixbusi."€ </span></p>
              <form action='addpanier.php?nvol=".$vol->nvol."' method='Post'>
              <input class='panier' type='submit' value='Ajouter Au Panier !' name='prix_busi'></form></div>";
            }
            else if($vol->busi_placetot == 0){  
              echo "<div class= 'busi'><p class='categorie' id='business_soir'> Classe affaire </p>
              <p class='rupt'> Il n'y a plus de billets pour cette catégorie... </p></div>";
            }
            echo "</div></div>";
          }
        endforeach;
     }
  }
  ?>
  
</body>

<footer>
  <div class="bas">
    <table>
      <tr>
        <td>Un problème, une question, une info ? <a href="CN.html"><button class="bouton_bas">Contactez nous ! </button></a></td>
        <td>Pour ne jamais rater l'occasion de profiter, <a href="News.html"><button class="bouton_bas">  Abonnez-vous </button></a></td>
        <td>Conditions générales de vente. <a href="CGV.html"><button class="bouton_bas">  CGV </button></a></td>
        <td>Votre avis compte pour nous et nous sert à améliorer au quotidien votre site préferé. Merci <a href="fdbk.html"><button class="bouton_bas"> Votre Avis !</button></a></td>
      </tr>
    </table>
  </div>
  </footer>
</html>