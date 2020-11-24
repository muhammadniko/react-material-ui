import { Component } from 'react';
import { Button, Typography, Grid, Container } from '@material-ui/core';
import './Home.css';

class Home extends Component {
	
	render () {
		return (
			<Container>
				<Grid className="section1" container direction="row" spacing="5" justify="center" alignItems="center">
					<Grid className="logo" item md={2} xs={12}>
			        	<img src={ './assets/images/logo.png' } alt="logo" />
			        </Grid>
			        <Grid item md={6} xs={12}>
			        	<Typography variant="h3" color="primary">
				    		ReactJS/M-ui
				  		</Typography>
				  		<Typography variant="h5" color="primary">
							Contoh project ReactJS yang dibuat menggunakan komponen dari Material UI
						</Typography>
						<br/><br/>
				        <Button variant="outlined" color="primary">Buat Sekarang</Button>
			        </Grid>
			        <Grid item xs={12}>
			        	 <div class="section1-bottom">
					        <Typography variant="body2">
					        	A quick word from our sponsors: <br/>
								<a href="https://muhammadniko.web.id/">Bitsrc — The fastest way to share code</a>
							</Typography>
						</div>
			        </Grid>
			    </Grid>
			</Container>
		);
	}
}

export default Home;
