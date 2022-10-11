import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Card from "./UI/Card";
import { Floor, ImgApartments } from "../constants";
import { useState } from "react";
import LoadingSpinner from "./UI/LoadingSpinner";

const ProjectDetail = () => {
  const id = useParams();
  const [show, setshow] = useState(false);
  setTimeout(() => {
    setshow(true);
  }, 1700);
  console.log(id, show);
  const title = ImgApartments.find((i) => i.id === +id.id);
  console.log(title, "title");
  return (
    <WrapperContainer>
      <LinkRout>
        <Link to="/projects">Проекты </Link>
      </LinkRout>
      <div>
        <h1>{title.title}</h1>
        <p>Статистика</p>
        <span> </span>
        <p>
          Этажей: {12} , квартир: {150} , из них: продано: <span>{5}</span> /
          забронировано:
          <span>{18}</span> / свободные: <span>{50}</span> .
        </p>
      </div>
      {show || <LoadingSpinner />}
      <Container>
        {Floor.map((el) => {
          return (
            <Card
              key={el.id}
              id={el.id}
              image={el.image}
              sales={el.sales}
              booked={el.booked}
              free={el.free}
            />
          );
        })}
      </Container>
    </WrapperContainer>
  );
};
export default ProjectDetail;
const LinkRout = styled("div")`
  position: absolute;
  & > a {
    text-decoration: none;
    color: #002102;
    border-bottom: 0.4vh solid #002102;
  }
  margin: 0 auto;
  top: 110px;
  width: 90%;
  left: 5vw;
  font-size: 1.5vw;
  @media screen and (max-width: 700px) {
    font-size: 2.5vw;
    & > a {
      border-bottom: 0.2vh solid #002102;
    }
  }
`;
const WrapperContainer = styled("div")`
  margin: 0 auto;
  margin-top: 160px;
  width: 100%;
  @media screen and (max-width: 700px) {
    margin-top: 140px;
  }
  & > :nth-child(2) {
    position: relative;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.5vw;
    color: #0b363c;
    & > h1 {
      text-transform: capitalize;
    }
    @media screen and (max-width: 700px) {
      font-size: 2vw;
      & > p {
        font-size: 2.3vw;
      }
    }
    & > :nth-child(2) {
      font-weight: bold;
      border-bottom: 0.4vw solid darkgreen;
      margin-bottom: 2%;
    }
    & > :nth-child(3) {
      position: absolute;
      box-shadow: 0px 5px 10px 1px darkgreen;
      height: 2%;
      width: 100%;
      left: 0;
      top: 60%;
    }
    & > p > :nth-child(1) {
      color: red;
    }
    & > p > :nth-child(2) {
      color: orange;
    }
    & > p > :nth-child(3) {
      color: blue;
    }
  }
`;
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  gap: 15px;
`;
