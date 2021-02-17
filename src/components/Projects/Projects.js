import React, { Component } from 'react';

//json data
import project from '../../project.json';
import './Projects.css'

//components used
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectPageTitle from '../ProjectPageTitle/ProjectPageTitle';
import Languages from '../Languages/Languages'

class Projects extends Component {
  state = {
    project: project,
  };

  render() {
    return (
      <div className='projectPage'>
        <ProjectPageTitle/>
        <div className='row wrapper'>
        <div
          className="projectContainer overflow-auto col-sm-10"
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
        <div className='col-sm-2'>
        <Languages />
        </div>
        </div>
      </div>
    );
  }
}
export default Projects;
