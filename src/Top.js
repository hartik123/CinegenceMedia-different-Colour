import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import App from './App';
import OwnerInformation from './pages/OwnerInformation';
import ReelInformation from './pages/ReelInformation';


const Top = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/ownerinformation" component={OwnerInformation} />
                    <Route path="/reels/:_id" component={ReelInformation} />
                </Switch>
            </Router>
        </div>
    )
}

export default Top
