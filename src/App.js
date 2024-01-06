import React, { useEffect} from 'react';
import './App.css';
import EasterEgg from './EasterEgg.js';
import Initiate from "./Initiate";

function App() {


  const pocon = [
    'https://imgur.com/FTtnATx.jpg',
    'https://imgur.com/8J25pgS.jpg',
    'https://imgur.com/igVM1gn.jpg',
    'https://imgur.com/ER24YX8.jpg',
    'https://imgur.com/2oY00WO.jpg',
    'https://imgur.com/QfKbufg.jpg',
    'https://imgur.com/nr6ylLR.jpg',
    'https://imgur.com/5Sbguu7.jpg',
    'https://imgur.com/qWEaPDB.jpg',
    'https://imgur.com/dgx7TfV.jpg',
    'https://imgur.com/joj3pW5.jpg',
    'https://imgur.com/4la5r9F.jpg',
    'https://imgur.com/TQWgv5w.jpg',
    'https://imgur.com/IFC7Ocg.jpg',
    'https://imgur.com/z0Ygrjt.jpg',
    'https://imgur.com/QQOpb5I.jpg',
    'https://imgur.com/8C2O903.jpg',
    'https://imgur.com/1aHc6RD.jpg',
    'https://imgur.com/RpQCEgz.jpg',
    'https://imgur.com/jAASi7t.jpg',
    'https://imgur.com/SkQEacM.jpg',
    'https://imgur.com/YfbaUKR.jpg',
    'https://imgur.com/BbcR8Qw.jpg',
    'https://imgur.com/Sa80sq2.jpg',
    'https://imgur.com/LoMkHzS.jpg',
    'https://imgur.com/Lom5yXJ.jpg',
    'https://imgur.com/V3r7ihV.jpg',
    'https://imgur.com/t63AdTg.jpg',
  ]; 
 
  useEffect(() => {
  }, []);

  return (
      <div>
        <Initiate/>

        <div className="main-div">
          <h1>LLANOS IGAT</h1>
          <h2>LLANOS KATOL</h2>
        </div>

        <div className="blank">
          <EasterEgg gifUrl="https://imgur.com/fw8xw8F.gif" />
        </div>

        <div className="pocon-container">
          <h2 className="pocon-title">pics sa imo labidabs </h2>

          <div className="fadein">
            {pocon.map((item, index) => (
                // Check if the item ends with .mp4 to determine if it's a video
                item.endsWith('.mp4') ? (
                    <video className="pocon" controls autoPlay loop key={index}>
                      <source src={item} type="video/mp4" />
                      your browser does not support the video tag
                    </video>
                ) : (
                    <img className="pocon" src={item} alt={`pocon ${index}`} />
                )
            ))}
          </div>
        </div>

        <footer>shet bogo confess na</footer>
        <a className="messenger" href="https://www.messenger.com/t/100066359865553" target="_blank" rel="noreferrer">
          Click Me
        </a>

      {}
      
    </div>
  );
}

export default App;