function initMap() {
  var uluru = {lat: 9.916889, lng: -84.238306};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    animation: google.maps.Animation.BOUNCE
  });
}


