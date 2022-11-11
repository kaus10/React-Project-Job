import React from "react";
import PdfFile from "./PdfFile";
import { Link } from "react-router-dom";
// import Video from "./Video";
// import Video2 from "./Video2";

const Home = () => {

    function handleClick(){
            window.open('/PDF.pdf','_blank');
    }

    
    

  return (
    <>
    <div className="d-flex justify-content-center d-grid gap-2 mt-3">
    <Link to="PdfFile">
            <button className="btn btn-primary ">Go to Pdf</button>
        </Link>
        
        <Link to="video"><button className="btn btn-secondary">Go to Video</button></Link>
        <Link to="image"><button className="btn btn-warning">Go to Image</button></Link>
    </div>
        
        
        

    
        
    </>
  )
}

export default Home