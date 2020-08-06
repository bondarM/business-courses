$(document).ready(function () {
  $(".menu").click(function (event) {
    $(".menu__hidden2").toggleClass("menu__hidden");
    // $(".menu__hidden2").toggleClass("menu__hidden");
  });

  $(".q_bl").click(function (event) {
    $(".time__info").toggleClass("op1");
    // $(".menu__hidden2").toggleClass("menu__hidden");
  });
});
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.026411, lng: 36.217315 },
    zoom: 17,
  });
}

map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 17,
});
