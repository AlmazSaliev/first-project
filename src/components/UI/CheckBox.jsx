import React from "react";
import styled from "@emotion/styled";

function CheckBox({ label, onChange, checked, props }) {
  return (
    <Div>
      <StyledCheckBox
        type="checkbox"
        onChange={onChange}
        checked={checked}
        {...props}
      />
      <Label htmlFor="">{label}</Label>
    </Div>
  );
}

export default CheckBox;
const StyledCheckBox = styled("input")`
  margin-right: 10px;
`;
const Label = styled("label")``;
const Div = styled("div")`
  display: flex;
`;
