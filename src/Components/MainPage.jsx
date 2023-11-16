import LeftSideBar from "./LeftSideBar";
import RightPage from "./RightPage";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 30%;
`;

const Right = styled.div`
  width: 60%;
`;
const MainPage = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });
  let selectedProject;

  function selectedProjectHandler(selected) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: selected.id,
      };
    });
  }

  const addNewProjectHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  };
  function saveProjectClickHandler(newProject) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function cancelBtnClickHandler() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function deleteProjectHandler() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectID
        ),
      };
    });
  }

  function addTaskHandler(enteredTask) {
    setProjectState((prevState) => {
      const taskID = Math.random();
      const newTask = {
        text: enteredTask,
        id: taskID,
        projectID: prevState.selectedProjectID,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function deleteTaskHandler(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  let content;
  if (projectState.selectedProjectID === undefined) {
    content = "No Project Selected";
  } else if (projectState.selectedProjectID === null) {
    content = "Add Project";
  } else {
    content = "Project Selected";
    selectedProject = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectID
    );
    console.log(selectedProject);
  }

  return (
    <Main>
      <Left>
        <LeftSideBar
          projects={projectState.projects}
          addNewProjectHandler={addNewProjectHandler}
          cancelBtnClickHandler={cancelBtnClickHandler}
          onSelectProject={selectedProjectHandler}
        />
      </Left>
      <Right>
        <RightPage
          saveProjectClickHandler={saveProjectClickHandler}
          content={content}
          selectedProject={selectedProject}
          onDelete={deleteProjectHandler}
          onAddTask={addTaskHandler}
          onDeleteTask={deleteTaskHandler}
          tasks={projectState.tasks}
        />
      </Right>
    </Main>
  );
};
export default MainPage;
