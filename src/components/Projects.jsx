import styled from "styled-components";
import { ImgApartments } from "../constants";
import CardApartments from "./CardApartments";

const Projects = () => {
  return (
    <Box>
      <p>Проекты</p>
      <span></span>
      {ImgApartments.map((i) => (
        <CardApartments data={i} key={i.id} />
      ))}
    </Box>
  );
};
export default Projects;
const Box = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & > :nth-child(1) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    top: 110px;
    padding-bottom: 20px;
    font-size: 30px;
    border-bottom: 5px solid #1e522096;
  }
  & > :nth-child(2) {
    position: absolute;
    width: 90%;
    height: 5px;
    top: 166px;
    box-shadow: 0px 6px 20px 0px #0d6a06;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
