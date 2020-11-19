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
            this.setState({ books: res.data, title: "", author: "", synopsis: "" })
          )
          .catch(err => console.log(err));
      };
    render(){
        return(
            {this.state.project.map( project=> )}
            <ProjectCard/>
        )
    }

}