import React, { memo } from 'react';
import { Grid, Skeleton } from '../../../../components';
import Cards from '../Card/index';

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data
  const getValue = (value) => value ? value : <Skeleton variant="text" width={160} height={50} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Cards value={getValue(cases)} label="Total de casos" color="#2c3877" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards value={getValue(todayDeaths)} label="Óbitos hoje" color="#464442" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards value={getValue(todayCases)} label="Casos hoje" color="#a13333" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards value={getValue(deaths)} label="Total de mortos" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Cards value={getValue(recovered)} label="Total de recuperados" color="#226e3b" />
      </Grid>
    </Grid>
  )
}

export default memo(Board);
