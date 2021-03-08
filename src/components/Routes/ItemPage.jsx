import React,{useState,useEffect} from 'react';
import {beerList} from '../../data/beerList';
import ItemCard from '../ItemCard';

const ItemPage = (props) => {
    const [currentItem,setCurrentItem] = useState({})
    const array = Object.values(beerList)
    useEffect(() => {
       console.log(array)
       setCurrentItem(array[0])
       console.log(props.match)
    }, [])
    useEffect(() => {
        console.log(currentItem)
    },[currentItem])
    return (
        <div>
          
            {currentItem ? <ItemCard img={currentItem.img} name={currentItem.beer_name} abv={currentItem.abv} description={currentItem.description} audio={currentItem.audio}/> : <h1>No item is here</h1> }
        </div>
    );
}

export default ItemPage;
