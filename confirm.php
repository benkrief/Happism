<?php
  session_start();
  require 'db.class.php';
  require 'panier.class.php';
  $DB = new DB();
  $act_panier= new panier($DB);
  $hot_panier= new panier($DB);
  $vol_panier= new panier($DB);
  $panier = new panier($DB);
  $host = "localhost";
  $user = "id15007388_ben";
  $password = "pG?{Qz6}9Nge7s63";
  $database = "id15007388_happism";

  $tb="client";
  $email=$_SESSION['email'];
  $sql=$DB->query("SELECT nclient FROM client Where email='$email'");
  foreach ($sql as $client):
    $nclient=$client->nclient;
  endforeach;

  $mysqli = new mysqli($host, $user, $password, $database);
  if ($mysqli ->connect_errno) {
    die ("Echec lors de la connexion ". $mysqli->connect_error);
  }
?>

<html>
  <head>
    <title>Votre Réservation</title>
    <link rel="stylesheet" href="Panier.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Prociono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Advent+Pro&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Advent+Pro&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Trocchi&display=swap" rel="stylesheet">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
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
        <li><a href="Panier.php"><img class="icons" src="https://image.flaticon.com/icons/svg/1077/1077979.svg" alt="panier" width="15"> Votre panier </a> </li>
      </ul>
    </div>
    <form method="post" action="Panier.php">

    <?php 
      if(isset($_POST["out"])){
        session_destroy(); 
        unset($_SESSION);
        echo"<meta http-equiv='refresh' content='0; url=Panier.php'>";
      } 
      else{
        echo '<div id="nom_c"><p> Bonjour '.$_SESSION["prenom"].' !</p></div>';
      }
    ?>

    <div id="deco">
        <input id="b_deco" type="submit" name="out" value="Déconnexion">
    </div>
    </form>
  
  
    <form method="post" action="Panier.php">
      <div class="table">
        <div class="pan">

        <!-- PANIER VOL -->

          <?php 
            if(!empty($_SESSION['panvol'])){
              echo("<div class='titre' id='vol'>
              <span class='cnom_dep_vol'>Destination de Départ</span>
              <span class='cnom_arr_vol'>Destination d'Arrivée</span>
              <span class='cprix_vol'>Prix</span>
              <span class='cqte_vol'>Quantité</span>
              </div>");
            }
            else{
              $nvol=0;
              $jour="NULL"; 
            }
          ?>
          
          <?php 
            $ids_vol = array_keys($_SESSION['panvol']);
            if(empty($ids_vol)){
              $products_vol = array();
            }
            else{
              $products_vol = $DB->query('SELECT * FROM vol WHERE nvol IN ('.implode(',',$ids_vol).')');
            }
            foreach($products_vol as $vol):
              if($vol->vol_placetot > 0){
                $nvol=$vol->nvol;
                $jour=$vol->jour;
                $vqte=$_SESSION['panvol'][$vol->nvol];
       
          ?>

          <div class="prod">
            <span class="cprod_dep_vol"><?= $vol->lieudep; ?></span>
            <span class="cprod_arr_vol"><?= $vol->lieuar; ?></span>
            <span class="cprix_prod_vol"><?="Classe ".$_SESSION['typevol']." ".number_format($_SESSION['prixvol'],2,',',' ');?> €</span>
            <span class="cqte_prod_vol"><?= $_SESSION['panvol'][$vol->nvol]; ?></span>
          </div>

          <?php 
            }
            endforeach;
          ?> 

          <!-- PANIER HEBERGEMENT -->

          <?php 
            if(!empty($_SESSION['panhot'])){
              echo("<div class='titre' id='hotel'>
                <span class='cnom_hot'>Nom de l'Hotel</span>
                <span class='cprix_hot'>Prix</span>
                <span class='cqte_hot'>Quantité</span>
                </div>");
            }
            else{
              $nhot=0;
              }  
          ?>

          <?php 
            $ids_hot = array_keys($_SESSION['panhot']);
            if(empty($ids_hot)){
              $products_hot = array();
            }
            else{
              $products_hot = $DB->query('SELECT * FROM hotel WHERE nhot IN ('.implode(',',$ids_hot).')');
            }
            foreach($products_hot as $hotel):
              if($hotel->chambtot > 0){
                $nhot=$hotel->nhot;
                $hqte=$_SESSION['panhot'][$hotel->nhot];
        
          ?>
        
          <div class="prod">
            <span class="cnom_prod_hot"><?= $hotel->nomhot; ?></span>
            <span class="cprix_prod_hot"><?= number_format($hotel->prixhot,2,',',' '); ?> €</span>
            <span class="cqte_prod_hot"><?= $_SESSION['panhot'][$hotel->nhot]; ?></span>
          </div>

          <?php 
            }
            endforeach;
          ?>

          <!-- PANIER ACTIVITE -->

          <?php 
            if(!empty($_SESSION['panact'])){
              echo("<div class='titre' id='act'>
                <span class='cnom_act'>Nom de l'activité</span>
                <span class='cprix_act'>Prix</span>
                <span class='cqte_act'>Quantité</span>
                </div>");
            }
            else{
              $nact=0;
            }  
          ?>

          <?php
            $ids_act = array_keys($_SESSION['panact']);
            if(empty($ids_act)){
              $products_act = array();
            }
            else{
              $products_act = $DB->query('SELECT * FROM activite WHERE nact IN ('.implode(',',$ids_act).')');
            }
            foreach($products_act as $activite):
              if($activite->act_placetot > 0){
                $nact=$activite->nact;
                $aqte=$_SESSION['panact'][$activite->nact];
          ?>

          <div class="prod">
            <span class="cnom_prod_act"><?= $activite->nomact; ?></span>
            <span class="cprix_prod_act"><?= number_format($activite->prixact,2,',',' '); ?> €</span>
            <span class="cqte_prod_act"><?= $_SESSION['panact'][$activite->nact]; ?></span>
          </div>
    
          <?php 
            }
            endforeach;
          ?>
      
          <!-- GESTION DES STOCKS -->

          <div class="total">
            <span class="tot_prod">Total TTC : <?= number_format($panier->total() * 1.2,2,',',' '); ?> € </span>

            <?php 
              $resa = $DB->query("SELECT * FROM reservation WHERE nclient='$nclient'");
              if (!$resa) {
                echo "<p>Impossible de faire cette reservation</p>" ;
              }
              else { 
                echo "<p class='com_conf'>Vous avez donc confirmé votre réservation, merci beaucoup ! A très vite sur Happism :)</p>";
                if ($nact!=0){
                  $qact=$mysqli->query("UPDATE activite SET act_placeres = act_placeres + $aqte  WHERE activite.nact = $nact");
                }
                if ($nhot!=0){
                  $hact=$mysqli->query("UPDATE hotel SET chambres = chambres + $hqte  WHERE hotel.nhot = $nhot");
                }
                if ($nvol!=0){
                  if ($_SESSION['typevol']="Économique"){
                    $qvol=$mysqli->query("UPDATE vol SET eco_placeres = eco_placeres + $vqte  WHERE vol.nvol = $nvol");
                  }
                  if ($_SESSION['typevol']="Économique Premium"){
                    $qvol=$mysqli->query("UPDATE vol SET ecop_placeres = ecop_placeres + $vqte WHERE vol.nvol = $nvol");
                  }
                  if ($_SESSION['typevol']="Business"){
                    $qvol=$mysqli->query("UPDATE vol SET busi_placeres = busi_placeres + $vqte   WHERE vol.nvol = $nvol");
                  }
                  $qact=$mysqli->query("UPDATE vol SET vol_placeres = vol_placeres + $vqte  WHERE vol.nvol = $nvol");
                }
              }
            ?>
          </div>
        </div>
      </div>
    </form>
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