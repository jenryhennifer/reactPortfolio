import React from 'react';
import './style.css'

function About() {
  return (
    <div className="card m-2 p-2">
      <div className="card-body">
        <h4 className="card-title">Who Am I?</h4>
      </div>
      <p>
        I am a fullstack engineer living in the Bay Area. I studied through UC
        Berkeley Extension. I love learning new languages, strategies, and
        programs to expand my knowledge in the field. I have a background in
        health and hope to bring my new knowledge of software engineering and heath
        together.
      </p>
      <p>
        When I'm not programming, I like to hike, nap, and snack! I occasionally
        attempt at the arts of painting and knitting whenever I need a little
        time away from the monitor!
      </p>
    </div>
  );
}

export default About;
