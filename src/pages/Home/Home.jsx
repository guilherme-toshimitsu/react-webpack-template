import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles, { name: 'Home' });

const Home = ({ history }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        Hello First Test
        <Button data-testid={'go-to-seller'} onClick={() => history.push('/seller')} color="primary" variant="contained">
        GoToSeller
      </Button>
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
