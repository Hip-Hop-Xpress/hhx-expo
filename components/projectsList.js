import React, {useState} from 'react';

import Project from '../components/project';

import strings from '../assets/strings/strings';

export default function ProjectsList() {
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

  let list = strings.projects.list;
  let key = 0;

  const Projects = list.map(project => (
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
