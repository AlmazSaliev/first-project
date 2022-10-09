import { Link } from "react-router-dom";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { styled } from "@mui/material";

const Registration = () => {
  return (
    <Wrapper>
      <StyledForm>
        <h3>РЕГИСТРАЦИЯ</h3>
        <Input type="text" placeholder="логин" />
        <Input type="password" placeholder="пароль" />
        <Button variant="contained">Регистрация</Button>
      </StyledForm>
      <Link to="/projects">Registration</Link>
    </Wrapper>
  );
};
export default Registration;
const Wrapper = styled("div")`
  width: 100%;
  margin: auto;
`;
const StyledForm = styled("form")`
  text-align: center;
  border-radius: 10px;
  margin: 50px auto 0 auto;
  padding: 20px;
  border: 1px solid #0b363c;
  max-width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    height: 35px;
    padding: 10px;
  }
  h3 {
    color:#0b363c;
  }
`;
