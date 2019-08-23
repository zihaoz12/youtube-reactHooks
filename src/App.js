import React,{useState} from 'react';
import {Grid} from "@material-ui/core";
import SearchBar from './Components/SearchBar';
import VideoDetail from './Components/VideoDetail';


import youtube from './API/youtube';
import VideoList from './Components/VideoList';


const  App=()=> {
  const [videos, setVideos] = useState([]);
  const [selectedVideo,setSelectedVideo] = useState(null);

  const handleSubmit = async(searchTerm)=>{
    const {data:{items:videos}} = await youtube.get("search",{
      params:{
        part:"snippet",
        maxResults:5,
        key:'AIzaSyAYRDGrpVPQLUIpR2S_aNLgZyH_43kaoQM',
        q:searchTerm
      }
    });
    console.log(videos);
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  return (
    
      <Grid  container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
                <SearchBar onSubmit={handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
                <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    
  );
}

export default App;
