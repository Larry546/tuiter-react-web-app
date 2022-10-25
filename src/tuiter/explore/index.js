import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
  return (
      <>
        <div className="row pt-2">
          <div className="col-11 position-relative d-flex align-items-center">
              <span className="position-absolute ps-3">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            <input
                className="me-2 ps-5 border-0 text-white rounded-pill w-100 h-100"
                id="search-input"
                placeholder="Search Tuiter"
                type="text"/>
          </div>

          <div
              className="col-1 d-flex justify-content-end align-items-center fs-4">
            <div>
              <i className="fa-solid fa-gear text-primary"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="d-flex justify-content-between fw-semibold nav nav-tabs mt-2 mb-2 border-0">
            <li className="nav-item">
              <div className="nav-link border-0 rounded-0 active">For
                you
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link border-0 rounded-0">Trending</div>
            </li>
            <li className="nav-item">
              <div className="nav-link border-0 rounded-0">News</div>
            </li>
            <li className="nav-item">
              <div className="nav-link border-0 rounded-0">Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link border-0 rounded-0">Entertainment</div>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="position-relative p-0">
            <img src={"/images/starship.webp"} width="100%"
                 height="auto" alt={""}/>
            <h3 className="position-absolute bottom-0 ps-3">SpaceX's
              StarShip</h3>
          </div>
        </div>
        <PostSummaryList/>
      </>
  );
};
export default ExploreComponent;