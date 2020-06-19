// Script pout la caerte Leaflet
// inspiré de  https://github.com/simonfrey/hugo-leaflet

//Define zoom level with default if not defined
let zoom = 10;
//Create Map
  var mymap = L.map('mapid').setView([48.763292, 2.212633], zoom);
//Add tiles
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
   {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);
  //Simple Marker
    var marker = L.marker([48.713292, 2.212633]).addTo(mymap);
  