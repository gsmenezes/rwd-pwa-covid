import React, {memo} from 'react';
import {Card as CardUI} from '../../../../components';
import {Label, Value, CardContents} from '../style';

function Cards({value, label, color}) {
  return (
    <CardUI>
      <CardContents color={color}>
        <Value>{value}</Value>
        <Label>{label}</Label>
      </CardContents>
    </CardUI>
  )
}

export default memo(Cards);
