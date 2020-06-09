import React, {useState} from 'react';
import ProjectComponent from '../components/projectComponent';
import PROJECTS from '../api/constants/projects';

/**
 * List of projects made of project components
 */
const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState('');

  const makeSelectToggleHandler = title => {
    return () => {
      if (selectedProject === title) {
        setSelectedProject('');
      } else {
        setSelectedProject(title);
      }
    };
  };

  let key = 0;

  const Projects = PROJECTS.map(project => (
    <ProjectComponent
      title={project.title}
      body={project.body}
      members={project.members}
      icon={project.icon}
      key={key++}
      isSelected={selectedProject === project.title}
      setSelected={makeSelectToggleHandler(project.title)}
    />
  ));

  return <>{Projects}</>;
}

export default ProjectsList;
