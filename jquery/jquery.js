// researched and used jquery
// my code starts here
$(document).ready(function(){

    $('.view-joke1').click(function(){
        $('.joke-open1').toggle(500, function(){
         // $('.view-joke1').fadeIn();
         
          
          
        });
        
    });
    $('.view-joke2').click(function(){
        $('.joke-open2').toggle(500, function(){
          //$('.view-joke2').fadeIn(1000);
        });
        
    });
    $('.view-joke3').click(function(){
        $('.joke-open3').toggle(500, function(){
          //$('.view-joke3').fadeIn();
        });
        
    });
    $('.view-joke4').click(function(){
        $('.joke-open4').toggle(500, function(){
          //$('.view-joke4').fadeIn();
        });
        
    });

    $('.view-joke5').click(function(){
      $('.joke-open5').toggle(500, function(){
        //$('.view-joke5').fadeIn();
      });
      
  });

  $('.view-joke6').click(function(){
    $('.joke-open6').toggle(500, function(){
      //$('.view-joke6').fadeIn();
    });
    
});
});