import React from "react";
import "./Main";

const Card = (props) => {
  return (

    <div className="card-wrapper">
      {
      props.suit.length==0 ? <h2>No Result Found!!!</h2> :
      props.suit.map((currentSuit) => {
        return (
          <div className="card" key={currentSuit.Design_code}>
            <img src={currentSuit.Design_url} />
            <h3>{currentSuit.Design_title}</h3>
            <p>Design Code:{currentSuit.Design_code}</p>
            <button className="card__btn">Recommend</button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
