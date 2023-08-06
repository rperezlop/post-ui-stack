/* eslint-disable array-callback-return */
import { Stack } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Divider from '@mui/material/Divider';
import {comments, openComments, openUserInfo, userInfo} from '../../redux/actions/post';
import {useDispatch} from "react-redux";

import Button from '@mui/material/Button';

const PostDetails = ({ data }) => {
  const dispatch = useDispatch();
    const { owner,tags } = data;

    const handleOpenUser = (data) => {
      dispatch(userInfo(data));
      dispatch(openUserInfo(true));
    }

    const handleOpenComments = (data) => {
      dispatch(comments(data));
      dispatch(openComments(true));
    }

    return (
  <>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={owner.picture} sx={{cursor: 'pointer'}} onClick={()=>handleOpenUser(owner)}/>
        }
        title={`${owner.firstName} ${owner.lastName}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.image}
        alt="Paella dish"
      />
      <CardContent>

        <Typography variant="body2" color="text.secondary" sx={{cursor: 'pointer', paddingBottom: 1}} onClick={()=>handleOpenComments(data.text)}>
          {data.text}
        </Typography>

        <Divider />
        <Typography variant="title2" color="text.secondary" sx={{paddingBottom: 1, paddingTop: 1}}>
          Tags
        </Typography>

        <Stack spacing={0.8} direction="row">

          {
            tags.map((tag, index) => (
              <div key={`${index}-${tag}`}>
                <Typography variant="body2" color="text.secondary" > {tag} </Typography>
                <Divider orientation="vertical" flexItem />
              </div>
            ))
          }
        </Stack>

      </CardContent>
      <CardActions disableSpacing>
        <Stack spacing={0.5} direction="row">
          <IconButton aria-label="add to favorites" size='small' >
            <ThumbUpIcon size='small'/>
          </IconButton>
          <Typography sx={{ fontSize: 16,  paddingTop: 1,}} color="text.secondary" gutterBottom>
            {data.likes}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  </>

    );
}

export default PostDetails;