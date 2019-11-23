import styled from 'styled-components';

export const StyledBtn = styled.button`
  padding: 0.4rem 0.9rem;
  background-image: linear-gradient(to right, #23aa8f 50%, #fafa6e 50%);
  background-position: 0;
  background-size: 200%;
  transition: all 0.4s;
  cursor: pointer;

  transition: ${props => props.theme.mainTransition};
  border: 2px solid ${({ theme }) => theme.black};
  width: 10rem;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  margin: 0.6rem 0;
  position: relative;
  border-radius: 0.4rem;
  box-shadow: ${props => props.theme.lightShadow};
  &:hover {
    background-position: -100%;
    box-shadow: ${props => props.theme.darkShadow};
  }
`;
