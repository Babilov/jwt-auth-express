import React from "react";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import styles from "../modals/styles/AddPostStyles.module.css";

const CommentsList = () => {
  const comments = useSelector(({ comments }) => comments.comments);

  return (
    <div
      className={styles.div}
      style={{ overflow: "scroll", overflowX: "hidden" }}
    >
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
