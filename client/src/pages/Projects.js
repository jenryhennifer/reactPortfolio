import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import project from '../project.json';

class Projects extends Component {
  state = {
    project: project,
  };

  render() {
    console.log('rendered');
    return (
      <div className="pl-5 overflow-auto" style={{maxHeight: "500px",  }}>
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
