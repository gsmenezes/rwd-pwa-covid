import React, { memo } from 'react';
import { Card, Typography, Select, MenuItem } from '../../../../components';
import Countries from '../../../../commons/constants/countries';
import { PanelContent, Item, Container } from '../style';

function Panel({ updateAt, onChange, country }) {

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <Item>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </Item>
    </MenuItem>
  );

  return (
    <Container>
      <Card>
        <PanelContent>
          <div className="block">
            <Typography variant="h5" component="span" color="primary">INFORMAÇÕES | CORONAVÍRUS</Typography>
            <div className="pt-2">
              <p>Selecione o país</p>
              <Select onChange={onChange} value={country}>
                {Countries.map(renderCountries)}
              </Select>
            </div>
          </div>
        </PanelContent>
            <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
      </Card>
    </Container>
  );
}

export default memo(Panel);
