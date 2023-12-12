import React, { useState, useMemo } from "react";
import codeProjects from "../Data";

const ProjectsContext = React.createContext({});

export function ProjectsProvider({ children }) {
  const [query, setQuery] = useState("");

  const loadQuery = (data) => {
    setQuery(data);
  };

  const projects = useMemo(() => {
    const filteredProjects =
      query.length > 0
        ? codeProjects.filter((project) => {
            return project.languages.find((language) => {
              return language.toLowerCase().includes(query.toLowerCase());
            });
          })
        : codeProjects;

    return filteredProjects;
  }, [query])

  return (
    <ProjectsContext.Provider value={{ projects, loadQuery }}>
      {children}
    </ProjectsContext.Provider>
  );
}



export function useProjects() {
  const context = React.useContext(ProjectsContext);

  if (context === undefined) {
    throw new Error("Uh oh spaghetti oh's");
  }

  return context;
}


// Kent C Dodds

// avoiding derived state
// projects were imported fomr somewhere the list was being mutated (filtered) then being stored back in state - Tendency of new react developer to use state everywhere however the alternative is to calculated the mutation within the array and pass the values out through context - we're removing a middle man
