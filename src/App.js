import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TitleBar from './Components/TitleBar';
import HomeView from './Views/Home';
import AboutView from './Views/About';

class App extends Component {

    render() { 
        return (
            <BrowserRouter>
                <TitleBar appName="React UI" />
                <Switch>
                    <Route path="/" exact component={HomeView} />
                    <Route path="/about" exact component={AboutView} />
                    <Route component={HomeView} />
                </Switch>
            </BrowserRouter>
        );  
    }
}

export default App;
