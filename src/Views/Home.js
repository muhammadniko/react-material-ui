import { Component } from 'react';
import { TextField, Button, Typography, Grid, Container, Card, CardContent } from '@material-ui/core';
import './Home.css';

class Home extends Component {
	
	render () {
		return (
			<div>
				<Container className="section1" maxWidth="false">
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid className="logo" item md={2} xs={12}>
							<img src="./assets/images/logo.png" alt="logo" />
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
							<div class="section-bottom">
								<Typography variant="body2">
									A quick word from our sponsors: <br/>
									<a href="https://muhammadniko.web.id/">Bitsrc — The fastest way to share code</a>
								</Typography>
							</div>
						</Grid>
					</Grid>
			    </Container>
			    <Container className="section2" maxWidth="false">
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid className="logo" item md={4} xs={12}>
							<Typography className="heading" variant="h2">Create your own !</Typography>
						</Grid>
						<Grid item md={4} xs={12}>
							<Card>
								<CardContent>
								<form noValidate autoComplete="off">
									<TextField className="text-box" fullWidth="true" label="Nama" variant="outlined" />
									<TextField className="text-box" fullWidth="true" label="Email" variant="outlined" />
									<Button variant="outlined" color="primary" fullWidth="true">Sign Up</Button>
								</form>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12}>
							<div class="section-bottom">
								
							</div>
						</Grid>
					</Grid>
			    </Container>
			</div>
		);
	}
}

export default Home;
