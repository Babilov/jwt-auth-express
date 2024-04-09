import React from "react";
import { Modal } from "@mui/material";
import styles from "./styles/AddPostStyles.module.css";
import CommentsList from "../comments/CommentsList";

const CommentsModal = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{ height: "100vh" }}
      className={styles.modal}
    >
      <>
        <CommentsList />
      </>
    </Modal>
  );
};

export default CommentsModal;
