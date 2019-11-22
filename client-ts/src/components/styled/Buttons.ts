/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { theme } from './GlobalStyles';

interface Props {
  width: string;
  top: string;
}

export const BtnPrimary = styled.button<Props>`
    text-shadow: 1px 1px 0 rgba(255,255,255,0.4);
    background-image: linear-gradient(to right, #26A69A 50%, #fff 50%);
  background-position: 0;
  background-size: 200%;
  padding: .5rem .9rem;
  border-radius: .4rem;
  border: 2px solid ${theme.dark};
  cursor: pointer;
  font-size: .9em;
  letter-spacing: .2em;
  box-shadow: ${theme.lightShadow};
  text-transform: capitalize;
  font-weight: 700;
  transition: ${theme.mainTransition};
  position: relative;
  &:hover{
    background-position: -100%;
  }
  &:active{
    width: ${(props) => (props.width ? props.width : null)};
    top: ${(props) => (props.top ? props.top : null)};
  }
`;
