import { styled } from "@mui/material";
import React, { useEffect, useRef } from "react";
const StyledCanvas = styled("canvas")({
  aspectRatio: "3/4",
  border: "1px solid #6d8a6d",
  borderRadius:"5px"
});

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;
    let mouseX = canvas.width / 2 - props.PADDLE_LENGTH / 2;
    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      let cssRect = canvas.getBoundingClientRect();
      mouseX = Math.round(
        e.touches[e.touches.length - 1].screenX - cssRect.left
      );
    });

    const render = () => {
      frameCount++;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      props.draw(context, frameCount, mouseX);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [props.draw]);

  let content = <StyledCanvas ref={canvasRef} {...props} />;
  return content;
};

export default Canvas;
