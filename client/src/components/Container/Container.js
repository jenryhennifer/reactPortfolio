import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import project from '../project.json';



function Container(){
    state = {
        project: project,
      };
    
    return(
        <div className="scroll">
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
    )
}

export default Container;