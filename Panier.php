<?php
session_start();
require 'db.class.php';
require 'panier.class.php';
$DB = new DB();
$act_panier= new panier($DB);
$hot_panier= new panier($DB);
$vol_panier= new panier($DB);
$panier=new panier($DB);
$host = "localhost";
$user = "id15007388_ben";
$password = "pG?{Qz6}9Nge7s63";
$database = "id15007388_happism";
$tb="client";
if (isset($_SESSION['email'])){ $email=$_SESSION['email'];}

$mysqli = new mysqli($host, $user, $password, $database);
if ($mysqli ->connect_errno) {
    die ("Echec lors de la connexion ". $mysqli->connect_error);
}
?>

<html>
  <head>
    <title>Votre Panier</title>
    <link rel="stylesheet" href="Panier.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Prociono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Advent+Pro&display=swap" rel="stylesheet">
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

    <?php 
      if (isset($_SESSION['email'])){
        require "panhead.php";
      }
      if (!isset($_SESSION['email'])){ 
        require "signin.php";
        require "login.php";         
      }
      else{
        require 'pancode.php';
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