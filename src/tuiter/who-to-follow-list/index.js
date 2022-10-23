import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector(state => state.who)
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