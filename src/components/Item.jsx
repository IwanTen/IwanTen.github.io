import React from "react";
// import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div className="item">
      <div className="content">
        <h1 className="itemTitle">
          {props.title} <br />
          <span>
            <span className="medium1"> {props.medium1}</span> |
            <span className="medium2"> {props.medium2}</span>
          </span>
        </h1>
        <p className="itemDescription">{props.description}</p>
      </div>
      <div className="imageDiv">
        <img className="itemImage" src={props.url} alt={props.alt} />
        <a className="itemButton" href={props.to}>
          {props.toText}
        </a>
      </div>
    </div>
  );
}

export default Item;
