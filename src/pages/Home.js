import { useEffect, useState } from "react";
import ProjectDetals from "../componets/ProjectDetals";
import ProjectFrom from "../componets/ProjectFrom";

const Home = () => {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/project");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.meassage);
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2 ">
        <h2 className="text-4xl font-medium text-sky-400 mb-10">All Project</h2>
        <div className="project-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectDetals key={project._id} project={project} />
            ))}
        </div>
      </div>
      <ProjectFrom />
    </div>
  );
};

export default Home;
