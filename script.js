//lorsque que la page est chargé
window.onload = init;

var fw;

function init(){
    fw = new FrameWork();
    fw.init();
}


function FrameWork() {

    let canvas, ctx;          //Les varaible du canvas
    let w ;
    let h;


    function init() {
        canvas = document.querySelector("#canvas");
        w = canvas.width;
        h = canvas.height;
        ctx = canvas.getContext("2d");


        var imageObj = new Image();
        imageObj.onload = function ()
       {
           ctx.rotate(.1);
            ctx.drawImage(imageObj, 0, 0, w, h);
            ctx.rotate(1);
        };
        imageObj.src = 'depositphotos_147598389-stock-photo-spaceship-interior-with-view-on.png';

        //requestAnimationFrame(animeCanvas);
    }

    return{
        init
    }

}