import { Component } from 'react';
import { Container } from '@material-ui/core';  

import TitleBar from './layout/TitleBar';
import HomeView from './view/Home';

class App extends Component {

    render() { 
        return (
            <div>
                <TitleBar appName = "React App" />
                <br/><br/>
                <Container>
                    <HomeView/>
                </Container>
            </div>
        );  
    }
}

export default App;
