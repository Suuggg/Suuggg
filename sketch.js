navigator.geolocation.getCurrentPosition(getposition);// on récupère la position gps de l'utilisateur 

let myMap; // on déclare une variable pour notre carte
const mappa = new Mappa('Leaflet'); // on fait appel à la librairie js Leaflet

// variables pour récupérer la position gps de l'utilisateur
var position;
let userLat = 47.2040006;
let userLon = -1.5630606;

let mousePos;

// coordonnées de l'edna
let edna_lat = 48.85264680801034;
let edna_lng = 2.3497472367157473;
let corbeil_lat = 48.615954949540054;
let corbeil_lng = 2.463363511591288;
let fitness_lat = 48.939269;
let fitness_lng = 2.537257;
let booba_lat = 48.839398;
let booba_lng = 2.231356;
let Niska_lat = 48.631655;
let Niska_lng = 2.435274;
let RimK_lat = 48.793067;
let RimK_lng = 2.395917;
let LaFeve_lat = 48.850803;
let LaFeve_lng = 2.475111; 
let georgio_lat = 48.881271; 
let georgio_lng = 2.420961; 
let alpha_lat = 48.788225; 
let alpha_lng = 2.287986;
let jazzy_lat = 48.88886562751833; 
let jazzy_lng = 2.3826044933673014; 
// coordonnées de notre 1e zone

let initial_lat = edna_lat;// latitude de départ
let initial_lng = edna_lng;// longitude de départ
let zone1_lat = corbeil_lat; // latitude mcdo
let zone1_lng = corbeil_lng; // longitude mcdo
let zone2_lat = fitness_lat; // latitude fitness park
let zone2_lng = fitness_lng; // longitude fitness park
let zone3_lat = booba_lat; // latitude fitness park
let zone3_lng = booba_lng; // longitude fitness park
let zone4_lat = Niska_lat; // latitude fitness park
let zone4_lng = Niska_lng; // longitude fitness park
let zone5_lat = RimK_lat; // latitude fitness park
let zone5_lng = RimK_lng; // longitude fitness park
let zone6_lat = LaFeve_lat; // latitude fitness park
let zone6_lng = LaFeve_lng; // longitude fitness park
let zone7_lat = georgio_lat; // latitude fitness park
let zone7_lng = georgio_lng; // longitude fitness park
let zone8_lat = alpha_lat; 
let zone8_lng = alpha_lng;
let zone9_lat = jazzy_lat; 
let zone9_lng = jazzy_lng;


// variables pour notre avatar
let avatarLat;
let avatarLng;
let avatarPos;
let avatarPosX;
let avatarPosY;

// déplacement de l'avatar
let avatar_easing_lat = initial_lat; 
let avatar_easing_lng = initial_lng; 
let avatar_target_lat = initial_lat; 
let avatar_target_lng = initial_lng; 
let easing = 0.05;
// Calcul des distances
let distance_edna_avatar;
let distance_zone1Pos_avatar;
let distance_zone2Pos_avatar;
let distance_zone3Pos_avatar;
let distance_zone4Pos_avatar;
let distance_zone5Pos_avatar;
let distance_zone6Pos_avatar;
let distance_zone7Pos_avatar;
let distance_zone8Pos_avatar;
let distance_zone9Pos_avatar;
let distance_source1_avatar;

// variables qui vont nous permettre de dessiner les zones
let diametreSource1_lat = 47.199044159443524; 
let diametreSource1_lng = -1.561260223388672; 
let avatar_img;
let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;
let zone1_img;
let zone2_img;
let zone3_img;
let zone4_img;
let zone5_img;
let zone6_img;
let zone7_img;
let zone8_img;
let zone9_img;

