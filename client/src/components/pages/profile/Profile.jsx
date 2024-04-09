import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProfileInfo } from "../../../api/profile/getProfileInfo";
import { getPosts } from "../../../api/posts/getPosts";
import PostList from "../../UI/posts/PostList";
import { setUserAction } from "../../../store/reducers/userReducer";
import Loader from "../../UI/loader/Loader";
import MyInput from "../../UI/inputs/MyInput";
import MyButton from "../../UI/buttons/MyButton";
import { addPost } from "../../../api/posts/addPost";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [postInput, setPostInput] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getProfileInfo(id);
      const posts = await getPosts(id);
      setPosts(posts);
      setUserData(userData);
      setPostsLoaded(true);
      dispatch(setUserAction(userData));
    };
    fetchData();
  }, [dispatch]);

  const handlePost = async () => {
    const postResponse = await addPost(postInput, setPosts);
    if (!postResponse) {
      console.log("error");
    }
    return postResponse;
  };

  return (
    <Grid container columnSpacing={2} justifyContent="center">
      <Grid item xs={10}>
        {id == userData.id && (
          <>
            <Typography>Что у вас нового?</Typography>
            <MyInput state={postInput} setState={setPostInput} />
            <MyButton callback={handlePost}>Поделиться</MyButton>
          </>
        )}
      </Grid>
      {postsLoaded ? (
        <Grid item xs={10} sx={{ mt: 2 }}>
          <span>Кол-во постов: {posts.length}</span>
          <PostList posts={posts} />
        </Grid>
      ) : (
        <Loader />
      )}
    </Grid>
  );
};

export default Profile;
