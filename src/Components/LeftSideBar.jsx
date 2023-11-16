import styled from "styled-components";
//import { useState } from "react";
const LeftDiv = styled.div`
  background-color: #110d0d;
  color: #e7e5e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 100vh;
  padding-top: 2rem;
  & h1 {
    font-weight: bold;
  }
`;
export const AddBtn = styled.button`
  background-color: #332e2b;
  color: #e7e5e4;
  border-radius: 4px;
  padding: 10px;
  &:hover {
    background-color: #46403e;
    color: white;
  }
`;
const ProjectName = styled.p`
  color: #e7e5e4;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: normal;
  &:hover {
    background-color: #46403e;
    color: white;
  }
`;
const ProjectTitleSection = styled.div`
  text-align: left;
`;

const LeftSideBar = ({ addNewProjectHandler, projects, onSelectProject }) => {
  //const [isAddClicked, setIsAddClicked] = useState(false);
  const addBtnClickHandler = () => {
    addNewProjectHandler();
  };
  function selectProjectHandler(project) {
    onSelectProject(project);
  }
  return (
    <LeftDiv>
      <h1>YOUR PROJECTS</h1>
      <AddBtn onClick={addBtnClickHandler}>+ Add Project</AddBtn>
      <ProjectTitleSection>
        {projects.map((project) => {
          return (
            <ProjectName
              onClick={() => {
                selectProjectHandler(project);
              }}
              key={project.id}
            >
              {project.title}
            </ProjectName>
          );
        })}
      </ProjectTitleSection>
    </LeftDiv>
  );
};
export default LeftSideBar;
