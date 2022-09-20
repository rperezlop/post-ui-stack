/* eslint-disable array-callback-return */
import * as React from 'react';
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
import Comentario from './Comentario';
import User from './User';


const PostDetails = ({ data }) => {
    const { owner } = data;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src={owner.picture} />
                }
                action={
                    <IconButton aria-label="settings">

                        <User data={data} />
                    </IconButton>
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
                <Typography variant="body2" color="text.secondary">

                    <Comentario data={data} />
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Stack spacing={0.5} direction="row">
                    <IconButton aria-label="add to favorites" >
                        <ThumbUpIcon />
                    </IconButton>
                    <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
                        {data.likes}
                    </Typography>
                </Stack>
            </CardActions>
            {/* {data.tags.map((index) => {
       return console.log(index)
      })}  */}
        </Card>
    );
}

export default PostDetails;