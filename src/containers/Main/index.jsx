import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../services/api';

import {Container} from './style';

function Main() {

  const [data, setData] =useState({});
  const [country, setCountry] = useState('brazil');

  const getSarsData = useCallback((country) => {
    Api.getCountry(country)
    .then(data => setData(data))
  }, []);

  useEffect(() => {
    getSarsData(country)
  }, [getSarsData, country]);


  return (
  <Container>
    <div className="mb-2">


    </div>
  </Container>
  )
}

export default memo(Main);
