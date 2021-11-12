import './App.css';
import react from "./react.jpg"
import video from "./video.mp4"

function App() {
  return (
    <div style={{border:'solid 1px black',maxWidth:'500vw'}} >
<div>
    <h1 className ="title-red">Makni Skander</h1>
    </div>
    <img style={{marginBottom:200,marginLeft:480}} src={react} alt ="react" />
   
    <img style={{marginLeft:-250}}src="/node.jpg" alt ="node"/>
   
   
   <video  git  width="320" height="240" controls>
   
    <source  src={video}  type="video/mp4" />
   
   </video>
   </div>
  )
}

export default App;
