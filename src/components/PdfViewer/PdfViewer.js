import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./PdfViewer.css";
export default function PdfViewer({ url }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-wrapper">
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={numPages} />
      </Document>
    </div>
  );
}
