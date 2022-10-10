import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImagesCard from "./ImagesCard";

const ProjectDetail = () => {
  const id = useParams();
  return (
    <WrapperContainer>
      <Container>
        <p>projectdetail by id {id.id}</p>
        <ImagesWrapper>
          <ImagesCard />
        </ImagesWrapper>
      </Container>
    </WrapperContainer>
  );
};
export default ProjectDetail;
const WrapperContainer = styled.div`
  width: 100%;
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const ImagesWrapper = styled.div`
  width: 90%;
`;
