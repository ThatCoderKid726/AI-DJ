song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function preload()
{
	song1 = loadSound("Harry Potter Remix.mp3");
	song2 = loadSound("Aaron_Smith_-_Dancin_(KRONO_Remix).mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    song2_status = song2.isPlaying();
    if((0<rightWristX && rightWristX<= 300) &&
     (0<rightWristY &&rightWristY<=300))
   { if(song2_status == false)
   { song.play(); } } 

   leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
    song1_status = song1.isPlaying();
    if((0<leftWristX && leftWristX<= 300) &&
     (0<leftWristY &&leftWristY<=300))
   { if(song1_status == false)
   { song.play(); } } 

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#0774e0");
    stroke("#0774e0");

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX,leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    
    }
}

function play() {
    song.play();
}