$(document).ready(function(){

    //dynamically  show the date 
    let date = new Date().getFullYear();
    $('.date').text(date);
    console.log(date);
  
    //animation on the services page 
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

     //toggle class  on the navigation
      $("#header .nav-item") .click(function () {
        // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
        if ($(this).hasClass("active")) {
          $(".nav-link").removeClass("active");
        }
        // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
        else {
          $(".nav-link").removeClass("active");
          $(this).addClass("active");
        }
      });
     
});
