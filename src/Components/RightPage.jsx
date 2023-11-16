import NoSelectedProject from "./NoSelectedProject";
import ProjectDetails from "./ProjectDetails";
import ProjectForm from "./ProjectForm";
const RightPage = ({
  content,
  saveProjectClickHandler,
  selectedProject,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  let display;
  if (content === "No Project Selected") {
    display = <NoSelectedProject />;
  } else if (content === "Add Project") {
    display = <ProjectForm saveProjectClickHandler={saveProjectClickHandler} />;
  } else if ((content = "Project Selected")) {
    display = (
      <ProjectDetails
        project={selectedProject}
        deleteProjectHandler={onDelete}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
      />
    );
  }
  return <div>{display}</div>;
};
export default RightPage;
