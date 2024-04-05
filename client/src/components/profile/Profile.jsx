import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProfileInfo } from "../../api/profile/getProfileInfo";
import { getPosts } from "../../api/posts/getPosts";
import AddPostModal from "../UI/modals/AddPostModal";
import PostList from "../UI/posts/PostList";
import { setUsernameAction } from "../../store/reducers/userReducer";
import Loader from "../UI/loader/Loader";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getProfileInfo();
      const posts = await getPosts();
      setPosts(posts);
      setUserData(userData);
      setPostsLoaded(true);
      dispatch(setUsernameAction(userData["username"]));
    };
    fetchData();
  }, [dispatch]);

  return (
    <Grid container spacing={2} justifyContent="center">
      {postsLoaded ? (
        <Grid item xs={10} sx={{ mt: 5 }}>
          <p>Кол-во постов: {posts.length}</p>
          <PostList posts={posts} />
        </Grid>
      ) : (
        <Loader />
      )}

      <AddPostModal open={open} setOpen={setOpen} setPosts={setPosts} />
    </Grid>
  );
};

export default Profile;
