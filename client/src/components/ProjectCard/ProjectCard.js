import React from 'react';
import './style.css';
function ProjectCard({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
// export function projectItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }

export default ProjectCard