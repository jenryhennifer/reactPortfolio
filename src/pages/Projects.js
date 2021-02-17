import React, { Component } from 'react';

//json data
import project from '../project.json';

//components used
import Projects from '../components/Projects/Projects';

class ProjectPage extends Component {
  state = {
    project: project,
  };

  render() {
    return (
      <div>
        <Projects/>
      </div>
    );
  }
}
export default ProjectPage;
