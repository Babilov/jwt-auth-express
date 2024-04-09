import React, { useState } from "react";
import Post from "./Post";
import CommentsModal from "../modals/CommentsModal";

const PostList = ({ posts }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <CommentsModal open={open} setOpen={setOpen} />
      {posts.map((post) => (
        <Post key={post.id} post={post} setOpen={setOpen} />
      ))}
    </div>
  );
};

export default PostList;
