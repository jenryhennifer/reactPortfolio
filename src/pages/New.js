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
import Projects from './Projects';
import Contact from './Contact';

class New extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Home />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Contact />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
            <Projects />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}

export default New;
