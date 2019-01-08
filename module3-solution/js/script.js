$( document ).ready(() => {
    console.log("A01");
   $("#toggle-button").blur(function(event) {
       console.log("A02");
       $("#collapsable-nav").collapse('hide');
   }) 
});