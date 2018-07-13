$(document).ready(function(){

}).keydown(dinoJump);

/**
 * when user press tab or up arrow 
 * dino img will animate top to bottom
 * @param {*} e listing on keyboard events
 */
const dinoJump = (e) =>{
    const key = e.which;
    if(key == 32 || key == 38){
        $(".dino-img").animate({
            top: '-40px'
            },300);
        $(".dino-img").animate({
                top: '20px'
            }, 300);   
    }
}

