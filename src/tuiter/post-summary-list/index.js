import React from "react";
import posts from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
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