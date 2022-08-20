import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pdf from '../resources/ChaceBrumleyResume.pdf'

const Resume = (): JSX.Element => {
  const [numPages, setNumPages] = useState(1)

  function onDocumentLoadSuccess ({ numPages }: any) {
    setNumPages(numPages)
  }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={numPages} />
      </Document>
    </div>
  )
}

export default Resume
