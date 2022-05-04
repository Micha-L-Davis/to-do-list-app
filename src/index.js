import React from 'react';
import { createRoot } from 'react-dom/client';
import SettingsProvider from './context/settings.js';

import App from './app.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <SettingsProvider>
    <App />
  </SettingsProvider>
);
