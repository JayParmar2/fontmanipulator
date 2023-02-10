leftwristx =0;
rightwristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);


}

function modelloaded(){
    console.log("posenet is initialized");

}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        console.log("leftwristx = "+leftwristx + " rightwristx = "+rightwristx);
        difference= floor(leftwristx - rightwristx);
        console.log("difference = "+difference);  
    }

}

function draw(){
    background("lightblue");
    document.getElementById("square_side").innerHTML="fontsize of text= "+difference+" px";
    fill("#deff0a");
    textSize(difference);
    text("JAY PARMAR",50,300);
    

}


