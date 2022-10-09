import React from "react";
import ButtonMui from "@mui/material/Button";
import styled from "@emotion/styled";

function Button({ variant, children, onClick, props }) {
  const VARIANTS = {
    outlined: {
      border: "1px solid #0b363c",
      color: "#0b363c",
      " &:hover": {
        color: "#fff",
        backgroundColor: "#0b363c",
        border: "1px solid #0b363c",
      },
    },
    contained: {
      border: "1px solid #0b363c",
      backgroundColor: "#0b363c",
      color: "#fff",
      " &:hover": {
        color: "#fff",
        backgroundColor: "#0b363c",
        border: "1px solid #0b363c",
      },
    },
    deleted: {
      border: "1px solid red",
      backgroundColor: "#fff",
      color: "red",
      " &:hover": {
        color: "#fff",
        backgroundColor: "red",
        border: "1px solid red",
      },
    },
  };

  return (
    <StyledButton styles={VARIANTS[variant]} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}
Button.defaultProps = {
  variant: "outlined",
};

export default Button;
const StyledButton = styled(ButtonMui)`
  border-radius: 0;
  ${({ styles }) => ({ ...styles })}
`;
