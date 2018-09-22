import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@mdi/react'
import { mdiEmail, mdiLinkedinBox, mdiGithubBox, mdiFileDocument } from '@mdi/js'


const styles = {
  plug: {
    cursor: 'pointer',
  },
  plugs: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
  },
};

function Plugs(props) {
  const { classes } = props;
  const plugColor = 'gray';
  const plugSize = 2;
  const plugs = [
    {
      plug: mdiFileDocument,
      tooltip: 'Resume',
      link: 'https://www.tannervelten.com/resume',
    },
    {
      plug: mdiLinkedinBox,
      tooltip: 'LinkedIn' ,
      link: 'https://www.linkedin.com/in/tannervelten/',
    },
    {
      plug: mdiGithubBox,
      tooltip: 'GitHub',
      link: 'https://github.com/tannervelten',
    },
    {
      plug: mdiEmail,
      tooltip: 'Email',
      link: 'mailto:tannervelten@gmail.com',
    },
  ];

  return (
    <div className={classes.plugs}>
      {plugs.map(({ plug, tooltip, link }) => (
        <div className={classes.plug} key={plug}>
          <Tooltip key={tooltip} title={tooltip}>
            <a href={link} target={"_blank"}>
              <Icon path={plug}
                size={plugSize}
                color={plugColor} />
            </a>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

Plugs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Plugs);
