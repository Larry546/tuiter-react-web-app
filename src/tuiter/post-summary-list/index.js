import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
  const posts = useSelector(state => state.tuits)
  return (
      <div className="row">
        <ul className={"list-group list-group-flush p-0"}>
          {posts.map(post =>
              <PostSummaryItem key={post._id} post={post}/>
          )}
        </ul>
      </div>
  );
};
export default PostSummaryList;