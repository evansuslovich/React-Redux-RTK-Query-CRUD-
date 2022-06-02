import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// context provider 
// we need to provide our slice to this app 

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice";

// wrapping App in the ApiProvider
// passing in the api 
ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            
            <ApiProvider api = {apiSlice}>
                <App />
            </ApiProvider>
        </React.StrictMode>
    );