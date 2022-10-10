import styled from "@emotion/styled";
import { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

const ProjectInnerPage = () => {
  const [radio, setRadio] = useState("");
  const [values, setValues] = useState({
    buyerName: "",
    phoneNamber: "",
    date: "",
    pay: "",
  });
  const radioOpt = [
    { value: "SOLD", id: "1", label: "Продано" },
    { value: "BOOKED", id: "2", label: "Бронь" },
  ];

  const getValuesHandler = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };
  const radioButtonHandler = (e) => {
    setRadio(e);
  };
  return (
    <Wrapper>
      <WrapImage>
        <img
          width="50%"
          src="http://barakat.kg/media/plan/14_3%D0%BA.%D0%BA%D0%B2.83.17.png"
          alt=""
        />
      </WrapImage>
      <WrapForm>
        <div>
          {radioOpt.map((el) => (
            <div>
              <input
                name="simple"
                type="radio"
                onChange={() => radioButtonHandler(el.value)}
                id={el.id}
              />
              <label htmlFor={el.id}>{el.label}</label>
            </div>
          ))}
        </div>
        <Input
          name="buyerName"
          onChange={getValuesHandler}
          placeholder="Ф. И. О"
        />
        <Input
          name="phoneNamber"
          onChange={getValuesHandler}
          placeholder="Телефон:"
        />
        <Input
          name="date"
          onChange={getValuesHandler}
          type="date"
          placeholder="Дата"
        />
        <Input name="pay" onChange={getValuesHandler} placeholder="Оплата" />
        <Button variant="contained">Сохранить</Button>
      </WrapForm>
      <WrapResult>
        <table>
          <tbody>
            <tr>
              <th>№</th>
              <th>Ф И О</th>
              <th>Телефон</th>
              <th>Оплата</th>
              <th>Дата</th>
              <th>Действия</th>
            </tr>
            <tr>
              <td>1</td>
              <td>{values.buyerName}</td>
              <td>{values.phoneNamber}</td>
              <td>{values.pay}</td>
              <td>{values.date}</td>
              <td><Button variant='deleted'>Удалить</Button></td>
            </tr>
          </tbody>
        </table>
      </WrapResult>
    </Wrapper>
  );
};
export default ProjectInnerPage;

const Wrapper = styled("div")`
  margin: auto;
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`;
const WrapImage = styled("div")`
  margin: 35px auto;
  max-width: 500px;
  text-align: center;
  img {
    margin: auto;
  }
`;
const WrapForm = styled("form")`
  margin: 0 auto;
  padding: 40px 40px 0 40px;
  border: 1px solid #0b363c;
  max-width: 400px;
  height: 450px;
  border-radius: 10px;
  label {
    color: #0b363c;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
  > div > div {
    display: flex;
  }
  > div > div:last-of-type > input {
    accent-color: #fbff00;
    margin-right: 10px;
  }
  > div > div:first-of-type > input {
    accent-color: red;
    margin-right: 10px;
  }
  > input {
    height: 35px;
    padding: 10px;
    font-family: "Roboto", sans-serif;
    margin-top: 10%;
    border: 1px solid #0b363c;
  }
  button {
    width: 100%;
    margin-top: 10%;
    &:hover {
      color: #fff;
    }
  }
`;
const WrapResult = styled("div")`
 overflow: auto;
  width: 90%;
  height: 400px;
  margin: 130px auto 0 auto;
  table {
    border-collapse: collapse;
    width: 1200px;
    @media screen and (max-width: 700px){
      width: 800px;
    }
    tbody tr th, td {
      padding: 10px;
      border: 1px solid #0b363c;
    }
  }
  th{
    text-align: left;
  }
  tr> td> button{
    font-size: 12px;
    height: 25px;
  }
`;
