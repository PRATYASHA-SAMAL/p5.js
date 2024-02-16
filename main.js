function preload(){
}

function setup(){
    canvas = createCanvas(640, 480)
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    

}

function draw(){
    image(video, 0, 0, 640, 480);
  

    stroke(255, 94, 180);
    fill(255, 94, 180);

    rect(50, 0, 540, 25);
    rect(50, 460, 540, 25);
    rect(0, 20, 25, 500);
    rect(615, 33, 25, 500);

    fill(74, 174, 255);
    fill(74, 174, 255);

    circle(20, 20, 70);
    circle(618,20,70);
    circle(20,460,70);
    circle(618,460,70);




}

function take_snapshot(){
    save('birthday_pic.png');
   }
   