import React, { Component } from 'react';

//REACT ANIMATOR FOR THE SCROLL
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from 'react-scroll-motion';
import Home from './Home';
import ProjectPages from './Projects';
import Contact from './Contact';

class New extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
            <Home id="about" />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
            <ProjectPages id="projects"/>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
            <Contact id="contact" />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}

export default New;
