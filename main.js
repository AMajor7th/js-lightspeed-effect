let speed;
let slider;

let stars = [];


function setup(){
    createCanvas(600, 600);
    slider = createSlider(10, 50, 10, 0.5);
    slider.style('width', '200px');
    for (let i = 0; i < 1000; i++){
        stars[i] = new Star();
    }
}

function draw(){
    speed = slider.value();
    background(0);
    translate(width/2, height/2);
    for (let i = 0; i < stars.length; i++){
        stars[i].show();
        stars[i].update();
    }
}