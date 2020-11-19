import React, { Component } from 'react';
import project from '../project.json';
import ProjectCard from '../components/ProjectCard/ProjectCard';

class Projects extends Component {
  state = {
    project: project,
  };

  render() {
    console.log('rendered');
    return (
      <div>
        {this.state.project.map((project) => (
          <ProjectCard
            id={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            demo={project.demo}
            repo={project.repo}
          />
        ))}
      </div>
    );
  }
}
export default Projects;
