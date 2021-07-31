function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);

video.hide();

objectDetector=ml5.objectDetector('cocossd',modelLoaded);}

function modelLoaded(){
        console.log("model Loaded!");
}
