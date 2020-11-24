import { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, AccountCircle, Notifications } from '@material-ui/icons';

class BottomMenu extends Component {
	render () {

		 const stickToBottom = {
            width: '100%',
            position: 'fixed',
            bottom: 0
        };

		return (
			<BottomNavigation style={stickToBottom}>
                <BottomNavigationAction label="Recents" icon={<Home/>} />
                <BottomNavigationAction label="Favorites" icon={<AccountCircle/>} />
                <BottomNavigationAction label="Nearby" icon={<Notifications/>} />
            </BottomNavigation>
		);
	}
}

export default BottomMenu;
