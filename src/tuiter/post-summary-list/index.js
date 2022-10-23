import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
  const posts = useSelector(state => state.tuits)
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  return (
      <div className="row">
        <ul className={`list-group list-group-flush p-0 ${paths.length === 2
        || paths[2] === "home" ? "rounded-4" : ""}`}>
          {posts.map(post =>
              <PostSummaryItem key={post._id} post={post}/>
          )}
        </ul>
      </div>
  );
};
export default PostSummaryList;