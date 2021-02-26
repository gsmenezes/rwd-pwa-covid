import styled from 'styled-components';
import {CardContent, Typography} from '../../../components';

export const Label = styled(Typography) `
font-weight: 500;
font-size: 1.5rem;
`;

export const Value = styled(Typography)`
font-weight: 400;
font-size: 2.5rem;
`;

export const CardContents = styled(CardContent)`
border-left: 8px solid ${({color}) => color || '#5D78FF'};
`;

export const Container = styled.div`
width: 426px;
margin: 0 auto 30px;
text-align: center;
`;

export const PanelContent = styled(CardContent) `
display: flex;
justify-content: space-between;
padding: 25px;
margin-bottom:10px;

.block {
  text-align: center;
}
`;

export const Item = styled.div `
display: flex;
justify-content: space-between;
min-width: 150px;
`;


