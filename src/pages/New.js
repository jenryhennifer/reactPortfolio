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
            <Home id='about' />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <Contact id='contact'/>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
            <Projects id='projects'/>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}

export default New;
