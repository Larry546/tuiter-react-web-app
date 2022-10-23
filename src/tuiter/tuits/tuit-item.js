import React from "react";

const TuitItem = ({
  tuit = {
    "_id": 234,
    "topic": "Space",
    "username": "SpaceX",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "avatar": "java.png",
    "liked": true,
    "reply": 123,
    "retuit": 432,
    "like": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
}) => {
  return (
      <li className="list-group-item bg-black pt-3">
        <div className="row">
          <div className="col-2 d-flex justify-content-center">
            <img src={require(`../img/${tuit.avatar}`)}
                 alt=""
                 width="48px"
                 height="48px"
                 className="rounded-circle"/>
          </div>

          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="fw-bolder">
                  {tuit.username}
                </div>
                <i className="fa-solid fa-check-circle text-primary ms-2 me-2"></i>
                <div className="text-dark">{tuit.handle}</div>
                <div className="ms-2 text-dark">- {tuit.time}</div>
              </div>

              <i className="fa-solid fa-ellipsis fs-5"></i>
            </div>
            <div className="text-white">
              {tuit.content}
            </div>
            <div>
              {tuit.tuit}
            </div>
            <div className="row mt-2 text-dark nav nav-tabs border-0">
              <div className="col-3 nav-link border-0 rounded-0 text-dark">
                <i className="fa-regular fa-comment me-2"></i>
                {tuit.reply}
              </div>
              <div className="col-3 nav-link border-0 rounded-0 text-dark">
                <i className="fa-solid fa-retweet me-2"></i>
                {tuit.retuit}
              </div>
              <div className="col-3 nav-link border-0 rounded-0 text-dark">
                {tuit.liked ?
                    <i className="fa-solid fa-heart me-2 text-danger"></i> :
                    <i className="fa-regular fa-heart me-2"></i>}
                {tuit.like}
              </div>
              <div className="col-3 nav-link border-0 rounded-0 text-dark">
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
              </div>
            </div>
          </div>
        </div>
      </li>
  );
};

export default TuitItem;