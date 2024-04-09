import React, { useEffect, useState } from "react";
import { getusernameById } from "../../../api/users/getUsernameById";

const Comment = ({ comment }) => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const fetchUsername = async () => {
      console.log(comment);
      setUsername(await getusernameById(comment.UserId));
    };
    fetchUsername();
  }, []);
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>{username}</p>
      <p> {comment.content} </p>
      <p style={{ fontSize: "10px" }}> {comment.createdAt} </p>
    </div>
  );
};

export default Comment;
