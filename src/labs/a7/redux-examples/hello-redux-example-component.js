import React from "react";
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
  const {message} = useSelector(state => state.hello);
  return (
      <h3>{message}</h3>
  )
}

export default HelloReduxExampleComponent;