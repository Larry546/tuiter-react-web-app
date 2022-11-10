import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData);
  return (
      <div className="row">
        <ul className={"list-group list-group-flush p-0"}>
          {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
          {tuits.map(tuit =>
              <PostSummaryItem key={tuit._id} post={tuit}/>
          )}
        </ul>
      </div>
  );
};
export default PostSummaryList;