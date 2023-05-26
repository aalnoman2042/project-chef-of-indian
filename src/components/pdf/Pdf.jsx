import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Pdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return (
        <div>
               <div>
      <Document file="../../../public/PLC programming .pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
        hgsdhks
      </Document>
      
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
        </div>
    );
};

export default Pdf;