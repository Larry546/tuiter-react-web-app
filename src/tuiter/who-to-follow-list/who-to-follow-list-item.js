import React from "react";

const WhoToFollowListItem = ({
  who = {
    avatarIcon: 'nasa.webp',
    userName: 'NASA', handle: 'NASA',
  }
}) => {
  return (
      <li className="list-group-item border-0">
        <div className="row d-flex align-items-center">
          <div className="col-2">
            <img className="rounded-circle"
                 src={require("../img/" + who.avatarIcon)}
                 alt=""
                 width="40px"/>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center">
              <div>
                {who.userName}
              </div>
              <i className="fa-solid fa-check-circle ms-2"></i>
            </div>
            <div>
              @{who.handle}
            </div>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <button
                className="btn btn-primary border-0 rounded-pill ps-3 pe-3 pt-1 pb-1 fw-semibold"
                type="button">
              Follow
            </button>
          </div>
        </div>
      </li>
  );
};

export default WhoToFollowListItem;