import React, {useState, useEffect} from 'react';
import ProjectComponent from './projectComponent';
import PROJECTS from '../api/constants/projects';
import LoadingIcon from './loadingIcon';
import assignData from '../api/assignData';

/**
 * List of projects made of project components
 */
const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    assignData('/v1/projects', setProjectsData, PROJECTS);
  }, []);

  const makeSelectToggleHandler = name => {
    return () => {
      if (selectedProject === name) {
        setSelectedProject('');
      } else {
        setSelectedProject(name);
      }
    };
  };

  let key = 0;
  const Projects = projectsData.map(project => (
    <ProjectComponent
      name={project.name}
      description={project.description}
      members={project.members}
      startDate={project.startDate}
      endDate={project.endDate}
      icon={project.icon}
      key={project.id !== undefined ? project.id : key++}
      isSelected={selectedProject === project.name}
      setSelected={makeSelectToggleHandler(project.name)}
    />
  ));

  return (
    <>
      {projectsData.length === 0 && <LoadingIcon />}
      {Projects}
    </>
  );
}

export default ProjectsList;
