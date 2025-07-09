import React from "react";

export const Tile = (props) => {

  const tile = props.item; //extracts the data object from the props value passed as an arguemnt to Tile
  console.log(tile) //will render the value of tile in the return section
  const values = Object.values(tile); //generates an array of the objects values so we can then use map later in the return section.

  return (
    <div className="tile-container">
      {
        values.map(element => { //by using map here, we are able to render a p element for each of the object's values
          if(typeof element === 'object') { //checks to see if the element is an object
            return <p className='tile'>{JSON.stringify(element)}</p> //If it is, then we return the sting version of the object as a line on the page
          } else {
            return <p className='tile'>{element}</p> //if the object is already a string or number, no coversion is needed as it will be displayed on the page without stringify
          }
        })
      }
    </div>
  );
};
