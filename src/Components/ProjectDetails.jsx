import Tasks from "./Tasks";
const ProjectDetails = ({
  project,
  deleteProjectHandler,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  console.log(project);
  return (
    <>
      <div>
        <h1>{project.title}</h1>
        <button
          onClick={() => {
            deleteProjectHandler();
          }}
        >
          Delete
        </button>
        <p>{project.date}</p>
        <p>{project.desc}</p>
      </div>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </>
  );
};
export default ProjectDetails;
