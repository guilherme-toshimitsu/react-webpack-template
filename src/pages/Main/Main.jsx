import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Routes from '@components/Routes';
import routes from '@routes';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes routes={routes} />
    </BrowserRouter>
  )
}

export default Main
