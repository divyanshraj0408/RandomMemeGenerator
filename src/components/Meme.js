import React from "react"
import memesData from "../memesData.js";

function Meme() {
  const [memeImage, setMemeImage] = React.useState("")
  function getMemeImage() {
    // const memeImageEl = document.getElementById("memeImage");
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url)
    // const url = memesArray[randomNumber].url;
   
    // memeImageEl.innerHTML = `<img src="${memesArray[randomNumber].url}" alt="" class="memeImage" />`;
    
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
          Generate meme 🖼️
        </button>
      </div>

      <div id="memeImage" className="memeImage--div">
      <img src={memeImage} alt="" className="memeImage"/>
      </div>
    </main>
  );
}
export default Meme;