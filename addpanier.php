<?php
require 'db.class.php';
require 'panier.class.php';
$DB = new DB();
$act_panier= new panier($DB);
$hot_panier= new panier($DB);
$vol_panier= new panier($DB);
?>

<html>
  <head>
    <title>Continuons ?</title>
    <link rel="stylesheet" href="Panier.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Prociono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Advent+Pro&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lobster+Two&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merienda&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Yeseva+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Forum&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Amaranth&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Trocchi&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Gabriela&display=swap" rel="stylesheet">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script type="text/javascript" src="filtres.js"></script>  
  </head>
  
  <body>
    <div id="banniere">
      <section id="logo">
        <p>Happism</p>
      </section>
      <section id="slogan"> 
        <p>Happism, c'est voyager avec charisme</p>
      </section>
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

    <?php
    /* PANIER ACTIVITES */
      if (isset($_GET['nact'])){
        $product_act = $DB->query("SELECT nact FROM activite WHERE nact=$_GET[nact]");
        if(empty($product_act)){
          die("<p>Ce produit est en rupture de stock, nous nous excusons pour la gêne occasionée... <a href='javascript:history.back()'><img src='flr.png'></a> Retournons au shopping</p>");
        }
        else{
          $act_panier->act_add($product_act[0]->nact);
          die("<h2 id='prod_ajt'> Le produit a bien été ajouté au panier </h2><br>
            <div id='choice'>
            <div id='keep_shop'><a href='javascript:history.back()'><img src='a_left.png' id='ar_back'></a><p id='p_keep'> Continuer le shopping </p></div>
            <div id='go_pan'><a href='Panier.php'><img src='a_right.png' id='ar_frw'></a><p id='p_pan'> Aller voir le panier </p></div>
            <div id='go_acc'><a href='index.html'><img src='https://image.flaticon.com/icons/svg/25/25694.svg' alt='home' width=100'></a><p class='p_leg'> Retourner à  l'accueil </p></div>
            </div><br>
          ");
        }
      }
    /* PANIER HEBERGEMENT */
      else if (isset($_GET['nhot'])){
        $product_hot = $DB->query("SELECT nhot FROM hotel WHERE nhot=$_GET[nhot]");
        if(empty($product_hot)){
          die("<p>Ce produit est en rupture de stock, nous nous excusons pour la gêne occasionée... <a href='javascript:history.back()'><img src='flr.png'></a> Retournons au shopping</p>");
        }
        else{
          $hot_panier->hot_add($product_hot[0]->nhot);
          die("<h2 id='prod_ajt'> Le produit a bien été ajouté au panier </h2><br>
            <div id='choice'>
            <div id='keep_shop'><a href='javascript:history.back()'><img src='a_left.png' id='ar_back'></a><p id='p_keep'> Continuer le shopping </p></div>
            <div id='go_pan'><a href='Panier.php'><img src='a_right.png' id='ar_frw'></a><p id='p_pan'> Aller voir le panier </p></div>
            <div id='go_acc'><a href='index.html'><img src='https://image.flaticon.com/icons/svg/25/25694.svg' alt='home' width=100'></a><p class='p_leg'> Retourner à  l'accueil </p></div>
            </div><br>
          ");
        }
      }
      /* PANIER VOL */
        else if (isset($_GET['nvol'])){
          $product_vol = $DB->query("SELECT nvol FROM vol WHERE nvol=$_GET[nvol]");
          if(empty($product_vol)){
            die("<p>Ce produit est en rupture de stock, nous nous excusons pour la gêne occasionée... <a href='javascript:history.back()'><img src='flr.png'></a> Retournons au shopping</p>");
          }
          else{
            $vol_panier->vol_add($product_vol[0]->nvol);
            echo("<h2 id='prod_ajt'> Le produit a bien été ajouté au panier </h2><br>
              <div id='choice'>
              <div id='keep_shop'><a href='javascript:history.back()'><img src='a_left.png' id='ar_back'></a><p class='p_leg'> Continuer le shopping </p></div>
              <div id='go_pan'><a href='Panier.php'><img src='a_right.png' id='ar_frw'></a><p class='p_leg'> Aller voir le panier </p></div>
              <div id='go_acc'><a href='index.html'><img src='https://image.flaticon.com/icons/svg/25/25694.svg' alt='home' width=100'></a><p class='p_leg'> Retourner à  l'accueil </p></div>
              </div><br>
            ");
            /* ECONOMIQUE */
            if (isset($_POST['prix_eco'])){
              $prixvol= $DB->query("SELECT prixeco FROM vol WHERE nvol=$_GET[nvol]");
              $_SESSION['prixvol']=$prixvol[0]->prixeco;
              $_SESSION['typevol']="Économique";
            }
            /* ECONOMIQUE PREMIUM */
            else if (isset($_POST['prix_ecop'])){
              $prixvol= $DB->query("SELECT prixecop FROM vol WHERE nvol=$_GET[nvol]");
              $_SESSION['prixvol']=$prixvol[0]->prixecop;
              $_SESSION['typevol']="Économique Premium";
            }
            /* BUSINESS */
            else if (isset($_POST['prix_busi'])){
              $prixvol= $DB->query("SELECT prixbusi FROM vol WHERE nvol=$_GET[nvol]");
              $_SESSION['prixvol']=$prixvol[0]->prixbusi;
              $_SESSION['typevol']="Business";
            }
            else{
              echo("Il n'y a pas de prix pour ce vol");
            }
          }
        }
        else {
          die("Vous n'avez pas sélectionné de produit à ajouter au panier" ); 
        }
    ?>
