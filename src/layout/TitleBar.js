import { Component } from 'react';

import { 
	AppBar, 
	Toolbar, 
	IconButton,
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import './TitleBar.css';


class TitleBar extends Component {

	constructor() {
		super();
		this.state = {
			leftMenu: false
		};
	}

	render() {

		const toggleDrawer = (open) => (event) => {
			if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			  return;
			}

			this.setState({ leftMenu: open });
		};

		return (
			<div>
				<AppBar position="fixed">  
	                <Toolbar>
						<IconButton onClick={toggleDrawer(true)} edge="start" className="menuButton" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">
							{ this.props.appName }
						</Typography>
	                </Toolbar>  
	            </AppBar>

				<Drawer anchor='left' open={ this.state.leftMenu } onClose={toggleDrawer(false)} >
					<div role="presentation" className="leftMenu" onClick={toggleDrawer(false)}  onKeyDown={toggleDrawer(false)}>
						<List>
							<ListItem button key="Home">
						    	<ListItemIcon>
						    		<InboxIcon /> 
						    	</ListItemIcon>
						    	<ListItemText primary="Home" />
							</ListItem>
						</List>
						<Divider />
						<List>
							<ListItem button key="About">
						    	<ListItemIcon>
						    		<MailIcon />
						    	</ListItemIcon>
						    	<ListItemText primary="About" />
							</ListItem>
						</List>
			    	</div>
				</Drawer>
			</div>
		);
	}
}

export default TitleBar;
