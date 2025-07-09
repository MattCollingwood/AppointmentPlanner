import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = (props) => {

  const tiles = props.list.map((item, index) => { //Using the map() callback function to render Tile components and using each object from the array to pass name and description props to each rendered tile component.  to do this, we used the map callback funtion which had the object from the array as the first parameter and that object’s index as the second parameter
    return <Tile
    item={item}
    key={index}/>
  })

  return (
    <>
      {tiles}
    </>
  );
};
