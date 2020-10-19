window.onload = function(){
    var prixvol=0;
    var prixheb=0;
    var prixact=0;
    if (localStorage.getItem("vol") !== null) {
      document.getElementById("choixvol").innerHTML = " ";
      let vol = localStorage.getItem("vol");
      prixvol = parseInt(localStorage.getItem("prixvol"),10);
      var arrivee = localStorage.getItem("arrivee");
      var compagnie = localStorage.getItem("compagnie");
      document.getElementById("choixvol").innerHTML = "Vous allez à " + arrivee + " en "+ vol + " pour le prix de " + prixvol;
    }
    if (localStorage.getItem("hebergement") !== null) {
      document.getElementById("choixheb").innerHTML = " ";
      let hebergement = localStorage.getItem("hebergement");
      prixheb = parseInt(localStorage.getItem("prixheb"),10);
      document.getElementById("choixheb").innerHTML = "Vous avez choisi " + hebergement + " pour vous héberger au prix de " + prixheb;
    }
    if (localStorage.getItem("activite") !== null) {
      document.getElementById("choixacti").innerHTML = " ";
      let activite = localStorage.getItem("activite");
      prixact = parseInt(localStorage.getItem("prixact"),10);
      document.getElementById("choixacti").innerHTML = "Vous avez choisi de vous divertir avec " + activite + " au prix de " + prixact;
    }
    var total = (prixvol + prixheb + prixact);
    document.getElementById("totalprix").innerHTML = "Vous en avez pour " + total + " € au total. Merci d'avoir choisi Happism !";
  }
