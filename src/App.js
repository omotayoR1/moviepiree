import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Boxalltime from './Boxalltime';
import Boxoffice from './Boxoffice';
import Comingsoon from './Comingsoon';
import Intheater from './Intheater';
import Mpm from './Mpm';
import Searchbox from './Searchbox';
import Sidebar from './Sidebar';
import Top250 from './Top250';
import Top250tv from './Top250tv';
import './App.css';

const App = () => {
    return ( 
        <Router>
            <div className="app">
                <div className="wholecontainer">
                    <Sidebar/>
                    <div className="seconditem">
                        <Searchbox/>
                        <Switch>
                            <div className="grid">
                                <Route exact path="/"><Top250/></Route>
                                <Route path="/Top250tv"><Top250tv/></Route>
                                <Route path="/Mpm"><Mpm/></Route>
                                <Route path="/Intheather"><Intheater/></Route>
                                <Route path="/Comingsoon"><Comingsoon/></Route>
                                <Route path="/Boxoffice"><Boxoffice/></Route>
                                <Route path="/Boxalltime"><Boxalltime/></Route>
                            </div>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
     );
}
 
export default App;