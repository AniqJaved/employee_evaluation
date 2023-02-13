import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from '../src/context/userContext/UserContext';
import { AuthContextProvider } from '../src/context/authContext/AuthContext';
import { CourseContextProvider } from '../src/context/courseContext/CourseContext';
import { WorkloadContextProvider } from '../src/context/workloadContext/WorkloadContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <AuthContextProvider>
        <CourseContextProvider>
          <WorkloadContextProvider>
            <App />
          </WorkloadContextProvider>
        </CourseContextProvider>
      </AuthContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
