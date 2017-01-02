import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ( props ) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  })

  return (
    // makes a column that has width 4
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
