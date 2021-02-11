import React from 'react';
import './style.css';

function ProjectCard(props) {
  return (
    <div className="container">
      <div className="card mb-3" style={{ maxWidth: '500px' }}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <img src={props.image} className="card-img" alt="..." />
          </div>
          <div className="col-md-12">
            <div className="card-body">
              <h3 className="card-title">{props.name}</h3>
              <p className="card-text">{props.description}</p>
              <a href={props.demo} className="btn m-3" target="_blank">
                Demo
              </a>
              <a href={props.repo} className="btn m-3" target="_blank">
                Repository
              </a>
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
