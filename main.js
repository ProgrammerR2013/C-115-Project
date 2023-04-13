function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);

}

function draw() {
    image(video, 0, 0, 300, 300);
    poseNet.on('pose', gotPoses);

}

function take_snapshot() {
    save("myMoustacheImage.png");
}

function modelLoaded() {
    console.log("Pose.net is initialized");
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}