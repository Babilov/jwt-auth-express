import React from "react";
import styles from "./styles/postStyle.module.css";
import { useSelector } from "react-redux";

const Post = ({ post }) => {
  const username = useSelector((state) => state.username);
  return (
    <div className={styles.post}>
      <p className={styles.username}>{username}</p>
      <p>{post.content} </p>
      <p>{post.createdAt} </p>
    </div>
  );
};

export default Post;
