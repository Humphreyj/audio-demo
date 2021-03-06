import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ItemCard = (props) => {
  const { img, name, description, audio} = props;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
      setShowDescription(!showDescription)
  }
  return (
    <div className="item-card">
      <img src={img} alt="" />
      <h1 className="item-name">{name}</h1>

      <audio src={audio} controls></audio>
      <button className="toggle-description" onClick={toggleDescription}>{ showDescription ? "Hide text description" : "Show text description" }</button>
      { showDescription ? <p className="description">{description}</p> : null }
      <button className="scan-again"> <Link to='/'>Scan another code</Link> </button>
      
    </div>
  );
};

export default ItemCard;
