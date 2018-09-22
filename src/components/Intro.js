import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Plugs from './Plugs';

const styles = {
  card: {
    margin: '20px auto',
    maxWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
};

function Intro(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Hello
        </Typography>
        <Typography component="p">
          I'm Tanner, a software engineer from Los Angeles. I like to build apps using cutting edge technologies and am always seeking new opportunities to learn.
        </Typography>
      </CardContent>
      <CardActions>
        <Plugs />
      </CardActions>
    </Card>
  );
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);
