import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import whoArray from "./who.json";

const WhoToFollowList = () => {
  return (
      <ul className="list-group rounded-4 wd-13">
        <li className="list-group-item border-0 fw-bold fs-5">Who to follows
        </li>
        {whoArray.map(
            who => <WhoToFollowListItem key={who._id} who={who}/>)
        }
      </ul>
  );
};

export default WhoToFollowList;