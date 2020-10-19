<form method="post" action="Panier.php">
  <div class="table">
    <div class="pan">
      
      <!-- PANIER VOL -->

      <?php 
        if(!empty($_SESSION['panvol'])){
          echo("<div class='titre' id='vol'>
            <span class='nom_dep_vol'>Destination de Départ</span>
            <span class='nom_arr_vol'>Destination d'Arrivée</span>
            <span class='prix_vol'>Prix</span>
            <span class='qte_vol'>Quantité</span>
            <span class='actions_vol'>Actions</span>
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
      ?>

      <div class="prod">
        <span class="prod_dep_vol"><?= $vol->lieudep; ?></span>
        <span class="prod_arr_vol"><?= $vol->lieuar; ?></span>
        <span class="prix_prod_vol"><?="Classe ".$_SESSION['typevol']." ".number_format($_SESSION['prixvol'],2,',',' ');?> €</span>
        <span class="qte_prod_vol"><input type="text" name="panvol[vol_qte][<?= $vol->nvol; ?>]" value="<?= $_SESSION['panvol'][$vol->nvol]; ?>"></span>
        <span class="actions_prod_vol"> 
          <a href="Panier.php?vol_delPanier=<?= $vol->nvol; ?>" class="del"><input type="button" value="Supprimer"></a>
        </span>
      </div>

      <?php 
        }
        endforeach;
      ?> 

      <!-- PANIER HEBERGEMENT -->

      <?php
        if(!empty($_SESSION['panhot'])){
          echo("<div class='titre' id='hotel'>
            <span class='nom_hot'>Nom de l'Hotel</span>
            <span class='prix_hot'>Prix</span>
            <span class='qte_hot'>Quantité</span>
            <span class='action_hot'>Actions</span>
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
      ?>

      <div class="prod">
        <span class="nom_prod_hot"><?= $hotel->nomhot; ?></span>
        <span class="prix_prod_hot"><?= number_format($hotel->prixhot,2,',',' '); ?> €</span>
        <span class="qte_prod_hot"><input type="text" name="panhot[hot_qte][<?= $hotel->nhot; ?>]" value="<?= $_SESSION['panhot'][$hotel->nhot]; ?>"></span>
        <span class="action_prod_hot"> 
          <a href="Panier.php?hot_delPanier=<?= $hotel->nhot; ?>" class="del"><input type="button" value="Supprimer"></a>
        </span>
      </div>

      <?php 
        }
        endforeach;
      ?>
    
      <!-- PANIER ACTIVITE -->

      <?php
        if(!empty($_SESSION['panact'])){
          echo("<div class='titre' id='act'>
          <span class='nom_act'>Nom de l'activité</span>
          <span class='prix_act'>Prix</span>
          <span class='qte_act'>Quantité</span>
          <span class='action_act'>Actions</span>
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
      ?>
      
      <div class="prod">
        <span class="nom_prod_act"><?= $activite->nomact; ?></span>
        <span class="prix_prod_act"><?= number_format($activite->prixact,2,',',' '); ?> €</span>
        <span class="qte_prod_act"><input type="text" name="panact[act_qte][<?= $activite->nact; ?>]" value="<?= $_SESSION['panact'][$activite->nact]; ?>"></span>
        <span class="action_prod_act"> 
          <a href="Panier.php?act_delPanier=<?= $activite->nact; ?>" class="del"><input type="button" value="Supprimer"></a>
        </span>
      </div>

      <?php 
        }
        endforeach;
      ?>
      
      <!--TOTAL-->

      <div class="total">
          <span class="tot_prod_p"> Total TTC : <?= number_format($panier->total() * 1.2,2,',',' '); ?> € </span>
      </div>
      <input id="recalculer" type="submit" value="Recalculer">
    </div>
  </div>
</form>

<!-- CONFIRMATION COMMANDE -->



<?php 
  if ((empty($_SESSION['panvol']))&&(empty($_SESSION['panhot'])) && (empty($_SESSION['panact']))){
    echo ("<div class='panvide'>Votre panier est vide.</div>");
  }
  else{
    echo("<form method='post' action='confirm.php'>
    <input id='confirmer' type='submit' value='Confirmer' name='confirm'>
  </form>");
    $cli=$DB->query("SELECT * FROM client where email='$email'");
    foreach ($cli as $client):
      $numclient=$client->nclient;
    endforeach;

    $test=$DB->query("SELECT * FROM reservation WHERE nclient='$numclient' AND jour_dep='$jour' AND nvol='$nvol' AND nhot='$nhot' AND nact='$nact'");
    if (!$test){
      $resa=$mysqli->query("INSERT INTO `reservation` (`nclient`, `jour_dep`, `nvol`, `nhot`, `nact`) VALUES ('$numclient','$jour','$nvol','$nhot','$nact')");
    }
  }
?>