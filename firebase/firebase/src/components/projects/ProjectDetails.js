import React, {Component} from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
    return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">
                Project Title - {id}
              </span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci aliquid aspernatur consectetur dignissimos doloribus
                ducimus, expedita magnam, maiores necessitatibus possimus
                quisquam repudiandae ut voluptatem? Facere hic iusto repellendus
                sint tempora?</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by Ol' Flynny Floo</div>
              <div>20/02/2019</div>
            </div>
          </div>
        </div>
    );
  };

export default ProjectDetails;