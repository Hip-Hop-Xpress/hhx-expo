import React, {useState} from 'react';
import ProjectComponent from '../components/projectComponent';
import PROJECTS from '../api/constants/projects';

/**
 * List of projects made of project components
 */
const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState('');

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

  const Projects = PROJECTS.map(project => (
    <ProjectComponent
      name={project.name}
      description={project.description}
      members={project.members}
      startDate={project.startDate}
      endDate={project.endDate}
      icon={project.icon}
      key={key++}
      isSelected={selectedProject === project.name}
      setSelected={makeSelectToggleHandler(project.name)}
    />
  ));

  return <>{Projects}</>;
}

export default ProjectsList;
