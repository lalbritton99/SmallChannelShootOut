import React, {useState} from 'react';
import './video.scss';
import { Button } from "react-bootstrap";
import {BiStar} from "react-icons/bi";

const VideoDetail = ({ video }) => {
  const [count, setCount] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  if (!video) {
    return <div className="landingPage">
        <h1>Welcome to Small Channel Shootout!</h1>
        <h2>Begin exploring by searching for your favorite videos above.</h2>
        <br/>
        <div className="landingPageParagraph">
            <h5>
                Any content you search for will have been created by a "small creator". After creating an account, you'll be able to
                vote on your favorite videos each week and see the results of that vote at our Best Choice page.
            </h5>
        </div>
        <h2>See your videos below.</h2>

    </div>;
  }

  var votes = 0;

  const likeVideo = (votes) => {
      console.log("Votes Before: " + votes);
      votes+=1;
      console.log("Votes After: " + votes);

      //(isVisible) ?(votes -= 1):(votes += 1);
      /* (isVisible) ? setCount(count - 1): setCount(count + 1); */
      //setIsVisible(!isVisible);
  };

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  const dateString = video.snippet.publishedAt;
  const year = dateString.slice(0,4);
  const month = dateString.slice(5,7);
  const day = dateString.slice(8,10);

  return (
    <div className="jumbotron">
        <div className="jumbotron-video">
            <iframe src={videoSrc} className="jumbotron-video" allowFullScreen title="Video player" />
        </div>

        <div className="jumbotron-header">
            <h2>{video.snippet.title}</h2>
            <h5>{video.snippet.channelTitle}  |  {year}-{month}-{day}</h5>
            <p>{video.snippet.description}</p>

            {/* Star Button */}
            <Button className="star-btn" variant="" onClick={() => likeVideo(votes) }>
              <BiStar className="star" color="gold" size= "3em"  />
            </Button>

            {/* Vote Count */}
            <div className='numVotes'>
              <h2>{votes}</h2>
            </div>
        </div>
    </div>
  );
};

export default VideoDetail;