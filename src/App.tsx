import React from 'react';
import './App.css';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// @ts-ignore
import pdfSrc from "./assets/pdf/test.pdf";

function App() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
        <div
            style={{
              height: '100vh',
              width: '1120px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
        >
          <Viewer
              //fileUrl={`${process.env.PUBLIC_URL}/test.pdf`}
              fileUrl={pdfSrc}
              //fileUrl='https://github.com/Alexaltrex/pdf-viewer/files/9428266/test.pdf'
              plugins={[defaultLayoutPluginInstance]}
              theme='dark'
          />
        </div>
      </Worker>
  );
}

export default App;
