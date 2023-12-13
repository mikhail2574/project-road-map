import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'frontend/components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'frontend/styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/project-road-map">
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </BrowserRouter>
);
