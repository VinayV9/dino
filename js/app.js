$(document).ready(function(){
   console.log("loaded");
   setInterval("moveObstacles()", 2000);
   
}).keydown(function(e){
    const key = e.which;
    if(key == 32 || key == 38){
        $(".dino-img").animate({
            top: '-230px'
            },400);
        $(".dino-img").animate({
                top: '-80px'
            }, 400);     
    }
});
/**
 * when user press tab or up arrow 
 * dino img will animate top to bottom
 * @param {*} e listing on keyboard events
 */  

 /**
  *  we have seven bushes 
  * each one is 50px wide
  *  random
  *    one bush 
  *    two bushes
  *    three bushes
  */
const moveObstacles = () => {
     
     let idx = Math.floor(Math.random()*3)+1;
     let obId = "obs"+idx;
     let w = 100 - idx*5+'%';

     $("#game-ground").append('<div class="obstacles"></div>');
     setInterval("checkCollision()", 20);
     $(".obstacles")
     .attr('id', obId)
     .animate({right:w},1700,"linear",
      function(){ 
            $(this).remove();            
      });
};

const checkCollision = () => {
    var pos1=$(".obstacles").position();
    var pos2=$(".dino-img").position();
    console.log(pos1.left , pos1.top, pos2.left, pos2.top);
    if((pos1.left > -40 && pos1.left < 160) && (pos2.top >= -80 && pos2.top < 130)){
        alert('you lose');
    }
    // alert('you lose');
}
