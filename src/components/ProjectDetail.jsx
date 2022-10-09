import { Link, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const id = useParams();
  return (
    <div>
      <p>projectdetail by id {id.id}</p>
      <Link to="1">about room 1</Link>
      <Link to="2">about room 2</Link>
      <Link to="3">about room 3</Link>
      <Link to="4">about room 4</Link>
    </div>
  );
};
export default ProjectDetail;
