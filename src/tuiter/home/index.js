import React from "react";
import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
      <>
        <div className="fs-5 fw-bolder text-white">Home</div>
        <WhatsHappening/>
        <TuitList/>
      </>
  );
};
export default HomeComponent;