function preload(){
  
  sound1 = loadSound('assets/Georgio.mp3'); // on charge un fichier audio dans la variable sound1
  sound2 = loadSound('assets/PNL.mp3');
  sound3= loadSound('assets/philly flingo.mp3');
  sound4 = loadSound('assets/Vald .mp3');
  sound5 = loadSound('assets/Booba.mp3');
  sound6 = loadSound('assets/Niska.mp3');
  sound7 = loadSound('assets/RimK.mp3');
  sound8 = loadSound('assets/LAFÈVE.mp3');
  sound9 = loadSound('assets/JazzyBazz.mp3');
  zone1_img = loadImage('assets/PNLL.png');
  zone2_img = loadImage('assets/ValdL.png');
  zone3_img = loadImage('assets/BoobaL.png');
  zone4_img = loadImage('assets/NiskaL.png');
  zone5_img = loadImage('assets/RimkL.png');
  zone6_img = loadImage('assets/LafeveL.png');
  zone7_img = loadImage('assets/GeorgioL.png');
  zone8_img = loadImage('assets/AlphaL.png');
  zone9_img = loadImage('assets/JazzyL.png');
  avatar_img = loadImage('assets/avatar.png');

  
}


// Lets put all our map options in a single object
// lat and lng are the starting point for the map.
const options = {
  lat: initial_lat,
  lng: initial_lng,
  zoom: 10,// zoom de départ
  style: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(640,640); 

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
} // fin de la fonction setup


function getposition(position) {
  userLat = position.coords.latitude
  userLon = position.coords.longitude
}

