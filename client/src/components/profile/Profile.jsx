import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProfileInfo } from "../../api/profile/getProfileInfo";
import { getPosts } from "../../api/posts/getPosts";
import AddPostModal from "../UI/modals/AddPostModal";
import PostList from "../UI/posts/PostList";
import { setUsernameAction } from "../../store/reducers/userReducer";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getProfileInfo();
      const posts = await getPosts();
      setPosts(posts);
      setUserData(userData);
      dispatch(setUsernameAction(userData["username"]));
    };
    fetchData();
  }, [dispatch]);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>
        <Box>
          <Avatar />
          <Box>
            {userData.username}
            <Button>Редактировать профиль</Button>
          </Box>
          <Box sx={{ m: 5 }}>
            <Button onClick={() => setOpen(true)} variant="outlined">
              Добавить пост
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={10}>
        <PostList posts={posts} />
      </Grid>
      <AddPostModal open={open} setOpen={setOpen} setPosts={setPosts} />
    </Grid>
  );
};

export default Profile;
