import React from 'react';

const ItemCard = (props) => {
    const {img, name, description, audio, abv} = props;
    return (
        <div className='item-card'>
            <img src={img} alt=""/>
            <h1 className="item-name">{name}</h1>

            <audio src={audio} controls></audio>
            <p className="abv">ABV: {abv}%</p>
            <p className="description">{description}</p>

            

            
        </div>
    );
}

export default ItemCard;
