import React from 'react';
import './style.css';

function ProjectCard(props) {
  return (
    <div>
      <div className="card mb-8" style={{maxWidth: "500px"}}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <img src={props.image} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <a href={props.demo} className="btn btn-primary" target="_blank" >Demo</a>
              <a href={props.repo} className="btn btn-primary" target="_blank">Repository</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export function projectItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }

export default ProjectCard;