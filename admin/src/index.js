import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {AuthContextProvider}  from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import {UserContextProvider} from './context/userContext/UserContext';
import {WorkloadContextProvider} from './context/workloadContext/WorkloadContext';
import {ResearchContextProvider} from './context/researchContext/ResearchContext'


//Rn the AuthContextProvider is working as it is giving output in the console but the App is not working as it is not going to the concerned function ass the console.log for the childern is giving no output.
console.log(UserContextProvider)
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <UserContextProvider>
          <WorkloadContextProvider>
            <ResearchContextProvider>
              <App />
            </ResearchContextProvider>
          </WorkloadContextProvider>
        </UserContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//console.log(AuthContextProvider)
