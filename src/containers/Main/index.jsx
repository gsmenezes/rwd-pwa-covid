import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../services/api';
import Board from './smartComponents/Board/index';
import Panel from './smartComponents/Panel/index';

import { Container } from './style';

function Main() {

  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  const updateAt = new Date().toLocaleString();

  const getSarsData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, []);

  useEffect(() => {
    getSarsData(country)
  }, [getSarsData, country]);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  }


  return (
    <Container>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getSarsData={getSarsData}
        />
        <Board data={data} />
      </div>
    </Container>
  )
}

export default memo(Main);