function draw(){
    
   // Clear the previous canvas on every frame
  clear();
  
  mousePos = myMap.fromPointToLatLng(mouseX,mouseY);// on convertit la position de la souris en coordonnées gps      
  let edna = myMap.latLngToPixel(47.2040006, -1.5630606); // on convertit la position gps en position XY
  let userPos = myMap.latLngToPixel(userLat, userLon); // idem
  let zone1Pos = myMap.latLngToPixel(zone1_lat, zone1_lng);
  let zone2Pos = myMap.latLngToPixel(zone2_lat, zone2_lng);
  let zone3Pos = myMap.latLngToPixel(zone3_lat, zone3_lng);
  let zone4Pos = myMap.latLngToPixel(zone4_lat, zone4_lng);
  let zone5Pos = myMap.latLngToPixel(zone5_lat, zone5_lng);
  let zone6Pos = myMap.latLngToPixel(zone6_lat, zone6_lng);
  let zone7Pos = myMap.latLngToPixel(zone7_lat, zone7_lng);
  let zone8Pos = myMap.latLngToPixel(zone8_lat, zone8_lng);
  let zone9Pos = myMap.latLngToPixel(zone9_lat, zone9_lng);
  
  if(mouseIsPressed){
    avatarPos = myMap.latLngToPixel(mousePos.lat, mousePos.lng); // on récupère la position en pixels de la position gps de l'avatar
    avatarPosX = avatarPos.x;  // on met à jour avatarPosX
    avatarPosY = avatarPos.y; // on met à jour avatarPosY
    avatar_target_lat = mousePos.lat;
    avatar_target_lng = mousePos.lng;
    avatarLat = mousePos.lat; // on met à jour avatarLat
    avatarLng = mousePos.lng; // on met à jour avatarLng  
    print("mousePos.lat = " + mousePos.lat);    
    print("mousePos.lng = " + mousePos.lng);
    distance_edna_avatar = abs(edna_lat-avatarLat)+abs(edna_lng-avatarLng);
    print("distance_edna_avatar = " + distance_edna_avatar);
     distance_zone1Pos_avatar = abs(zone1_lat-avatarLat)+abs(zone1_lng-avatarLng);
    print("distance_zone1Pos_avatar = " + distance_zone1Pos_avatar);
     distance_zone2Pos_avatar = abs(zone2_lat-avatarLat)+abs(zone2_lng-avatarLng);
    print("distance_zone2Pos_avatar = " + distance_zone2Pos_avatar);
    distance_zone3Pos_avatar = abs(zone3_lat-avatarLat)+abs(zone3_lng-avatarLng);
    print("distance_zone3Pos_avatar = " + distance_zone3Pos_avatar);
     distance_zone4Pos_avatar = abs(zone4_lat-avatarLat)+abs(zone4_lng-avatarLng);
    print("distance_zone4Pos_avatar = " + distance_zone4Pos_avatar);
    distance_zone5Pos_avatar = abs(zone5_lat-avatarLat)+abs(zone5_lng-avatarLng);
    print("distance_zone5Pos_avatar = " + distance_zone5Pos_avatar);
    distance_zone6Pos_avatar = abs(zone6_lat-avatarLat)+abs(zone6_lng-avatarLng);
    print("distance_zone6Pos_avatar = " + distance_zone6Pos_avatar);
    distance_zone7Pos_avatar = abs(zone7_lat-avatarLat)+abs(zone7_lng-avatarLng);
    print("distance_zone7Pos_avatar = " + distance_zone7Pos_avatar);
    distance_zone8Pos_avatar = abs(zone8_lat-avatarLat)+abs(zone8_lng-avatarLng);
    print("distance_zone8Pos_avatar = " + distance_zone8Pos_avatar);
    distance_zone9Pos_avatar = abs(zone9_lat-avatarLat)+abs(zone9_lng-avatarLng);
    print("distance_zone9Pos_avatar = " + distance_zone9Pos_avatar);
  }

  let dx = avatar_target_lat - avatar_easing_lat;
  avatar_easing_lat += dx* easing;
  
 let dy = avatar_target_lng - avatar_easing_lng;
  avatar_easing_lng += dy* easing;
 let avatarEasing = myMap.latLngToPixel(avatar_easing_lat, avatar_easing_lng);
  /*
  if(abs(edna_lat-mousePos.lat)<0.020 && abs(edna_lng-mousePos.lng)<0.020){
    print("l'utilisateur est entré dans la zone de l'EDNA")
  }
  */

  /////////////////////////////
  // EDNA /////////////////////
  /////////////////////////////

  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_zone7Pos_avatar<0.020&& !sound1.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound1.play();
  }
  // si on sort de la zone
  if(distance_zone7Pos_avatar>0.020){
    print("l'avatar est sorti de la zone de l'EDNA") 
    sound1.stop();
  }
  
  /////////////////////////////
  // ZONE 1 ///////////////////
  /////////////////////////////
  
  fill("red");
  image(avatar_img,avatarEasing.x,avatarEasing.y, 19, 30); // on dessine l'avatar
  
  if(distance_zone1Pos_avatar<0.020&& !sound2.isPlaying()){
    print("l'avatar est entré dans la zone de Pnl")
    sound2.play();
  }
  // si on sort de la zone
  if(distance_zone1Pos_avatar>0.020){
    print("l'avatar est sorti de la zone de Pnl")
    sound2.stop();
  }
  
  fill("red");
  fill(200,50,0, 120);
  stroke(0);
  image(zone1_img, zone1Pos.x,zone1Pos.y,40, 65); 
  textAlign(CENTER)
  
  
  
  if(distance_zone2Pos_avatar<0.020&& !sound4.isPlaying()){
    print("l'avatar est entré dans la zone de Vald")
    sound4.play();
  }
  // si on sort de la zone
  if(distance_zone2Pos_avatar>0.020){
    print("l'avatar est sorti de la zone de Vald")
    sound4.stop();
  }
  
  fill("red");
  image(zone2_img, zone2Pos.x,zone2Pos.y, 40, 65);
  stroke(0);
  textAlign(CENTER)

  if(distance_zone3Pos_avatar<0.020&& !sound5.isPlaying()){
    print("l'avatar est entré dans la zone de Booba")
    sound5.play();
  }
  // si on sort de la zone
  if(distance_zone3Pos_avatar>0.020){
    print("l'avatar est sorti de la zone de Booba")
    sound5.stop();
  }
  
  fill("red");
  fill(200,50,0, 120);
  stroke(0);
  image(zone3_img, zone3Pos.x,zone3Pos.y, 40, 65);
  textAlign(CENTER);
  imageMode(CENTER);
  
  
  if(distance_zone4Pos_avatar<0.020&& !sound6.isPlaying()){
    print("l'avatar est entré dans la zone de Niska")
    sound6.play();
  }
  // si on sort de la zone
  if(distance_zone4Pos_avatar>0.020){
    print("l'avatar est sorti de la zone de Niska")
    sound6.stop();
  }
  
  fill("red");
  image(zone4_img, zone4Pos.x,zone4Pos.y, 40, 65);
  stroke(0);
  textAlign(CENTER)

  if(distance_zone5Pos_avatar<0.020&& !sound7.isPlaying()){
    print("l'avatar est entré dans la zone de Rim'K")
    sound7.play();
  }
  // si on sort de la zone
  if(distance_zone5Pos_avatar>0.020){
    print("l'avatar est sorti de la zone de Rim'K")
    sound7.stop();
  }
  
  fill("red");
  fill(200,50,0, 120);
  stroke(0);
  image(zone5_img, zone5Pos.x,zone5Pos.y, 40, 65);
  textAlign(CENTER)
  
  if(distance_zone6Pos_avatar<0.020&& !sound8.isPlaying()){
    print("l'avatar est entré dans la zone de La Fève")
    sound8.play();
  }
  // si on sort de la zone
  if(distance_zone6Pos_avatar>0.020){
    print("l'avatar est sorti de la zone de La Fève")
    sound8.stop();
  }
  
  fill("red");
  fill(200,50,0, 120);
  stroke(0);
  image(zone6_img, zone6Pos.x,zone6Pos.y, 40, 65);
  textAlign(CENTER)
  
