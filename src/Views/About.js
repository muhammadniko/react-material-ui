import { Component } from 'react';
import { TextField, Button, Typography, Grid, Container, Card, CardActions, CardContent } from '@material-ui/core';
import './About.css';

class About extends Component {
	
	render () {
		return (
			<div>
				<Container class="section1">
					<Card>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Word of the Day
							</Typography>
							<Typography variant="h5" component="h2">
								OKE
							</Typography>
							<Typography color="textSecondary">
								adjective
							</Typography>
							<Typography variant="body2" component="p">
								well meaning and kindly.
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Container>
			</div>
		);
	}
}

export default About;
