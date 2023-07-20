import React from "react";
import Canvas from "./canvas";
import Smiley from "../images/smiley_small.jpg";
import { styled } from "@mui/material";

const ImgContainer = styled("div")({
  display: "none"
});

const Img = styled("img")({
  width: "100%"
})

const Breaker = (props) => {
  let setup = true;
  let won = false;
  let wonTime = 0;
  let toggledFireworks = false;

  let PADDLE_LENGTH = 60;
  const PADDLE_WIDTH = 6;
  const BOTTOM_OFFSET = 20;
  const PADDLE_COLOR = "#6d8a6d";
  let paddleX = 0;

  const BALL_RADIUS = 6;
  const BALL_COLOR = "#165916";
  let ballX = 0;
  let ballY = 0;
  let ballVel = 0;
  let ballAngle; // in radians

  let brickWidth = 0;
  let brickHeight = 0;
  const spacing = 1;
  let bricks = [
    [
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
    ],
    [
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
    ],
    [
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
    ],
    [
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
      { img: Smiley, visible: true, xPos: 0, yPos: 0 },
    ],
  ];

  let bgImg;
  let offScreenCanvas;
  let oscContext;

  const draw = (context, frameCount, mouseX) => {
    //context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //context.fillText("X: " + mouseX, 10, 10);
    if (setup) {
      ballX = context.canvas.width / 2 - BALL_RADIUS;
      ballY = context.canvas.height / 2 + 2 * BALL_RADIUS;
      ballVel = 6;
      ballAngle = Math.atan2(
        context.canvas.height - BOTTOM_OFFSET - ballY,
        paddleX - ballX
      );
      
      bgImg = document.getElementById("smiley");
      let ratio = context.canvas.width / 1200;
      offScreenCanvas = new OffscreenCanvas(context.canvas.width, 800 * ratio);
      oscContext = offScreenCanvas.getContext("2d");
      oscContext.drawImage(bgImg, 0, 0, context.canvas.width, bgImg.height * ratio);

      setup = false;
    }

    if (won) {
      if (frameCount % 18 === 0) {
        if (ballVel > 0) {
          ballVel -= 0.5;
        }else{
          props.play();
          props.toggleFireworks();
        }
      }

    }

    moveAndCollide(context, mouseX);

    drawPaddle(context, mouseX);
    drawBall(context);
    drawBricks(context);
  };

  const drawPaddle = (context, mouseX) => {
    // check paddle bounds
    paddleX = mouseX;
    if (mouseX < PADDLE_LENGTH / 2) {
      paddleX = PADDLE_LENGTH / 2;
    }
    if (mouseX > context.canvas.width - PADDLE_LENGTH / 2) {
      paddleX = context.canvas.width - PADDLE_LENGTH / 2;
    }

    // draw paddle
    context.fillStyle = PADDLE_COLOR;
    context.rect(
      paddleX - PADDLE_LENGTH / 2,
      context.canvas.height - BOTTOM_OFFSET,
      PADDLE_LENGTH,
      PADDLE_WIDTH
    );
    context.fill();
  };

  const moveAndCollide = (context, mouseX) => {
    let deltaX = ballVel * Math.cos(ballAngle);
    let deltaY = ballVel * Math.sin(ballAngle);
    ballX = ballX + deltaX;
    ballY = ballY + deltaY;

    // detect canvas edges
    if (ballX - BALL_RADIUS < 0 || ballX + BALL_RADIUS > context.canvas.width) {
      bounceOffVerticalWall();
    }
    if (
      ballY - BALL_RADIUS < 0 ||
      ballY + BALL_RADIUS >= context.canvas.height
    ) {
      if (ballY + BALL_RADIUS >= context.canvas.height) {
        // game over
        if (!won) {
          resetGame();
        }
      }
      bounceOffHorizontalWall();
    }

    // detect paddle OR detect bricks (can never be hitting both)
    // only check when the ball is moving down in the lower half
    if (
      ballAngle > 0 &&
      ballAngle < Math.PI &&
      ballY > context.canvas.height / 2 + 10
    ) {
      if (
        ballY + BALL_RADIUS > context.canvas.height - BOTTOM_OFFSET &&
        ballX > paddleX - PADDLE_LENGTH / 2 &&
        ballX < paddleX + PADDLE_LENGTH / 2
      ) {
        bounceOffPaddle(paddleX);
      }
    } else {
      for (let brickRow of bricks) {
        for (let brick of brickRow) {
          if (checkBrickCollision(brick) === true) {
            brick.visible = false;
            won = checkWinScenario();
          }
        }
      }
    }
  };

  const checkBrickCollision = (brick) => {
    if (brick.visible) {
      // detect collision
      let xDist = Math.abs(ballX - (brick.xPos + brickWidth / 2));
      let yDist = Math.abs(ballY - (brick.yPos + brickHeight / 2));

      if (xDist > brickWidth / 2 + BALL_RADIUS) {
        return false;
      }
      if (yDist > brickHeight / 2 + BALL_RADIUS) {
        return false;
      }
      // detect horizontal collision
      if (xDist <= brickWidth / 2) {
        bounceOffHorizontalWall();
        return true;
      }
      // detect vertical collision
      if (yDist <= brickHeight / 2) {
        bounceOffVerticalWall();
        return true;
      }

      // check corner collision
      let cornerDist =
        (xDist - brickWidth / 2) ^ (2 + (yDist - brickHeight / 2)) ^ 2;
      if ((cornerDist <= BALL_RADIUS) ^ 2) {
        bounceOffCorner();
        return true;
      }
    }
    return false;
  };

  const bounceOffHorizontalWall = () => {
    ballAngle = 2 * Math.PI - ballAngle;
    normalizeBallAngle();
  };

  const bounceOffVerticalWall = () => {
    ballAngle = Math.PI - ballAngle;
    normalizeBallAngle();
  };

  const bounceOffCorner = () => {
    ballAngle = Math.PI / 2 - ballAngle;
    normalizeBallAngle();
  };

  const bounceOffPaddle = (paddleX) => {
    // calculate where the ball bounces on the paddle, then map to the range PI - 2PI
    ballAngle =
      Math.PI +
      Math.PI * ((ballX - (paddleX - PADDLE_LENGTH / 2)) / PADDLE_LENGTH);
    normalizeBallAngle();
  };

  const normalizeBallAngle = () => {
    ballAngle = ballAngle % (2 * Math.PI);
    if (ballAngle < 0) {
      ballAngle += 2 * Math.PI;
    }
    // make sure angle is not too sharp
    let sharpness = 10; //smaller is less sharp
    if (ballAngle > 0 && ballAngle < Math.PI / sharpness) {
      ballAngle = Math.PI / sharpness;
    } else if (
      ballAngle <= 2 * Math.PI &&
      ballAngle > Math.PI * 2 - Math.PI / sharpness
    ) {
      ballAngle = Math.PI * 2 - Math.PI / sharpness;
    } else if (
      ballAngle < Math.PI &&
      ballAngle > Math.PI - Math.PI / sharpness
    ) {
      ballAngle = Math.PI - Math.PI / sharpness;
    } else if (
      ballAngle >= Math.PI &&
      ballAngle < Math.PI + Math.PI / sharpness
    ) {
      ballAngle = Math.PI + Math.PI / sharpness;
    }
  };

  const drawBall = (context) => {
    context.fillStyle = BALL_COLOR;
    context.beginPath();
    context.arc(ballX, ballY, BALL_RADIUS, 0, Math.PI * 2);
    context.fill();
  };

  const drawBricks = (context) => {
    context.fillStyle = "#000000";
    brickWidth = context.canvas.width / bricks[0].length;
    brickHeight = context.canvas.height / 2 / bricks.length;

    // need row and column to calculate
    for (let i = 0; i < bricks.length; i++) {
      for (let j = 0; j < bricks[i].length; j++) {
        if (bricks[i][j].visible) {
          let xPos = j * brickWidth;
          let yPos = i * brickHeight;
          bricks[i][j].xPos = xPos;
          bricks[i][j].yPos = yPos;
          // context.rect(
          //   xPos + spacing,
          //   yPos + spacing,
          //   brickWidth - spacing * 2,
          //   brickHeight - spacing * 2
          // );
          // context.fill();
          context.drawImage(offScreenCanvas, xPos + spacing, yPos + spacing, brickWidth - spacing * 2, brickHeight - spacing* 2, xPos + spacing, yPos + spacing, brickWidth - spacing * 2, brickHeight - spacing* 2);
        }
      }
    }
  };

  const resetGame = () => {
    for (let brickRow of bricks) {
      for (let brick of brickRow) {
        brick.visible = true;
      }
    }
    setup = true;
  };

  const checkWinScenario = () => {
    for (let brickRow of bricks) {
      for (let brick of brickRow) {
        if (brick.visible) {
          return false;
        }
      }
    }
    return true;
  };

  let content = (
    <>
      <Canvas draw={draw} PADDLE_LENGTH={PADDLE_LENGTH} setup={setup} />
      <ImgContainer>
        <Img id="smiley" src={Smiley}/>
      </ImgContainer>
    </>
  );
  return content;
};

export default Breaker;
