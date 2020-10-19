<html>
<head>
    <link href="https://fonts.googleapis.com/css2?family=Advent+Pro&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Trocchi&display=swap" rel="stylesheet">
</head>

<body id="log">
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
</body>
</html>