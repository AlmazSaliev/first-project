import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Link to="/projects/1">Project 1</Link>
      <Link to="/projects/2">Project 2</Link>
      <Link to="/projects/3">Project 3</Link>
      <Link to="/projects/4">Project 4</Link>
    </div>
  );
};
export default Projects;
