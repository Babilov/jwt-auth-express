import React from "react";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import CommentIcon from "@mui/icons-material/Comment";
import styles from "./styles/style.module.css";
import axios from "axios";
import { setCommentsAction } from "../../../store/reducers/commentsReducer";

const CommentsButton = ({ post, openModal }) => {
  const dispatch = useDispatch();
  const handleComments = async () => {
    const comments = await axios.get(
      `${process.env.REACT_APP_API_URL}comments?postId=${post.id}`
    );
    dispatch(setCommentsAction(comments.data.comments));
    openModal(true);
  };
  return (
    <div className={styles.buttonPlaceholder}>
      <IconButton disableRipple onClick={handleComments}>
        <CommentIcon />
      </IconButton>
    </div>
  );
};

export default CommentsButton;
