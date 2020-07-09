import React, {useState, useEffect} from 'react';
import ProjectComponent from '../components/projectComponent';
import PROJECTS from '../api/constants/projects';
import fetchProjects from '../api/endpoints/projects';

/**
 * List of projects made of project components
 */
const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [projectsData, setProjectsData] = useState([]);
  const promise = fetchProjects();

  useEffect(() => {
    promise.then(response => {
      console.log('Projects fetched successfully');
      setProjectsData(response.data);
    })
    .catch(error => {
      console.log(error);
      // If error occurs, fetch data from constants
      setProjectsData(PROJECTS);
    });
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
      key={key++}
      isSelected={selectedProject === project.name}
      setSelected={makeSelectToggleHandler(project.name)}
    />
  ));

  return <>{Projects}</>;
}

export default ProjectsList;
