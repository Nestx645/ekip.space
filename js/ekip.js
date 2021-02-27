/*

===          ===     =============   ===========        ==========    ====      |
   ===    ===              |         \                  |             |   \     |
      ====         X       |    T     \ ========  S     ========   E  |    \    |   N
   ===    ===              |                   /        |             |     \   |
===          ===           |         =========/   *     ==========    |      ====

2020
*/
function soon() {
    zone = document.getElementById("soon_available");
    phrase = "Bientot disponible";
    zone.innerText = phrase;
}
//Change le texte en "bientot disponible" :  onmouseover="soon()" 
function reset() {
    "" = document.getElementById("login");
    "" = document.getElementById("mail");
    "" = document.getElementById("password");
}
function connect() {
    id = document.getElementById("login");
    identifiant = id.value;
    alert("Bonjour " + identifiant + " ! ")
    zone = document.getElementById("form");
    zone.innerText = identifiant;
}
function cacher() {
    zone_a_cacher = document.getElementById("body");
    zone_a_cacher.className="invisible";
}
