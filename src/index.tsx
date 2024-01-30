import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/app';

const div = document.getElementById('root');

if (!div) throw new Error('The root element does not exist in the html document');

const root = ReactDOM.createRoot(div);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
