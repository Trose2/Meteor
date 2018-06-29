import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import PostView from '/imports/ui/pages/Posts/PostView'; 
const App = props =>
    <BrowserRouter>
        <Router />
    </BrowserRouter>;

ReactDOM.render(
    <App />,
    //<PostView />,
    document.getElementById("app")
    //document.getElementById("PostView")
);
