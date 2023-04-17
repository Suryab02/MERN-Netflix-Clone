import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./featured.scss";
function Featured({type}) {
  return (
    <div className='featured'>
     {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
   <img 
   src="https://images5.alphacoders.com/119/1192508.jpg"
   alt="" 

   />
   <div className='info'>
    <img 
    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
    alt=""
    />
    <span className="desc">
        loreum is moreum is moreum
        loreum is moreum is moreum
        loreum is moreum is moreum
    </span>
    <div className="buttons">
        <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
        </button>
    <button className="more">
        <InfoOutlinedIcon />
        <span>Info</span>
    </button>
    </div>
   </div>
     </div>
  )
}

export default Featured