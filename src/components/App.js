import React from 'react';
import './App.css';
import {
    Route,
    Switch
} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { fakeInterests, fakeSkills } from "../dummy-data";
import Home from './Home';
import Interests from './Interests';
import Login from './Login';
import NavigationBar from './NavigationBar';
import Skills from './Skills';
import { Helmet } from 'react-helmet'

function App() {
    console.log('test return', fakeInterests);
    console.log('test return', fakeSkills);

    // TODO: Remove equality func after converting store to ImmutableJS.
    const userName = useSelector(state => state.user.userName, (left, right) => left.user.userName === right.user.userName);
    console.log(`userName: ${userName}`)

    /*
    if (!userName) {
        return (
            <div className="App">
                <Helmet>
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet" />
                </Helmet>
                <Login />
            </div>
        );
    }
    */

    return (
        <div className="App">
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&amp;display=swap" type="text/css" rel="stylesheet" />
                <link href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css" type="text/css" rel="stylesheet" />
            </Helmet>
            <NavigationBar />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/interests">
                    <Interests />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
            </Switch>
        </div>
    )

    
}

export default App;
