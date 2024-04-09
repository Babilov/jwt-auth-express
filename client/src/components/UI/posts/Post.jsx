import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import styles from "./styles/postStyle.module.css";
import LikeButton from "../buttons/LikeButton";
import CommentsButton from "../buttons/CommentsButton";
import MyInput from "../inputs/MyInput";
import MyButton from "../buttons/MyButton";
import { createComment } from "../../../api/comments/createComment.js";

const Post = ({ post, setOpen }) => {
  const username = useSelector(({ user }) => user.user.username);
  const [comment, setcomment] = useState("");

  return (
    <div className={styles.post}>
      <p className={styles.username}>{username}</p>
      <p>{post.content} </p>
      <p>{post.createdAt} </p>
      <Grid container spacing={1}>
        <Grid item xs={0.8}>
          <LikeButton post={post} />
        </Grid>
        <Grid item xs={0.8}>
          <CommentsButton post={post} openModal={setOpen} />
        </Grid>
      </Grid>
      <div>
        <MyInput state={comment} setState={setcomment} />
        <MyButton callback={() => createComment(post.id, comment, setcomment)}>
          Отправить
        </MyButton>
      </div>
    </div>
  );
};

export default Post;
