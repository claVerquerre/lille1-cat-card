import React from 'react';
import Home from '../home/Home';
import Form from '../form/Form';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
    render() {
        var date = new Date().getFullYear();
        return (
            <Router>
                <main>
                    <header className="bg-primary">
                        <h1 className="text-white text-center p-3">Cat card app</h1>
                    </header>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/form" component={Form}/>
                    <Route path="/form/:id" component={Form}/>

                    <footer className="bg-light">
                        <div className="container text-center">
                            <i className="far fa-copyright mr-1"></i><label> {date} - Lille 1 </label>
                            <span className="small font-italic infos"> No cat has been hurt during the development of this app. </span>
                        </div>
                    </footer>
                </main>
            </Router>  
        );
    }
}
export default App;