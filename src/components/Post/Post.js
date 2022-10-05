import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from '../actions/post';
import { getPost } from '../selectors/post';
import PostDetails from './PostDetails';
import User from './User';
import Comentario from './Comentario';
import SearchTags from './SearchTags';

const Post = () => {
  const dispatch = useDispatch();
  const data = useSelector(getPost, shallowEqual);
  const [filterFn, setFilterFn] = useState({
    fn: data => {
      return data;
    }
  });

  useEffect(() => {

    dispatch(fetchPost());

  }, [dispatch])

  return (
    <Container>
      <h1>POST</h1>
      <SearchTags
              setFilterFn={setFilterFn}
              searchBy={'tags'}
              placeholder={'Filtar por tags...'} />
      <>     
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>              

          {
            filterFn.fn(data).map((post, index) => {
            return (
              <Grid item xs={4} key={index}>
                <PostDetails 
                data={post}
                 />

              </Grid>
              
            )
            
          })}


        </Grid>
        <User />
        <Comentario />
        
      </>
    </Container>
  );

};


export default Post;