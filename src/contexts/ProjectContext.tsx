import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface Project {
  id: string;
  name: string;
  domain: string;
  createdAt: string;
}

interface ProjectContextType {
  projects: Project[];
  currentProject: Project | null;
  setCurrentProject: (project: Project | null) => void;
  addProject: (name: string, domain: string) => void;
  deleteProject: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = localStorage.getItem("projects");
    return stored ? JSON.parse(stored) : [];
  });

  const [currentProject, setCurrentProject] = useState<Project | null>(() => {
    const stored = localStorage.getItem("currentProject");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("currentProject", JSON.stringify(currentProject));
  }, [currentProject]);

  const addProject = (name: string, domain: string) => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      name,
      domain,
      createdAt: new Date().toISOString(),
    };
    setProjects((prev) => [...prev, newProject]);
    setCurrentProject(newProject);
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    if (currentProject?.id === id) {
      setCurrentProject(null);
    }
  };

  return (
    <ProjectContext.Provider value={{ projects, currentProject, setCurrentProject, addProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useProject must be used within ProjectProvider");
  return context;
};
