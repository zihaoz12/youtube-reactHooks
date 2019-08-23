import React from 'react';
import {Grid, Paper,Typography} from '@material-ui/core';

const VideoItem = ({video,onVideoSelect})=>{
    return(
        <Grid item xs={12} >
            <Paper onClick={()=>onVideoSelect(video)} style={{display:"flex", alignItems:"center", cursor:"pointer"}} key={video.id.videoId}>
                <img src={video.snippet.thumbnails.medium.url} style={{marginRight:"20px"}} alt="thumbnail"/>
                <Typography variant="subtitle1">
                    <b>{video.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;