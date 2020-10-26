import React from 'react';
import './App.css';
import {
    Route,
    Switch
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fakeInterests, fakeSkills } from "../dummy-data";
import Home from './Home';
import Interest from './Interest';
import Interests from './Interests';
import Login from './Login';
import NavigationBar from '../components/NavigationBar';
import Skill from './Skill';
import Skills from './Skills';
import { Helmet } from 'react-helmet';
import { addInterest, addSkill } from '../action-creators';

const ARTIFICIAL_LATENCY_MS = 500;

export default function App() {
    const userName = useSelector(
        state => state.user.get('userName'),
        (left, right) => left.user.get('userName') === right.user.get('userName')
    );
    const dispatch = useDispatch();

    React.useEffect(
        () => {
            async function fetchData() {
                // Simulate making an asynchronous request to the server.
                await new Promise((resolve) => setTimeout(resolve, ARTIFICIAL_LATENCY_MS));

                for (const interest of fakeInterests) {
                    dispatch(addInterest(
                        interest.id,
                        interest.name,
                        interest.type,
                        interest.current,
                        interest.detail
                    ));
                }

                for (const skill of fakeSkills) {
                    dispatch(addSkill(
                        skill.id,
                        skill.name,
                        skill.type,
                        skill.DateLearned,
                        skill.detail
                    ));
                }
            }

            fetchData();
            
        },
        [ dispatch, userName ]
    );


    if (!userName) {
        return (
            <div className="App">
                <Helmet>
                    
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans&amp;display=swap" type="text/css" rel="stylesheet" />
                    <link href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css" type="text/css" rel="stylesheet" />
                </Helmet>

                <div className='App-vertical-spacer' />
                
                <Login />
            </div>
        );
    }

    return (
        <div className="App">
            <Helmet>
                
                <link href="https://fonts.googleapis.com/css?family=Open+Sans&amp;display=swap" type="text/css" rel="stylesheet" />
                <link href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css" type="text/css" rel="stylesheet" />
            </Helmet>
            <NavigationBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/interests">
                    <Interests />
                </Route>
                <Route exact path="/skills">
                    <Skills />
                </Route>
                <Route path="/interest/:id">
                    <Interest />
                </Route>
                <Route path="/skill/:id">
                    <Skill />
                </Route>
            </Switch>
        </div>
    );
}
