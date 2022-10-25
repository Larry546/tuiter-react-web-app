import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
      <>
        <div className="list-group">
          <Link className="list-group-item">
            <i className="fa-solid fa-t"></i>
          </Link>
          <Link to={"/tuiter/home"} className={`list-group-item d-flex align-items-center
                    ${active === "home" || paths.length === 2 ? "active"
              : ""}`}>
            <i className="fa-solid fa-house col-12 col-xl-2 col-xxl-2"></i>
            <div className="col-10 d-none d-xl-block d-xxl-block">
              Home
            </div>
          </Link>
          <Link to={"/tuiter/explore"} className={`list-group-item d-flex align-items-center
                    ${active === "explore" ? "active" : ""}`}>
            <i className="fa-solid fa-hashtag col-12 col-xl-2 col-xxl-2"></i>
            <div className="col-10 d-none d-xl-block d-xxl-block">
              Explore
            </div>
          </Link>
          <Link to="/" className="list-group-item d-flex align-items-center">
            <i className="fa-solid fa-flask col-12 col-xl-2 col-xxl-2"></i>
            <div className="col-10 d-none d-xl-block d-xxl-block">
              Labs
            </div>
          </Link>
          <Link className={`list-group-item d-flex align-items-center
                    ${active === "notifications" ? "active" : ""}`}>
            <i className="fa-regular fa-bell col-12 col-xl-2 col-xxl-2"></i>
            <div className="col-10 d-none d-xl-block d-xxl-block">
              Notifications
            </div>
          </Link>
          <Link className={`list-group-item d-flex align-items-center
                    ${active === "messages" ? "active" : ""}`}>
            <i className="fa-regular fa-envelope col-12 col-xl-2 col-xxl-2"></i>
            <div className="col-10 d-none d-xl-block d-xxl-block">
              Messages
            </div>
          </Link>
          <Link className={`list-group-item d-flex align-items-center
                    ${active === "bookmarks" ? "active" : ""}`}>
            <i className="fa-regular fa-bookmark col-12 col-xl-2 col-xxl-2"></i>
            <div className="col-10 d-none d-xl-block d-xxl-block">
              Bookmarks
            </div>
          </Link>
          <Link className={`list-group-item d-flex align-items-center
                    ${active === "lists" ? "active" : ""}`}>
            <i className="fa-solid fa-list col-12 col-xl-2 col-xxl-2"></i>
            <div className="col-10 d-none d-xl-block d-xxl-block">
              Lists
            </div>
          </Link>
          <Link to={"/tuiter/profile"} className={`list-group-item d-flex align-items-center
                    ${active === "profile" ? "active" : ""}`}>
            <i className="fa-regular fa-user col-12 col-xl-2 col-xxl-2"></i>
            <div className="col-10 d-none d-xl-block d-xxl-block">
              Profile
            </div>
          </Link>
          <Link className={`list-group-item d-flex align-items-center
                    ${active === "more" ? "active" : ""}`}>
            <i className="fa-solid fa-ellipsis col-12 col-xl-2 col-xxl-2"></i>
            <div className="col-10 d-none d-xl-block d-xxl-block">
              More
            </div>
          </Link>
        </div>
        <button className="btn btn-primary rounded-pill mt-3 fw-bold pt-2 pb-2"
                style={{width: "100%"}}
                type="button">
          Tuit
        </button>
      </>
  );
};
export default NavigationSidebar;