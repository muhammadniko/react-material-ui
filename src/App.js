import { Component } from 'react';

import TitleBar from './Components/TitleBar';
import HomeView from './Views/Home';

class App extends Component {

    render() { 
        return (
            <div>
                <TitleBar appName = "React App" />
                <br/><br/>
                <HomeView/>
            </div>
        );  
    }
}

export default App;
