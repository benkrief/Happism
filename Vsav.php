<!DOCTYPE html>
<head>
  <title>Votre Séjour</title>
  <link href="https://fonts.googleapis.com/css?family=Prociono&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Advent+Pro&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Yeseva+One&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lobster+Two&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Merienda&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Merienda+One&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Arima+Madurai&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Andika&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Cherry+Swash&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Philosopher&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Rochester&display=swap" rel="stylesheet">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <script type="text/javscript" src="Vsav.js"></script>
  <script type="text/javascript" src="questionnaire.js"></script>
  <link rel="stylesheet" href="Vsav.css" type="text/css">
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
      <li><a href="index.html"><img class="icons"
                  src="https://image.flaticon.com/icons/svg/25/25694.svg" alt="home" width="15"> Home</a></li>
      <li><a href="Vols.php"><img class="icons"
                  src="https://image.flaticon.com/icons/svg/67/67076.svg" alt="vols" width="15"> Vols</a></li>
      <li><a href="Hebergement.php"><img class="icons" src="https://image.flaticon.com/icons/svg/632/632339.svg" alt="hébergements" width="15"> Hébergements</a></li>
      <li><a href="Activite.php"><img class="icons" src="https://image.flaticon.com/icons/svg/71/71422.svg" alt="activités" width="15"> Activités</a></li>
      <li><a href="Vsav.php"><img class="icons" src="https://image.flaticon.com/icons/svg/149/149829.svg" alt="séjour perso" width="15"> Votre séjour à vous...</a></li>
      <li><a href="Panier.php"><img class="icons" src="https://image.flaticon.com/icons/svg/1077/1077979.svg" alt="panier" width="15"> Votre panier </a></li>
  </ul>
  </div>

  <div id="qst">
    <p id="qst_title">Dites nous en plus sur vous: </p>
    <span id="lieu_depart"> Vous partez de : </span>
        <select class="selection" id="departvsav" onchange="recup_lieuvsav()" required>
          <option value="" selected>-Choisissez une destination</option>
          <option value="Athènes">Athènes</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Berlin">Berlin</option>
          <option value="Cancùn">Cancùn</option>
          <option value="Helsinki">Helsinki</option>
          <option value="Johannesbourg">Johannesburg</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Marrakech">Marrakech</option>
          <option value="Montréal">Montréal</option>
          <option value="New York">New York</option>
          <option value="Paris">Paris</option>
          <option value="Pékin">Pékin</option>
          <option value="Rome">Rome</option>
          <option value="Sao Paulo">Sao Paolo</option>
          <option value="Savane">Au coeur de la Savane</option>
        </select>
      <table id="tableauquest">
        <tr>
          <td id="typedest">
            <label for="typedest" id="temp">Vous êtes plutôt :</label><br/>
            <input type="radio" id="Froide" name="lieuvsav" value="Froide" onchange="setDestinationvsav()" /><label for="Froide"> Destination froide </label> <br/>
            <input type="radio" id="Chaud" name="lieuvsav" value="Chaude" onchange="setDestinationvsav()" /><label for="Chaud"> Destination estivale</label><br/>
            <input type="radio" id="Modere" name="lieuvsav" value="Modere" onchange="setDestinationvsav()" /><label for="Modere"> Destination modérée</label><br/>
          </td>
        </tr>
        <tr>
          <td id="universDisneyvsav">
          </td>
        </tr>
        <tr>
          <td id="paysvsav">
          </td>
        </tr>
      </table>
      <span id="boutresultvsav"></span>
  </div>
    <div id="proposition" class="cache">
      <div id="desti">
      </div>
      <div id="propvol" class="prop"><p class="proptitle">Voici comment Happism vous propose d'atteindre votre destination :</p>
        <span id="volmatin">
        </span>
        <span id="volaprem">
        </span>
        <span id="volsoir">
        </span>
      </div>
      <div class="prop"><p class="proptitle">Happism vous propose également de quoi vous héberger... <span id="voirplusheb"> *le prix indiqué pour les hébergements valent pour une nuit dans une chambre avec lit double. Pour plus d'options, rendez-vous sur l'onglet Hébergement :)*</span></p>
        <span id="propheb"><span id="l1"></span><span id="l2"></span><span id="l3"></span><span id="l4"></span><span id="l5"></span><span id="l6"></span>
        </span>
      </div>
      <div class="prop"><p class="proptitle">...ainsi que de quoi vous laisser tenter par le divertissement ! <span id="voirplusacti"> *ici, vous retrouvez uniquement les activités proposées par Happism selon votre destination. Pour plus d'informations sur les prix, veuillez vous rendre sur l'onglet Activités :)*</span></p>
        <span id="propacti" >
        </span>
      </div>  
  </div>
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