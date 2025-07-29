import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ backgroundColor: '#000', color: '#0ff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h1>SexIdler Clone - Dark Neon Style</h1>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);