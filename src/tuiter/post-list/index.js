import React from "react";
import posts from "../home/posts.json";
import PostListItem from "../home/home-item";

const PostList = () => {
  return (<div className="row">
    <ul className="list-group list-group-flush p-0">
      {posts.map(post => <PostListItem post={post}/>)}
    </ul>
  </div>)
}

export default PostList;