import React,{useState,useEffect} from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import "../SCSS/styles.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Dashboard() {
  const classes = useStyles();
  const [DATA,setdata] = useState([]);
      useEffect(async()=>{
                    const data = await axios.get('http://localhost:8000/plant/5fb7bf0954144904089c2935');
                    setdata(data.data);
                    console.log(data.data);
                }
                , []);
              
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{
                                backgroundColor: "green",
                                position: "fixed",
                                width: "100%"
                            }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          GreenOplants
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <div className={classes.heroContent}>
                          <img  
                          className="dashboard-image"
                                src= "https://images.unsplash.com/photo-1600260449496-363800c0511b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                            /></div>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom   style={{fontSize: "2.8rem"
                                    }}>
            Buy Your Plant here at best price!!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Now a days everyone need some fresh air in such an environment.so,hurry up and fill your cart with fresh air.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                 <NavLink  to="/platform/GreenOplants"   style={{ textDecoration: "none"}}>
                  <Button variant="contained" color="primary">
                   Go to Platform
                  </Button>
                 </NavLink>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
/**  useLayoutEffect(() => {
                  function updateSize() {
                    console.log([window.innerWidth, window.innerHeight]);
                  }
                  window.addEventListener('resize', updateSize);
                  updateSize();
                  return () => window.removeEventListener('resize', updateSize);
                }, []); */