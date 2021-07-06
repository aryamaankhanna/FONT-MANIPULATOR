noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,500);
canvas.position(560,150);


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet Is Initialized!')
}
function gotPoses(results)
{
if(results.length > 0)
 {
     console.log(results);
     noseX = results[0].pose.nose.x+20;
     noseY = results[0].pose.nose.y+20;
     console.log("noseX = " + noseX +"noseY = " + noseY);

     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);
     console.log(" leftWristX = " + leftWristX + "righttWristX = " + rightWristX + "difference" + difference);
 }
}
function draw ()
{
background('#00FF00')

document.getElementById("text_side").innerHTML = "Width And Height of a text Will be " + difference +"px"
text('hello',noseX, noseY);
fill('#F90093');
textSize(difference);
}

