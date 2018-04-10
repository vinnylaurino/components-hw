import React from 'react';
import projects from '../data/projects.json';

class Projects extends React.Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <project className={ classes }/>
    )
  }
};

export default Projects;
