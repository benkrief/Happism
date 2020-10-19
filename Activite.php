<?php
require 'db.class.php';
require 'panier.class.php';
$DB = new DB();
$panier= new panier($DB);
?>

<html>
  <head>
    <title>Activités</title>
    <link rel="stylesheet" href="Activite.css" type="text/css">
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
  
    <div class="contenu">

      <div class="lieu">
        <form action="Activite.php" method="POST"> 
          <div id="lieuact_quest"> Je souhaite rechercher une activité à  : 
          <select id="lieuact" name="lieu" required>
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
          <input type=submit name="dest" value="Let's GO !" id="b_research">
          </div> 
        </form>
      </div>
   
      <div class="cache filtre" id="filtre">
        <span id="pfiltre">Plus de Filtres :</span>
          <div id="sectionfiltre">
            <!--question 1-->
            <section class="q">
              <label class="nb_personne question">Combien serez vous ?</label>
              <button class="compter" onclick="compteur(-1)">-</button><span id="nb_personne"> 1</span><button class="compter" onclick="compteur(1)">+</button>  
            </section>
         
            <!--question 2-->
            <section class="q">
              <label for="Type d'acti" class="question">Vous préferez : (facultatif)</label>
            </section>
            <section class="rep">
              <input type="checkbox" id="Touristique" value="tourist" name="acti" onchange="type_act('Touristique')">
                <label for="tourist"> Une activité touristique</label><br/>
              <input type="checkbox" id="Culturel" value="culture" name="acti" onchange="type_act('Culturel')">
                <label for="culture"> Une activité culturelle</label><br/>
              <input type="checkbox" id="Sportif" value="sport" name="acti" onchange="type_act('Sportif')">
                <label for="sport"> Une activité sportive</label><br/>
              <input type="checkbox" id="Gustative" value="restau" name="acti" onchange="type_act('Gustative')">
                <label for="restau"> Une activité gustative</label><br/>
              <input type="checkbox" id="Fun" value="fun" name="acti" onchange="type_act('Fun')">
                <label for="fun"> Une activité divertissante</label>
            </section>
            <button onclick="setActiPays()" id="searchbouton">Rechercher</button>
          </div>
      </div>

    </div>
    <?php
      if (isset($_POST['dest'])){
        $choix = $_POST['lieu'];
        echo '<h1 id ="resultatrecherche"> Résultat de votre recherche à <span class="ville">'.$choix.'</span>: </h1>';
        $products= $DB->query("SELECT * FROM activite WHERE lieuact= '$choix'" );
        echo '<div id="offres">';
        foreach($products as $product):
          if($product->act_placetot > $product->act_placeres){
            echo "<div class='act'><p class='nomact'>".$product->nomact."</p><p class='descri'>".$product->act_desc." </p><br><p class='leprix'> Prix: ".$product->prixact." €</p><button class='panier'><a class='addPanier' href='addpanier.php?nact=".$product->nact."'>Ajouter Au Panier ! </a></button></div>";
          }
          else if ($product->prixact == 0){
            echo "<div class='act'><p class='nomact'>".$product->nomact."</p><p class='descri'>".$product->act_desc." </p><br><p class='act_grat'> Cette activité est gratuite ! </p></div>";
          }
          else{
            echo "<div class='act'><p class='nomact'>".$product->nomact."</p><p class='descri'>".$product->act_desc." </p><br><p class='act_rupt'> Il n'y a plus de tickets pour cette activité... </p> </div>";
          }
        endforeach;
        echo "<p id='detail'>*Les prix indiqués sont pour un adulte, les activités gratuites représentent des activités à faire sans aucune prestation locale*</p></div>";
      }
    ?> 

  </body>
  
  <script type="text/javascript" src="app.js"></script>
  
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
  
  