if(distance_zone7Pos_avatar<0.009 && !sound1.isPlaying()){
    print("l'avatar est entré dans la zone de Georgio")
    sound1.play();
  }
  // si on sort de la zone
  if(distance_zone7Pos_avatar>0.009){
    print("l'avatar est sorti de la zone de Georgio")
    sound1.stop();
  }
  
  fill("red");
  fill(200,50,0, 120);
  stroke(0);
  image(zone7_img, zone7Pos.x,zone7Pos.y, 40, 65);
  textAlign(CENTER)
  
if(distance_zone8Pos_avatar<0.020&& !sound3.isPlaying()){
    print("l'avatar est entré dans la zone de Alpha Wann")
    sound3.play();
  }
  // si on sort de la zone
  if(distance_zone8Pos_avatar>0.020){
    print("l'avatar est sorti de la zone de Alpha Wann")
    sound3.stop();
  }
  
  fill("red");
  fill(200,50,0, 120);
  stroke(0);
  image(zone8_img, zone8Pos.x,zone8Pos.y, 40, 65);
  textAlign(CENTER)
  
if(distance_zone9Pos_avatar<0.020&& !sound9.isPlaying()){
    print("l'avatar est entré dans la zone de Jazzy Bazz")
    sound9.play();
  }
  // si on sort de la zone
  if(distance_zone9Pos_avatar>0.020){
    print("l'avatar est sorti de la zone de Jazzy Bazz")
    sound9.stop();
  }
  
  fill("red");
  fill(200,50,0, 120);
  stroke(0);
  image(zone9_img, zone9Pos.x,zone9Pos.y, 40, 65);
  textAlign(CENTER)
  
} // fin de la fonction draw

function keyPressed(){
  
  if(key == 'i'){
    print("distance lat edna-souris = " + abs(edna_lat-mousePos.lat)); 
    print("distance lng edna-souris = " + abs(edna_lng-mousePos.lng));
  }
  
  if(key == 'd'){
      // tour bretagne - EDNA
      let distance = getDistance([47.217061367605126,-1.5580521187386853], [47.204453255090016, -1.5630417793063813])
      //let distance = getDistance([47.18,-1.55], [44.841225, -0.5800364])
      print("distance = " + distance)
  }
  
}

// Test distance
function getDistance(origin, destination) {
    // return distance in meters
    var lon1 = toRadian(origin[1]),
        lat1 = toRadian(origin[0]),
        lon2 = toRadian(destination[1]),
        lat2 = toRadian(destination[0]);

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
}
function toRadian(degree) {
    return degree*Math.PI/180;
}






