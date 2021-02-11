import React, { Component } from 'react';

//json data
import project from '../project.json';

//components used
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectPageTitle from '../components/ProjectPageTitle/ProjectPageTitle';
import Languages from '../components/Languages/Languages'

class Projects extends Component {
  state = {
    project: project,
  };

  render() {
    console.log('rendered');
    return (
      <div className='projectPage align-items-center'>
        <ProjectPageTitle/>
        <div className="wrapper">
        <div
          className="projectContainer pl-5 overflow-auto"
          style={{ maxHeight: '500px' }}
        >
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
        <div className='wahtIKnow'>
        <Languages />
        </div>
        </div>
      </div>
    );
  }
}
export default Projects;
