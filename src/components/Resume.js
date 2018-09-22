import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  resume: {
    height: '100vh',
    width: '100vw',
  },
};

function Resume(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <embed className={classes.resume} src="/resume.pdf" type="application/pdf" />
    </React.Fragment>
  );
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);
