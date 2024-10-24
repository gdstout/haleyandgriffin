import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const FooterContainer = styled("div")({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "45px",
  backgroundColor: "rgba(100,150,118, 0.1)",
});

const FooterContent = styled("div")({
  display: "flex",
  height: "45px",
  alignItems: "center",
  justifyContent: "center"
});

const Footer = () => {
  let content = (
    <FooterContainer>
      <FooterContent>
        <Typography variant="body2">© Griffin Stout 2024</Typography>
      </FooterContent>
    </FooterContainer>
  );
  return content;
};

export default Footer;
