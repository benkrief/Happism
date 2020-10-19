var adultes;
var enfants;
var bb;

/*nombre de personnes*/
function compteur(id,increment) {
  var personnes = document.getElementById(id);
  var nb_personnes = parseInt(personnes.innerText, 10);
  if (increment ===1 || increment===-1 && nb_personnes !==0){
    personnes.innerText = nb_personnes + increment;
  }
  if (id==="nb_adultes") {
      adultes = nb_personnes;
      console.log(adultes);
  }
  else if (id==="nb_enfants"){
      enfants = nb_personnes;
      console.log(enfants);
  }
  else {
    bb = nb_personnes;
    console.log(bb);
  }
}



var lieu_depart;
var lieu_arrivee;

/*lieu du voyage*/
function recup_lieu(id){
  var lieu = document.getElementById(id).value;
  console.log(lieu);
  if (id=="departf"){
    lieu_depart = lieu;
    document.getElementById("lieu_arrivee").classList.remove("cache");
    document.getElementById("arrivee").classList.remove("cache");
  }
  else {
    lieu_arrivee = lieu;
    document.getElementById("filtre").classList.remove("cache");
  }
  localStorage.setItem("lieu_depart",lieu_depart);
  localStorage.setItem("lieu_arrivee",lieu_arrivee);
}

var date_depart; 
var date_arrivee;

/*dates du voyage*/
function recup_date (id){
  var date = document.getElementById(id).value;
  if (id==="date_debut") {
      date_depart = date;
      console.log(date_depart);
  }
  else {
      date_arrivee = date;
      console.log(date_arrivee);
  }
}


/*price-slider*/
(function() {
  let slide = document.querySelector(".slide_budget");
  if(!slide) {
    return;
  }
  
  var range = slide.querySelectorAll("input[type=range]");
  var nombre = slide.querySelectorAll("input[type=number]");
  
  range.forEach(function(el){
    el.oninput = function(){
      var curseur1 = parseFloat(range[0].value);
      var curseur2 = parseFloat(range[1].value);
      
      if (curseur1 > curseur2){
        [curseur1, curseur2] = [curseur2, curseur1];
      }
      nombre[0].value = curseur1;
      nombre[1].value = curseur2;
    }
  });
  
  nombre.forEach(function(el){
    el.oninput = function(){
      var nombre1 = parseFloat(nombre[0].value);
      var nombre2 = parseFloat(nombre[1].value);
      
      if (nombre1 > nombre2) {
        var stock = nombre1;
        nombre[0].value = nombre2;
        nombre[1].value = stock;
      }
      range[0].value = nombre2;
      range[1].value = nombre2;
      
    }
  })
})();


/*durée de l'activité*/

var duree_acti;
function duree_act(){
  duree_acti = document.getElementById("tps_acti").value;
  console.log(duree_acti);
}

/*les différents types d'activités que le client souhaite*/
var type_acti;
function type_act(){
  let type = [];
  console.log("ok");
  for (var i=0; i<document.getElementsByName("acti").length; i++){
        if(document.getElementsByName("acti")[i].checked){
          type.push(document.getElementsByName("acti")[i].value);
    }
  }
  type_acti=type;
  console.log(type_acti);
}

/*type_client*/
var type_client;
function client(){
  let type = [];
  console.log("ok");
  for (var i=0; i<document.getElementsByName("client").length; i++){
        if(document.getElementsByName("client")[i].checked){
          type.push(document.getElementsByName("client")[i].value);
    }
  }
  type_client=type;
  console.log(type_client);
}


/*fin filtre*/
function valider () {
  localStorage.setItem("nb_adulte",adultes);
  localStorage.setItem("nb_enfants",enfants);
  localStorage.setItem("nb_bb",bb);
  localStorage.setItem("date_depart",date_depart);
  localStorage.setItem("date_arrivee",date_arrivee);
  localStorage.setItem("duree_acti",duree_acti);
  localStorage.setItem("type_acti",type_acti);
  localStorage.setItem("type_client",type_client);
}

