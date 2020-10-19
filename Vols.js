var depart;
var arrivee;
depart=document.getElementById("ldepart").value;
arrivee=document.getElementById("larrivee").value;
console.log(depart+" depart "+ arrivee+ " arrivee ");
if (depart==arrivee){
  alert("Le départ et l'arrivée doivent être different");
}
/*var volmat = document.getElementById("volnum1");
var volaprem = document.getElementById("volnum2");
var volsoir = document.getElementById("volnum3");
var heure = 0 ;
var depasse= 0;
var prixeco=0; var prixecoprem=0; var prixbusiness=0;
if(depart=="Athènes" & arrivee== "Bahamas" ){ heure = 19;}
if(depart=="Athènes" & arrivee== "Berlin" ){ heure = 3 ;}
if(depart=="Athènes" & arrivee== "Cancùn" ){ heure = 15 ;}
if(depart=="Athènes" & arrivee== "Helsinki" ){ heure = 4 ;}
if(depart=="Athènes" & arrivee== "Johannesbourg" ){ heure = 14 ;}
if(depart=="Athènes" & arrivee== "Los Angeles" ){ heure = 16 ;}
if(depart=="Athènes" & arrivee== "Marrakech" ){ heure = 5 ;}
if(depart=="Athènes" & arrivee== "Montréal" ){ heure = 12 ;}
if(depart=="Athènes" & arrivee== "New York" ){ heure = 13 ;}
if(depart=="Athènes" & arrivee== "Paris" ){ heure =  3;}
if(depart=="Athènes" & arrivee== "Pékin" ){ heure = 10 ;}
if(depart=="Athènes" & arrivee== "Rome" ){ heure = 2 ;}
if(depart=="Athènes" & arrivee== "Sao Paulo" ){ heure = 16 ;}
if(depart=="Athènes" & arrivee== "Savane" ){ heure = 13 ;}
if(depart=="Bahamas" & arrivee== "Athènes" ){ heure = 19 ;}
if(depart=="Bahamas" & arrivee== "Berlin" ){ heure = 12 ;}
if(depart=="Bahamas" & arrivee== "Cancùn" ){ heure =  4 ;}
if(depart=="Bahamas" & arrivee== "Helsinki" ){ heure = 14 ;}
if(depart=="Bahamas" & arrivee== "Johannesbourg" ){ heure = 20 ;}
if(depart=="Bahamas" & arrivee== "Los Angeles" ){ heure = 8 ;}
if(depart=="Bahamas" & arrivee== "Marrakech" ){ heure = 15 ;}
if(depart=="Bahamas" & arrivee== "Montréal" ){ heure = 6 ;}
if(depart=="Bahamas" & arrivee== "New York" ){ heure = 3 ;}
if(depart=="Bahamas" & arrivee== "Paris" ){ heure = 11 ;}
if(depart=="Bahamas" & arrivee== "Pékin" ){ heure = 20 ;}
if(depart=="Bahamas" & arrivee== "Rome" ){ heure = 11 ;}
if(depart=="Bahamas" & arrivee== "Sao Paulo" ){ heure = 11 ;}
if(depart=="Bahamas" & arrivee== "Savane" ){ heure = 19 ;}
if(depart=="Berlin" & arrivee== "Athènes" ){ heure = 3 ;}
if(depart=="Berlin" & arrivee== "Bahamas" ){ heure = 12 ;}
if(depart=="Berlin" & arrivee== "Cancùn" ){ heure = 14 ;}
if(depart=="Berlin" & arrivee== "Helsinki" ){ heure = 2 ;}
if(depart=="Berlin" & arrivee== "Johannesbourg" ){ heure = 13 ;}
if(depart=="Berlin" & arrivee== "Los Angeles" ){ heure = 14 ;}
if(depart=="Berlin" & arrivee== "Marrakech" ){ heure = 4 ;}
if(depart=="Berlin" & arrivee== "Montréal" ){ heure = 10 ;}
if(depart=="Berlin" & arrivee== "New York" ){ heure = 9 ;}
if(depart=="Berlin" & arrivee== "Paris" ){ heure = 2 ;}
if(depart=="Berlin" & arrivee== "Pékin" ){ heure = 9 ;}
if(depart=="Berlin" & arrivee== "Rome" ){ heure = 2 ;}
if(depart=="Berlin" & arrivee== "Sao Paulo" ){ heure =14  ;}
if(depart=="Berlin" & arrivee== "Savane" ){ heure = 12 ;}
if(depart=="Cancùn" & arrivee== "Athènes" ){ heure = 15 ;}
if(depart=="Cancùn" & arrivee== "Bahamas" ){ heure = 4 ;}
if(depart=="Cancùn" & arrivee== "Berlin" ){ heure = 14 ;}
if(depart=="Cancùn" & arrivee== "Helsinki" ){ heure = 14 ;}
if(depart=="Cancùn" & arrivee== "Johannesbourg" ){ heure = 20 ;}
if(depart=="Cancùn" & arrivee== "Los Angeles" ){ heure = 5  ;}
if(depart=="Cancùn" & arrivee== "Marrakech" ){ heure = 14 ;}
if(depart=="Cancùn" & arrivee== "Montréal" ){ heure = 4 ;}
if(depart=="Cancùn" & arrivee== "New York" ){ heure = 4 ;}
if(depart=="Cancùn" & arrivee== "Paris" ){ heure =  10;}
if(depart=="Cancùn" & arrivee== "Pékin" ){ heure = 20 ;}
if(depart=="Cancùn" & arrivee== "Rome" ){ heure = 10 ;}
if(depart=="Cancùn" & arrivee== "Sao Paulo" ){ heure = 11 ;}
if(depart=="Cancùn" & arrivee== "Savane" ){ heure = 19 ;}
if(depart=="Helsinki" & arrivee== "Athènes" ){ heure = 4 ;}
if(depart=="Helsinki" & arrivee== "Bahamas" ){ heure = 14 ;}
if(depart=="Helsinki" & arrivee== "Berlin" ){ heure = 2 ;}
if(depart=="Helsinki" & arrivee== "Cancùn" ){ heure = 14 ;}
if(depart=="Helsinki" & arrivee== "Johannesbourg" ){ heure = 15  ;}
if(depart=="Helsinki" & arrivee== "Los Angeles" ){ heure = 11 ;}
if(depart=="Helsinki" & arrivee== "Marrakech" ){ heure = 6 ;}
if(depart=="Helsinki" & arrivee== "Montréal" ){ heure = 12 ;}
if(depart=="Helsinki" & arrivee== "New York" ){ heure = 9 ;}
if(depart=="Helsinki" & arrivee== "Paris" ){ heure = 3 ;}
if(depart=="Helsinki" & arrivee== "Pékin" ){ heure = 8 ;}
if(depart=="Helsinki" & arrivee== "Rome" ){ heure = 4 ;}
if(depart=="Helsinki" & arrivee== "Sao Paulo" ){ heure = 17 ;}
if(depart=="Helsinki" & arrivee== "Savane" ){ heure = 13 ;}
if(depart=="Johannesbourg" & arrivee== "Athènes" ){ heure = 14 ;}
if(depart=="Johannesbourg" & arrivee== "Bahamas" ){ heure = 20 ;}
if(depart=="Johannesbourg" & arrivee== "Berlin" ){ heure = 13 ;}
if(depart=="Johannesbourg" & arrivee== "Cancùn" ){ heure = 20 ;}
if(depart=="Johannesbourg" & arrivee== "Helsinki" ){ heure = 15 ;}
if(depart=="Johannesbourg" & arrivee== "Los Angeles" ){ heure = 24 ;}
if(depart=="Johannesbourg" & arrivee== "Marrakech" ){ heure = 15 ;}
if(depart=="Johannesbourg" & arrivee== "Montréal" ){ heure = 21 ;}
if(depart=="Johannesbourg" & arrivee== "New York" ){ heure = 16 ;}
if(depart=="Johannesbourg" & arrivee== "Paris" ){ heure = 11 ;}
if(depart=="Johannesbourg" & arrivee== "Pékin" ){ heure = 18 ;}
if(depart=="Johannesbourg" & arrivee== "Rome" ){ heure =  10;}
if(depart=="Johannesbourg" & arrivee== "Sao Paulo" ){ heure = 10 ;}
if(depart=="Johannesbourg" & arrivee== "Savane" ){ heure = 3 ;}
if(depart=="Los Angeles" & arrivee== "Athènes" ){ heure = 16 ;}
if(depart=="Los Angeles" & arrivee== "Bahamas" ){ heure = 8 ;}
if(depart=="Los Angeles" & arrivee== "Berlin" ){ heure = 14 ;}
if(depart=="Los Angeles" & arrivee== "Cancùn" ){ heure = 5 ;}
if(depart=="Los Angeles" & arrivee== "Helsinki" ){ heure = 11 ;}
if(depart=="Los Angeles" & arrivee== "Johannesbourg" ){ heure = 24 ;}
if(depart=="Los Angeles" & arrivee== "Marrakech" ){ heure = 15 ;}
if(depart=="Los Angeles" & arrivee== "Montréal" ){ heure = 5 ;}
if(depart=="Los Angeles" & arrivee== "New York" ){ heure = 5 ;}
if(depart=="Los Angeles" & arrivee== "Paris" ){ heure = 10 ;}
if(depart=="Los Angeles" & arrivee== "Pékin" ){ heure = 13 ;}
if(depart=="Los Angeles" & arrivee== "Rome" ){ heure = 12 ;}
if(depart=="Los Angeles" & arrivee== "Sao Paulo" ){ heure = 13 ;}
if(depart=="Los Angeles" & arrivee== "Savane" ){ heure = 23 ;}
if(depart=="Marrakech" & arrivee== "Athènes" ){ heure = 5 ;}
if(depart=="Marrakech" & arrivee== "Bahamas" ){ heure = 15 ;}
if(depart=="Marrakech" & arrivee== "Berlin" ){ heure = 4 ;}
if(depart=="Marrakech" & arrivee== "Cancùn" ){ heure = 14 ;}
if(depart=="Marrakech" & arrivee== "Helsinki" ){ heure = 6 ;}
if(depart=="Marrakech" & arrivee== "Johannesbourg" ){ heure = 15 ;}
if(depart=="Marrakech" & arrivee== "Los Angeles" ){ heure = 15 ;}
if(depart=="Marrakech" & arrivee== "Montréal" ){ heure = 11 ;}
if(depart=="Marrakech" & arrivee== "New York" ){ heure = 11 ;}
if(depart=="Marrakech" & arrivee== "Paris" ){ heure = 3 ;}
if(depart=="Marrakech" & arrivee== "Pékin" ){ heure = 15 ;}
if(depart=="Marrakech" & arrivee== "Rome" ){ heure = 3 ;}
if(depart=="Marrakech" & arrivee== "Sao Paulo" ){ heure = 12 ;}
if(depart=="Marrakech" & arrivee== "Savane" ){ heure = 14 ;}
if(depart=="Montréal" & arrivee== "Athènes" ){ heure = 12 ;}
if(depart=="Montréal" & arrivee== "Bahamas" ){ heure = 6 ;}
if(depart=="Montréal" & arrivee== "Berlin" ){ heure = 10 ;}
if(depart=="Montréal" & arrivee== "Cancùn" ){ heure = 4 ;}
if(depart=="Montréal" & arrivee== "Helsinki" ){ heure = 12 ;}
if(depart=="Montréal" & arrivee== "Johannesbourg" ){ heure = 21 ;}
if(depart=="Montréal" & arrivee== "Los Angeles" ){ heure = 5 ;}
if(depart=="Montréal" & arrivee== "Marrakech" ){ heure = 11 ;}
if(depart=="Montréal" & arrivee== "New York" ){ heure = 1;}
if(depart=="Montréal" & arrivee== "Paris" ){ heure = 7 ;}
if(depart=="Montréal" & arrivee== "Pékin" ){ heure = 14 ;}
if(depart=="Montréal" & arrivee== "Rome" ){ heure = 8 ;}
if(depart=="Montréal" & arrivee== "Sao Paulo" ){ heure = 10 ;}
if(depart=="Montréal" & arrivee== "Savane" ){ heure = 21 ;}
if(depart=="New York" & arrivee== "Athènes" ){ heure = 13 ;}
if(depart=="New York" & arrivee== "Bahamas" ){ heure = 3 ;}
if(depart=="New York" & arrivee== "Berlin" ){ heure = 9 ;}
if(depart=="New York" & arrivee== "Cancùn" ){ heure = 4 ;}
if(depart=="New York" & arrivee== "Helsinki" ){ heure = 9 ;}
if(depart=="New York" & arrivee== "Johannesbourg" ){ heure = 16 ;}
if(depart=="New York" & arrivee== "Los Angeles" ){ heure = 5 ;}
if(depart=="New York" & arrivee== "Marrakech" ){ heure = 11 ;}
if(depart=="New York" & arrivee== "Montréal" ){ heure = 1;}
if(depart=="New York" & arrivee== "Paris" ){ heure = 7 ;}
if(depart=="New York" & arrivee== "Pékin" ){ heure = 14 ;}
if(depart=="New York" & arrivee== "Rome" ){ heure = 8 ;}
if(depart=="New York" & arrivee== "Sao Paulo" ){ heure = 10 ;}
if(depart=="New York" & arrivee== "Savane" ){ heure = 16 ;}
if(depart=="Paris" & arrivee== "Athènes" ){ heure = 3 ;}
if(depart=="Paris" & arrivee== "Bahamas" ){ heure = 11 ;}
if(depart=="Paris" & arrivee== "Berlin" ){ heure = 2 ;}
if(depart=="Paris" & arrivee== "Cancùn" ){ heure = 10 ;}
if(depart=="Paris" & arrivee== "Helsinki" ){ heure = 3 ;}
if(depart=="Paris" & arrivee== "Johannesbourg" ){ heure = 11 ;}
if(depart=="Paris" & arrivee== "Los Angeles" ){ heure = 10 ;}
if(depart=="Paris" & arrivee== "Marrakech" ){ heure = 3 ;}
if(depart=="Paris" & arrivee== "Montréal" ){ heure = 7 ;}
if(depart=="Paris" & arrivee== "New York" ){ heure = 7 ;}
if(depart=="Paris" & arrivee== "Pékin" ){ heure = 10 ;}
if(depart=="Paris" & arrivee== "Rome" ){ heure = 2 ;}
if(depart=="Paris" & arrivee== "Sao Paulo" ){ heure = 12 ;}
if(depart=="Paris" & arrivee== "Savane" ){ heure = 10 ;}
if(depart=="Pékin" & arrivee== "Athènes" ){ heure = 10 ;}
if(depart=="Pékin" & arrivee== "Bahamas" ){ heure = 20 ;}
if(depart=="Pékin" & arrivee== "Berlin" ){ heure = 9 ;}
if(depart=="Pékin" & arrivee== "Cancùn" ){ heure = 20 ;}
if(depart=="Pékin" & arrivee== "Helsinki" ){ heure = 8 ;}
if(depart=="Pékin" & arrivee== "Johannesbourg" ){ heure = 18 ;}
if(depart=="Pékin" & arrivee== "Los Angeles" ){ heure = 13 ;}
if(depart=="Pékin" & arrivee== "Marrakech" ){ heure = 15 ;}
if(depart=="Pékin" & arrivee== "Montréal" ){ heure = 14 ;}
if(depart=="Pékin" & arrivee== "New York" ){ heure = 14 ;}
if(depart=="Pékin" & arrivee== "Paris" ){ heure = 10 ;}
if(depart=="Pékin" & arrivee== "Rome" ){ heure = 12 ;}
if(depart=="Pékin" & arrivee== "Sao Paulo" ){ heure = 25 ;}
if(depart=="Pékin" & arrivee== "Savane" ){ heure = 17 ;}
if(depart=="Rome" & arrivee== "Athènes" ){ heure = 2 ;}
if(depart=="Rome" & arrivee== "Bahamas" ){ heure = 11 ;}
if(depart=="Rome" & arrivee== "Berlin" ){ heure = 2 ;}
if(depart=="Rome" & arrivee== "Cancùn" ){ heure = 10 ;}
if(depart=="Rome" & arrivee== "Helsinki" ){ heure = 4 ;}
if(depart=="Rome" & arrivee== "Johannesbourg" ){ heure = 10 ;}
if(depart=="Rome" & arrivee== "Los Angeles" ){ heure = 12 ;}
if(depart=="Rome" & arrivee== "Marrakech" ){ heure = 3 ;}
if(depart=="Rome" & arrivee== "Montréal" ){ heure = 8 ;}
if(depart=="Rome" & arrivee== "New York" ){ heure = 8 ;}
if(depart=="Rome" & arrivee== "Paris" ){ heure = 2 ;}
if(depart=="Rome" & arrivee== "Pékin" ){ heure = 12 ;}
if(depart=="Rome" & arrivee== "Sao Paulo" ){ heure = 12 ;}
if(depart=="Rome" & arrivee== "Savane" ){ heure = 10 ;}
if(depart=="Sao Paulo" & arrivee== "Athènes" ){ heure = 16 ;}
if(depart=="Sao Paulo" & arrivee== "Bahamas" ){ heure = 11 ;}
if(depart=="Sao Paulo" & arrivee== "Berlin" ){ heure = 14 ;}
if(depart=="Sao Paulo" & arrivee== "Cancùn" ){ heure = 11 ;}
if(depart=="Sao Paulo" & arrivee== "Helsinki" ){ heure = 17 ;}
if(depart=="Sao Paulo" & arrivee== "Johannesbourg" ){ heure = 10 ;}
if(depart=="Sao Paulo" & arrivee== "Los Angeles" ){ heure = 13 ;}
if(depart=="Sao Paulo" & arrivee== "Marrakech" ){ heure = 12 ;}
if(depart=="Sao Paulo" & arrivee== "Montréal" ){ heure = 10 ;}
if(depart=="Sao Paulo" & arrivee== "New York" ){ heure = 10 ;}
if(depart=="Sao Paulo" & arrivee== "Paris" ){ heure = 12 ;}
if(depart=="Sao Paulo" & arrivee== "Pékin" ){ heure = 25 ;}
if(depart=="Sao Paulo" & arrivee== "Rome" ){ heure = 12 ;}
if(depart=="Sao Paulo" & arrivee== "Savane" ){ heure = 11 ;}
if(depart=="Savane" & arrivee== "Athènes" ){ heure = 13 ;}
if(depart=="Savane" & arrivee== "Bahamas" ){ heure = 19 ;}
if(depart=="Savane" & arrivee== "Berlin" ){ heure = 12 ;}
if(depart=="Savane" & arrivee== "Cancùn" ){ heure = 19 ;}
if(depart=="Savane" & arrivee== "Helsinki" ){ heure = 13 ;}
if(depart=="Savane" & arrivee== "Johannesbourg" ){ heure = 3 ;}
if(depart=="Savane" & arrivee== "Los Angeles" ){ heure = 23 ;}
if(depart=="Savane" & arrivee== "Marrakech" ){ heure = 14 ;}
if(depart=="Savane" & arrivee== "Montréal" ){ heure = 21 ;}
if(depart=="Savane" & arrivee== "New York" ){ heure = 16 ;}
if(depart=="Savane" & arrivee== "Paris" ){ heure = 10 ;}
if(depart=="Savane" & arrivee== "Pékin" ){ heure = 17 ;}
if(depart=="Savane" & arrivee== "Rome" ){ heure = 10 ;}
if(depart=="Savane" & arrivee== "Sao Paulo" ){ heure = 11 ;}


var tempmatin = (9+heure)%24;
var tempaprem = (14+heure)%24;
var tempsoir = (20+heure)%24;

var depassematin = (9 + heure); 
if (depassematin>24) {depassematin="(+1 jour)";} else {depassematin=" ";}
var depasseaprem = (14 + heure); 
if (depasseaprem>24) {depasseaprem="(+1 jour)";} else {depasseaprem=" ";} 
var depassesoir = (20 + heure); 
if (depassesoir>24) {depassesoir="(+1 jour)";} else {depassesoir=" ";} 

switch (heure)
{
case (1): prixeco=" 80 €";prixecoprem= " 120 €";prixbusiness=" 150 €";break;
case (2): prixeco=" 120 €";prixecoprem= " 200 €";prixbusiness=" 300 €";break;
case (3): prixeco=" 180 €";prixecoprem= " 300 €";prixbusiness=" 450 €";break;
case (4): prixeco=" 200 €";prixecoprem= " 400 €";prixbusiness=" 600 €";break;
case (5): prixeco=" 250 €";prixecoprem= " 500 €";prixbusiness=" 750 €";break;
case (6): prixeco=" 300 €";prixecoprem= " 600 €";prixbusiness=" 900 €";break;
case (7): prixeco=" 350 €";prixecoprem= " 700 €";prixbusiness=" 1050 €";break;
case (8): prixeco=" 400 €";prixecoprem= " 800 €";prixbusiness=" 1200 €";break;
case (9): prixeco=" 450 €";prixecoprem= " 900 €";prixbusiness=" 1350 €";break;
case (10): prixeco=" 500 €";prixecoprem= " 1000 €";prixbusiness=" 1500 €";break;
case (11): prixeco=" 550 €";prixecoprem= " 1100 €";prixbusiness=" 1650 €";break;
case (12): prixeco=" 600 €";prixecoprem= " 1200 €";prixbusiness=" 1800 €";break;
case (13): prixeco=" 650 €";prixecoprem= " 1300 €";prixbusiness=" 1950 €";break;
case (14): prixeco=" 700 €";prixecoprem= " 1400 €";prixbusiness=" 2100 €";break;
case (15): prixeco=" 750 €";prixecoprem= " 1500 €";prixbusiness=" 2250 €";break;
case (16): prixeco=" 800 €";prixecoprem= " 1600 €";prixbusiness=" 2400 €";break;
case (17): prixeco=" 850 €";prixecoprem= " 1700 €";prixbusiness=" 2550 €";break;
case (18): prixeco=" 900 €";prixecoprem= " 1800 €";prixbusiness=" 2700 €";break;
case (19): prixeco=" 950 €";prixecoprem= " 1900 €";prixbusiness=" 2850 €";break;
case (20): prixeco=" 1000 €";prixecoprem= " 2000 €";prixbusiness=" 3000 €";break;
case (21): prixeco=" 1050 €";prixecoprem= " 2100 €";prixbusiness=" 3150 €";break;
case (22): prixeco=" 1100 €";prixecoprem= " 2200 €";prixbusiness=" 3300 €";break;
case (23): prixeco=" 1150 €";prixecoprem= " 2300 €";prixbusiness=" 3450 €";break;

}*/
/*
else{
document.getElementById("offres").classList.remove("cache");
if (arrivee==="Athènes"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " + tempmatin + "h00 " + depassematin + "<button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique  </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button>" + 
"<p id='business_matin'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffmat'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "<button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button>" +
"<p id='business_aprem'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol'  id='prixaffaprem'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir+ "h00 " + depassesoir + " <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button>" +
"<p id='business_soir'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffsoir'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Bahamas"){
volmat.innerHTML = "<span class='vol'><span class='commpagnie'>HOTAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin+ "h00 " + depassematin + " <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button>" +
"<p id='business_matin'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffmat'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='commpagnie'>HOTAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00  " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button>" +
"<p id='business_aprem'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol'  id='prixaffaprem'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='commpagnie'>HOTAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button>" +
"<p id='business_soir'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffsoir'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Berlin"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'> <div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Cancùn"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Helsinki"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>COLDAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>COLDAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>COLDAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Johannesbourg"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>"+
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button>" +
"<p id='business_matin'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffmat'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button>" +
"<p id='business_aprem'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol'  id='prixaffaprem'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button>" +
"<p id='business_soir'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffsoir'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Los Angeles"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button>" +
"<p id='business_matin'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffmat'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button>" +
"<p id='business_aprem'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol'  id='prixaffaprem'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button>" +
"<p id='business_soir'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffsoir'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Marrakech"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Montréal"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>COLDAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button>" +
"<p id='business_matin'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffmat'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>COLDAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button>" +
"<p id='business_aprem'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol'  id='prixaffaprem'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>COLDAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button>" +
"<p id='business_soir'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffsoir'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="New York"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button>" +
"<p id='business_matin'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffmat'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button>" +
"<p id='business_aprem'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol'  id='prixaffaprem'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button>" +
"<p id='business_soir'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffsoir'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Paris"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button>" +
"<p id='business_matin'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffmat'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button>" +
"<p id='business_aprem'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol'  id='prixaffaprem'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button>" +
"<p id='business_soir'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffsoir'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Pékin"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + " <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button>" +
"<p id='business_matin'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffmat'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button>" +
"<p id='business_aprem'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol'  id='prixaffaprem'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button>" +
"<p id='business_soir'> Classe affaire </p><p class='prix'> Prix : <object class='prixvol' id='prixaffsoir'>"+ prixbusiness + "</object></p><button class='panier' onclick='danspanieraffsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Rome"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>MILDAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button></div></span>";
}
else if (arrivee==="Sao Paulo"){
volmat.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 9h00 </span><img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button></div></span>";
}
else {
volmat.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR</span> Départ: 9h00 <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempmatin + "h00 " + depassematin + "  <button id='un' class='plus' onclick='boutonplus1()'> + </button></span>" +
"<span id='1' class='cache'><div class='diffclasses' id='matin'><p id='eco_matin'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecomat'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecomat()'>Dans le panier !</button>" + 
"<p id='ecoprem_matin'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremmat'>"+ prixecoprem+ "</object></p><button class='panier' onclick='danspanierecopremmat()'>Dans le panier !</button></div></span>";
volaprem.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 14h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempaprem + "h00 " + depasseaprem + "   <button class='plus' onclick='boutonplus2()'> + </button></span>" + 
"<span id='2' class='cache'><div class='diffclasses' id='aprem'><p id='eco_aprem'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecoaprem'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecoaprem()'>Dans le panier !</button>" +
"<p id='ecoprem_aprem'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol'  id='prixecopremaprem'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremaprem()'>Dans le panier !</button></div></span>";
volsoir.innerHTML = "<span class='vol'><span class='compagnie'>HOTAIR Départ: 20h00</span> <img src='https://cdn.glitch.com/8c002ad1-d654-4590-a703-a8d0dccd8d4b%2Farrow.svg?v=1575588319091' width='15'> " +tempsoir + "h00 " + depassesoir + "  <button class='plus' onclick='boutonplus3()'> + </button></span>" +
"<span id='3' class='cache'><div class='diffclasses' id='soir'><p id='eco_soir'> Classe économique </p><p class='prix'> Prix : <object class='prixvol' id='prixecosoir'>"+ prixeco+ "</object></p><button class='panier' onclick='danspanierecosoir()'>Dans le panier !</button>" +
"<p id='ecoprem_soir'> Classe économique premium </p><p class='prix'> Prix : <object class='prixvol' id='prixecopremsoir'>"+ prixecoprem + "</object></p><button class='panier' onclick='danspanierecopremsoir()'>Dans le panier !</button></div></span>";
} 
}
}


function boutonplus1(){
document.getElementById("1").classList.remove("cache");
}

function boutonplus2(){
document.getElementById("2").classList.remove("cache");
}

function boutonplus3(){
document.getElementById("3").classList.remove("cache");
}

var choixvoleco;
var choixvolecoprem;
var choixvolaff;

function danspanierecomat(){
var lieu=document.getElementById("eco_matin").innerText;
console.log(lieu);
var prixecomat = document.getElementById("prixecomat").innerText;
console.log(prixecomat);
localStorage.setItem("arrivee",arrivee);
localStorage.setItem("vol",lieu);
localStorage.setItem("prixvol",prixecomat);
}

function danspanierecoaprem(){
var lieu=document.getElementById("eco_aprem").innerText;
console.log(lieu);
var prixecoaprem = document.getElementById("prixecoaprem").innerText;
console.log(prixecoaprem);
localStorage.setItem("arrivee",arrivee);
localStorage.setItem("vol",lieu);
localStorage.setItem("prixvol",prixecoaprem);
}

function danspanierecosoir(){
var lieu=document.getElementById("eco_soir").innerText;
console.log(lieu);
var prixecosoir = document.getElementById("prixecosoir").innerText;
console.log(prixecosoir);
localStorage.setItem("arrivee",arrivee);
localStorage.setItem("vol",lieu);
localStorage.setItem("prixvol",prixecosoir);
}

function danspanierecopremmat(){
var lieu=document.getElementById("ecoprem_matin").innerText;
console.log(lieu);
var prixecopremmat = document.getElementById("prixecopremmat").innerText;
console.log(prixecopremmat);
localStorage.setItem("arrivee",arrivee);
localStorage.setItem("vol",lieu);
localStorage.setItem("prixvol",prixecopremmat);
}

function danspanierecopremaprem(){
var lieu=document.getElementById("ecoprem_aprem").innerText;
console.log(lieu);
var prixecopremaprem = document.getElementById("prixecopremaprem").innerText;
console.log(prixecopremaprem);
localStorage.setItem("arrivee",arrivee);
localStorage.setItem("vol",lieu);
localStorage.setItem("prixvol",prixecopremaprem);
}

function danspanierecopremsoir(){
var lieu=document.getElementById("ecoprem_soir").innerText;
console.log(lieu);
var prixecopremsoir = document.getElementById("prixecopremsoir").innerText;
console.log(prixecopremsoir);
localStorage.setItem("arrivee",arrivee);
localStorage.setItem("vol",lieu);
localStorage.setItem("prixvol",prixecopremsoir);
}


function danspanieraffmat(){
var lieu=document.getElementById("business_matin").innerText;
console.log(lieu);
var prixaffmat = document.getElementById("prixaffmat").innerText;
console.log(prixaffmat);
localStorage.setItem("arrivee",arrivee);
localStorage.setItem("vol",lieu);
localStorage.setItem("prixvol",prixaffmat);
}

function danspanieraffaprem(){
var lieu=document.getElementById("business_aprem").innerText;
console.log(lieu);
var prixaffaprem = document.getElementById("prixaffaprem").innerText;
console.log(prixaffaprem);
localStorage.setItem("arrivee",arrivee);
localStorage.setItem("vol",lieu);
localStorage.setItem("prixvol",prixaffaprem);
}


function danspanieraffsoir(){
var lieu=document.getElementById("business_soir").innerText;
console.log(lieu);
var prixaffsoir = document.getElementById("prixaffsoir").innerText;
console.log(prixaffsoir);
localStorage.setItem("arrivee",arrivee);
localStorage.setItem("vol",lieu);
localStorage.setItem("prixvol",prixaffsoir);
}*/