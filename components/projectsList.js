import React, {useState} from 'react';
import Project from '../components/projectComponent';
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
    <Project
      topText={project.title}
      bottomText={project.body}
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
