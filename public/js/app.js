$(document).ready(function(){
  let date = new Date().getFullYear();
  $('.date').innerText = date;
  console.log(date);

let serv_desc= $('.services-description');
let hide_on_hover = $('.hide-on-hover');
    
    for (let i = 0; i < serv_desc.length; i++) {
     hide_on_hover.eq(i).mouseover(function(){
       hide_on_hover.eq(i).hide(1000)
       serv_desc.eq(i).show()
     })

     serv_desc.eq(i).mouseleave(function(){
       hide_on_hover.eq(i).show()
       serv_desc.eq(i).hide(1000)
     })
    } 
})


 /*
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

*/