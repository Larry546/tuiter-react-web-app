import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../tuits/tuits-reducer";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening
    };
    dispatch(createTuit(newTuit));
  }
  return (
      <div className="row">
        <div className="col-auto">
          <img src={"/images/react.png"} width={60}
               alt=""/>
        </div>
        <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control bg-black text-white"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
          <div
              className="row mt-2 d-flex justify-content-between align-content-center mb-4">
            <div className="text-primary fs-5 col-auto">
              <i className="bi bi-card-image me-3"></i>
              <i className="bi bi-filetype-gif me-3"></i>
              <i className="bi bi-bar-chart me-3"></i>
              <i className="bi bi-emoji-smile me-3"></i>
              <i className="bi bi-geo-alt"></i>
            </div>
            <button
                className="rounded-pill btn btn-primary ps-1 pe-1 fw-bold col-2"
                onClick={tuitClickHandler}>
              Tuit
            </button>
          </div>
        </div>
      </div>
  );
};

export default WhatsHappening;