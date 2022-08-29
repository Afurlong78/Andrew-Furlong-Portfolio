import React, { useState, useEffect, useContext } from "react";

const ProjectContext = React.createContext();

export const useProjectContext = () => {
  return useContext(ProjectContext);
};

export function ProjectProvider({ children }) {
  const [toggle, setToggle] = useState(1);

  const toggleHandler = (index) => {
    setToggle(index);
  };

  const project_state = {
    toggle,
    setToggle,
    toggleHandler,
  };

  return (
    <ProjectContext.Provider value={project_state}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
