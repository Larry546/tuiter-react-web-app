import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitList = () => {
  const tuits = useSelector(state => state.tuits)
  return (
      <div className="row">
        <ul className="list-group list-group-flush border border-1 rounded-2 border-dark">
          {tuits.map(tuit =>
              <TuitItem key={tuit._id} tuit={tuit}/>
          )}
        </ul>
      </div>
  );
};

export default TuitList;