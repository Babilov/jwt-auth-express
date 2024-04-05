import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { fetchLikes } from "../../../api/likes/getLikes";
import { postLike } from "../../../api/likes/postLike";
import styles from "./styles/style.module.css";

const LikeButton = ({ post }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      const { likesCount, isLiked } = await fetchLikes(post.id, token);
      setLikesCount(likesCount);
      setIsLiked(isLiked);
      setisLoaded(true);
    };
    fetchData();
  }, []);

  const handleLike = async () => {
    const response = await postLike(post.id, token);
    if (response) {
      setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
      setIsLiked(!isLiked);
    }
  };

  return (
    <div className={styles.likePlaceholder}>
      {isLoaded && (
        <IconButton
          disableRipple
          onClick={handleLike}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <FavoriteIcon color={isLiked ? "error" : "inherit"} />
          <span>{likesCount}</span>
        </IconButton>
      )}
    </div>
  );
};

export default LikeButton;
