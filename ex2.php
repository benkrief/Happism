<?php
require 'db.class.php';
require 'panier.class.php';
$DB = new DB();
$panier= new panier($DB);
?>

<html>

  <head>
    <title>Four Seasons Safari</title>
    <link rel="stylesheet" href="Hebergement.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Prociono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Advent+Pro&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lobster+Two&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merienda&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Yeseva+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Amaranth&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Gabriela&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700&display=swap" rel="stylesheet">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!--<script>
      function get_results(){
        lieu_heb = document.getElementById("lieuheb").value;
        console.log(lieu_heb);  
        console.log(typeof lieu_heb);
        document.getElementById("filtre").classList.remove("cache");
        document.getElementById("offres").classList.remove("cache");
        document.getElementById("filtre").classList.add("filtre_change");
        document.getElementById("pfiltre").classList.add("pfiltre_change");
        document.getElementById("sectionfiltre").classList.add("sectionfiltre_change");
        document.getElementById("l1").innerHTML = " ";
        document.getElementById("tr1").classList.add("cache"); 
        document.getElementById("detail").classList.add("cache");
        document.getElementById("resultatrecherche").classList.add("cache");
      }
      
      
      function setHebPays(){
        for (var i=0; i<document.getElementsByName("client").length; i++){
          if(document.getElementsByName("client")[i].checked){
            var verif = 1;
            nbclient = parseInt(document.getElementsByName("client")[i].value,10);
          }
        }
        if (verif===1){
          document.getElementById("resultatrecherche").classList.remove("cache");
          document.getElementById("filtre").classList.remove("filtre");
          document.getElementById("filtre").classList.add("filtre1");
          document.getElementById("tr1").classList.remove("cache");   
          document.getElementById("detail").classList.remove("cache");  
          dureeheb = parseInt(document.getElementById("tps_heb").value,10);
          console.log(dureeheb);
          prixsolo=1150;
          prixheb=(1150*dureeheb*nbclient); document.getElementById("l1").innerHTML="<li class='heb tanzanie luxe '><object id='lieu1'> Four Seasons Safari</object><div class='tanzanie descri' id='descri50'>Niché dans le parc national du Serengeti offrant une faune variée et une vue panoramique sur les paysages, le Four Seasons Safari Lodge Serengeti possède un spa. Le Maji Bar, en plein air, donne sur la piscine à débordement et la savane.Les chambres élégantes et climatisées sont décorées dans un style africain et dotées d'un canapé, d'une télévision à écran plat, d'un minibar et d'un coffre-fort. Toutes disposent d'une salle de bains privative avec baignoire et douche.Au Boma Grill du Four Seasons Safari Lodge, vous profiterez d'une expérience culturelle Massaï comprenant une fête africaine authentique et des danses Massaï. Bénéficiant d'une vue spectaculaire, le restaurant Kula's propose un menu aux saveurs locales et des vins internationaux. Une cave à vin, où vous pourrez découvrir des mariages de mets et vins, est en outre présente. Le Serengeti présente une faune variée, avec notamment des éléphants, des lions et des guépards. Sur place, des promenades guidées et des safaris pourront être organisés sur demande préalable et moyennant un supplément. Des transferts depuis la piste d'atterrissage peuvent également être prévus moyennant des frais supplémentaires.50</div>"+"<div class='leprix'>Prix: <object class='prixheb' id='heb1'> "+ prixheb +"</object>€ <span class='prixsolo'>(Prix pour 2 personnes et une nuit: "+ prixsolo +"€)</span></div><button class='panier' onclick='pan1()'> Dans le panier !</button></li>";
        }
        else{
          alert("Veuillez répondre aux questions juste en dessous :)");
        }
      }
    </script>
    <script type="text/javascript" src="filtres.js"></script>-->
  
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

    <div class="contenu">

      <div class="lieu">
        <form action="ex2.php" method="POST">
          <div id="lieuheb_quest"> Je souhaite rechercher un hébergement à  : 
            <select id="lieuheb" name="lieu">
              <option value="tanzanie" selected>Au coeur de la Savane</option>
            </select>
            <input type=submit name="dest" value="Let's GO !" id="b_research">  
          </div>
        </form>
      </div>
    </div>  
  
  
    <div class="cache" id="filtre">
      <span id="pfiltre">Plus de Filtres :</span>
      <div id="sectionfiltre">
        <!--question 1 -->
        <section class="q">
          <label for="Tps de l'hebergement" class="question" >Durée de votre hébergement : </label> 
        </section>
        <section class="rep">
          <input type="text" id="tps_heb" placeholder="... nuit">
        </section> 
        <!--question 2-->
        <section class="q">
          <label for="nbdepersonne" class="question"> Vous êtes  : </label>
        </section>
        <section class="rep">
          <input type="radio" id="adultesimple" name="client" value="1">1 ou 2 Adultes <br/>
          <input type="radio" id="adultedouble" name="client" value="2">3 ou 4 Adultes <br/>
          <input type="radio" id="adultestriple" name="client" value="3">5 ou 6 Adultes <br/>
        </section>
        <button onclick="setHebPays()" id="searchbouton">Rechercher</button>
      </div>
    </div>
  
    <?php
      if (isset($_POST['dest'])){
        $choix = $_POST['lieu'];
        echo'<h1 id ="resultatrecherche"> Résultat de votre recherche à <span class="ville">'.$choix.'</span>: </h1> ';
        $hot_products= $DB->query("SELECT * FROM hotel WHERE lieuhot= '$choix'");
        echo  '<div id="offres" >';
        foreach($hot_products as $hotel):
          if($hotel->chambtot > 0 && $hotel->prixhot == 1150){
            echo "<div class='heb'>
            <p class='nomheb'>".$hotel->nomhot."</p>
            <p class='descri'>".$hotel->hot_desc." </p><br>
            <p class='leprix'> Prix: ".$hotel->prixhot." €</p>
            <button class='panier'><a class='addPanier' href='addpanier.php?nhot=".$hotel->nhot."'>Ajouter Au Panier ! </a></button></div>";
            echo "\n"."<br><br>";
          }
        endforeach; 
        echo "<p id='detail'>*Les prix indiqués sont pour une nuit dans une chambre avec un lit double*</p>";
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
