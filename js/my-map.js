 function initMap() {
        let pos = {lat: 52.38693786895072, lng: 9.72579856815299};
   let Mymap = new google.maps.Map(document.getElementById("map"), {
    center: pos ,
    zoom: 6.6,
  });
  let marker = new google.maps.Marker({
    position: pos,
    map: Mymap,
    title: "💶Заработная плата от 25€/м²🛏 Жильё Бесплатно ",
    icon: "../images/for_maps/icon_droplet_25€-m2.png"
  });window.initMap = initMap;

  
  marker.addListener("click", function(){
    info.open(myMap, marker);
  })}