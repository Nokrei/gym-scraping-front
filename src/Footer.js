import React from "react";

//Import Typography for fast styling
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        width: "100%",
        textAlign: "center",
        left: "0",
        bottom: "0",
        right: "0",
      }}
    >
      <Typography variant="body1">
        Copyright Piotr Mrozowski {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
