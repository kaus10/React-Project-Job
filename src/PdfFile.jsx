import React from 'react'
import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
// import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const PdfFile = () => {
  const [numPages, setNumPage ] = useState(null);
  const [pageNumber,setPageNumber] = useState(1);

  function onDocumenntLoadSuccess({numPages}){
    setNumPage(numPages);
    setPageNumber(1);
  }

  

  return (
    <>
    <button><Link to="/" >Go to home</Link></button>
    <center>
        <div>
          <Document file="/PDF.pdf" onLoadSuccess={onDocumenntLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
        </div>
      </center>
      
      </>
  )
}

export default PdfFile