import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  resume: {
    height: 'calc(100vh - 3.51px)',
    padding: '0px',
    margin: '0 auto',
    width: '100%',
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
