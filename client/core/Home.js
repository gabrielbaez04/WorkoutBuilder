import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {getAdvices} from '../assets/advices-data'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  justify:{
    justifyContent: 'center'
  }
});

const Home = withStyles(styles)((props) => {
  const { classes } = props;
  const cards = getAdvices(65);
  return (
    <React.Fragment>
      <CssBaseline />
      {cards &&
        <div>
          <main>
            <div className={classNames(classes.layout, classes.cardGrid)}>
              <Grid container spacing={40} className={classes.justify}>
                {cards.map((card, index) => (
                  <Grid item key={index} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={require('../assets/images/advices/advice'+card.imageId+'.jpg')}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="headline" component="h2">
                          {card.title}
                        </Typography>
                        <Typography>
                          {card.body}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="title" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" component="p">
              Something here to give the footer a purpose!
            </Typography>
          </footer>
          {/* End footer */}
        </div>
      }
      </React.Fragment>
    );
  }
)

export default Home;