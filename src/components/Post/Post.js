/* eslint-disable array-callback-return */
import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from '../actions/post';
import { getPost } from '../selectors/post';
import PostDetails from './PostDetails';
import User from './User';
import Comentario from './Comentario';
import SearchTags from './SearchTags';

const Post = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(getPost);
  const [openUser, setOpenUser] = useState(false);
  const [openComentario, setOpenComentario] = useState(false);
  const [dataUser, setDataUser] = useState({firstName:'',lastName:'',picture:''});
  const [dataComentario, setDataComentario] = useState('');
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
              placeholder={'tags...'} />
      
      <>     
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>              

          {
            filterFn.fn(data).map((post) => {
            return (
              <Grid item xs={4}>
                <PostDetails 
                data={post} 
                setDataUser={setDataUser}
                setOpenUser={setOpenUser}
                setOpenComentario={setOpenComentario}
                setDataComentario={setDataComentario}
                 />

              </Grid>
              
            )
            
          })}

         

        </Grid>
        <User 
        open={openUser} 
        setOpen={setOpenUser}
         data={dataUser}
         />

        <Comentario 
        open={openComentario} 
        setOpen={setOpenComentario} 
        data={dataComentario} 
        />
        
      </>
    </Container>
  );

};


export default Post;


