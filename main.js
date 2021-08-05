function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);

video.hide();
}


var SpeechRecognition=window.webkitSpeechRecognition;
 var recognition=new SpeechRecognition;



video="";
status="";
objects="";


function start(){
        objectDetector=ml5.objectDetector("cocossd" , modelLoaded);
        document.getElementById("status").innerHTML="status : Detecting Objects";
        input_object=document.getElementById("input").value; 
        if(input_object==detected_object){
            document.getElementById("result").innerHTML="Object Found";
            speak_data="Object Found";
        }
        else{
            document.getElementById("result").innerHTML="Object Not Found";
            speak_data="Object Not Found";
        }
        var synth =window.speechSynthesis;

 

 var utterthis =new SpeechSynthesisUtterance(speak_data);

 synth.speak(utterthis);

    }

    
    function draw(){
    image(video,0,0,380,380);

    if( status !=""){
    objectDetector.detect(video, gotResult);
    for(i=0; i< objects.length; i++ ) {
        document.getElementById("status").innerHTML="status : Detecting Objects";
        fill("#FF0000");
        percent= floor(objects[i].confidence*100);
        text(objects[i].label + " " + percent +"%",objects[i].x + 15 , objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        detected_object=object[i].label;
        
    }
    }
    }
    function modelLoaded(){
        status=true;
        console.log("ModelLoaded");
    }

        



    function gotResult(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            objects=results;
        }
    }

