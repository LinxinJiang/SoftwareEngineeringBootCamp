$(function(){

  // Cat&Dog table
   $("#catClick1").click(function(){
     $("#cat1").append( '<img src="Cat1.jpeg" alt="Cat" width="300px">' );
   });


   $("#catClick2").click(function(){
     $("#cat2").append( '<img src="Cat2.jpeg" alt="Cat" width="300px">' );
   });

   $("#catClick3").click(function(){
     $("#cat3").append( '<img src="Cat3.jpg" alt="Cat" width="300px">' );
   });


    // Dog table
     $("#dogClick1").click(function(){
       $("#dog1").append( '<img src="Dog1.jpeg" alt="Dog" width="300px">' );
     });

     $("#dogClick2").click(function(){
       $("#dog2").append( '<img src="Dog2.jpeg" alt="Dog" width="300px">' );
     });

     $("#dogClick3").click(function(){
       $("#dog3").append( '<img src="Dog3.jpeg" alt="Dog" width="300px">' );
     });

});
