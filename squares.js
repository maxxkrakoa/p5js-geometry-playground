let width = 400;
let height = 400;
let size = 280;

function setup() {
    createCanvas(width, height);
}

function draw() {
    background(220);

    angleMode(DEGREES)
    rectMode(CENTER);
    noFill();
    translate(width / 2, height / 2);

    push();
    drawSquaresInSquares(size);
    pop();

    push();
    rotate(360 / 12);
    drawSquaresInSquares(size);
    pop();

    push();
    rotate(360 / 12);
    rotate(360 / 12);
    drawSquaresInSquares(size);
    pop();
}

function drawSquare(squareSize) {
    square(0, 0, squareSize);
}

function drawSquaresInSquares(squareSize) {
    if (squareSize > 10) {
        drawSquare(squareSize);
        rotate(45);
        halfSquare = squareSize / 2;
        drawSquaresInSquares(sqrt(halfSquare ** 2 + halfSquare ** 2));
    }
}