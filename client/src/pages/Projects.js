import React, {Component} from 'react';
import API from "../utils/API";
import ProjectCard from '../components/ProjectCard/ProjectCard' 

class Projects extends Component{
    state ={
        project:[],
        name: "",
        description: "",
        repo: "",
        demo:"",
        image: ""
    }
    componentDidMount() {
        this.loadProject();
      }
    
      loadProject = () => {
        API.getProject()
          .then(res =>
            this.setState({ projects: res.data, name: "", description: "", repo: "", demo: "", image: "" })
          )
          .catch(err => console.log(err));
      };
    render(){
        console.log('rendered')
        return(
            <div>
            {this.state.projects.map( project=> 
                <div className="card" style="width: 18rem;">
                <img src={project.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{project.name}</h5>
                  <p class="card-text">{project.description}</p>
                  <a href={project.repo} class="btn btn-primary">Repository</a>
                  <a href={project.demo} class="btn btn-primary">Demo</a>
                </div>
              </div>
              )
            }
            </div>
        )
    }

}
export default Projects