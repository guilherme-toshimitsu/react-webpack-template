import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Home = ({ history }) => {
  const classes = useStyles();
  return (
    <div className>
      Hello First Test
      <button
        data-testid={'go-to-seller'}
        onClick={() => history.push('/seller')}
        color="primary"
        variant="contained"
      >
        GoToSeller
      </button>
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
