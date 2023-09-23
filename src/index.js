import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PreferencesPage from './pages/PreferencesPage/PreferencesPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />
  },
  {
    path: '/articles',
    element: <ArticlePage />
  },
  {
    path: '/preferences',
    element: <PreferencesPage />
  },
  {
    path: '/',
    element: <App />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
