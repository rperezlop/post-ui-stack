/* eslint-disable array-callback-return */
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from '../actions/post';
import { getPost } from '../selectors/post';
import PostDetails from './PostDetails';



const Post = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(getPost);

  console.log('data del post', data);

  useEffect(() => {

    dispatch(fetchPost());

  }, [dispatch])

  return (
    <Container>
      <>
     
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          {data?.map((post) => {
            return (
              <Grid item xs={4}>
                <PostDetails data={post} />

              </Grid>

            )

          })}

        </Grid>

      </>
    </Container>
  );

};


export default Post;


