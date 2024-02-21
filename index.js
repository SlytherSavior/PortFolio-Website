import { createRoot } from 'react-dom/client';

document.body.innterHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render( '<h1>  TEST REACT </h1>' );