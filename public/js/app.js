$(document).ready(function () {

  let date = new Date().getFullYear()
  $('.date').text(date);

  //Toogle class active class
 $('#header .nav-link').click( function(){
   if($(this).hasClass('active')){
     $('#header .nav-link').removeClass('active');
   }

   else{
     $('#header .nav-link').removeClass('.active');
     $(this).addClass('active');
   }
 })


});


/*
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

*/