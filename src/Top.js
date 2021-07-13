import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import App from './App';
import OwnerInformation from './pages/OwnerInformation';


const Top = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/ownerinformation" component={OwnerInformation} />
                </Switch>
            </Router>
        </div>
    )
}

export default Top
