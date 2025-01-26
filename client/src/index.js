import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';  // Import configureStore from Redux Toolkit
import reducers from './reducers';  // Import your combined reducers (or slices)
import App from './App';

// Set up the Redux store using configureStore
const store = configureStore({
  reducer: reducers,  // This should be your root reducer that combines your app's reducers
  // Middleware is handled automatically by Redux Toolkit, but you can customize if needed.
});

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);