import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            class="card-img-top"
            alt="..."
            width="200"
            height="200"
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
             {props.aboutcontent}
            </p>
            <NavLink to="#" class="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card;
