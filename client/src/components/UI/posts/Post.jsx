import React, { useState } from "react";
import styles from "./styles/postStyle.module.css";
import { useSelector } from "react-redux";
import LikeButton from "../buttons/LikeButton";

const Post = ({ post }) => {
  const username = useSelector((state) => state.username);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={styles.post}>
      <p className={styles.username}>{username}</p>
      <p>{post.content} </p>
      <p>{post.createdAt} </p>
      <LikeButton post={post} setIsLoaded={setIsLoaded} />
    </div>
  );
};

export default Post;
