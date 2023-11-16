import styled from "styled-components";
import fillerImg from "../assets/no-projects.png";
const NoProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  & p {
    color: #332e2b;
  }
`;
const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;

const NoSelectedProject = () => {
  return (
    <NoProjectDiv>
      <StyledImg src={fillerImg}></StyledImg>
      <p>No Project selected</p>
      <p>Select a project or create a new one</p>
    </NoProjectDiv>
  );
};
export default NoSelectedProject;
