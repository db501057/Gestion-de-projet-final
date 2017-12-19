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
        var videoFound = new VideoTrack()

        videoFound.onload() = function() {
            ctx.drawImage('1 Hour Space Flight [360p].mp4', 0, 0)
        }

        imageObj.onload = function ()
       {
           ctx.translate(w/2, h/2);
           ctx.rotate(0);
            ctx.drawImage(imageObj, -w/2, -h/2, w, h);
            ctx.rotate(1);
        };
        imageObj.src = 'depositphotos_147598389-stock-photo-spaceship-interior-with-view-on.png';

        //requestAnimationFrame(animeCanvas);
    }

    return{
        init
    }

}