import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import seashellImg from './../assets/images/seashell.jpg'

const styles = theme => ({
  card: {
    maxWidth: '90%',
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})

const Home = (props)=> {
    const {classes} = props
    return (
        <Card className={classes.card}>
          <Typography variant="display1" className={classes.title}>
            Home Page
          </Typography>
          <CardMedia className={classes.media} image={seashellImg} title="Unicorn Shells"/>
          <CardContent>
            <Typography>
              Welcome to the MERN Skeleton home page.
            </Typography>
          </CardContent>
        </Card>
    )
}


export default withStyles(styles)(Home)
