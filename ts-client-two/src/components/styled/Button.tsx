import styled from 'styled-components';

const BtnPrimary = styled.button`
    padding: 0.4rem 0.9rem;
  background-image: linear-gradient(to right, #222 50%, #D9CB9E 50%);
  background-position: 0;
  background-size: 200%;
  transition: all 0.4s;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.mainTransition};
  border: 2px solid ${({ theme }) => theme.colors.black};
  width: 10rem;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  margin: 0.6rem 0;
  position: relative;
  border-radius: 0.4rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  &:hover {
    background-position: -100%;
    color: ${({ theme }) => theme.colors.mainBlack};
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
  }
`;


export default BtnPrimary;
