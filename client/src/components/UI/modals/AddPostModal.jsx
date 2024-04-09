import { Modal } from "@mui/material";
import React, { useState } from "react";
import MyInput from "../inputs/MyInput";
import MyButton from "../buttons/MyButton";
import { addPost } from "../../../api/posts/addPost";

import styles from "./styles/AddPostStyles.module.css";

const AddPostModal = ({ open, setOpen, setPosts }) => {
  const [input, setInput] = useState("");

  const onClose = async () => {
    const res = await addPost(setPosts, setOpen, input);
    setOpen(false);
    setInput("");
    return res;
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} className={styles.modal}>
      <div className={styles.div}>
        <MyInput state={input} setState={setInput} />
        <MyButton callback={async () => await onClose()}>
          Добавить пост
        </MyButton>
      </div>
    </Modal>
  );
};

export default AddPostModal;
