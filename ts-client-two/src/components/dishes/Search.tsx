import * as React from 'react';
import styled from 'styled-components';
import { StyledInput } from './DishForm';
import { DishContext } from '../../context/dishes/dish.state';
import useToggle from '../../hooks/useToggle';
import { fadeDown, expand } from '../../utils/animation';

interface Props {

}
interface SearchProps {
  search: boolean;
}
const SearchWrapper = styled.section`
  padding: .1rem;
  .close{
    font-size: 1.3rem;
    font-weight: 700;
    margin-left: 1.5rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.quickTransition};
    padding: .6rem;
    &:hover{
      color: ${({ theme }) => theme.colors.primaryColor};
      background: ${({ theme }) => theme.colors.blackShadow};
    }
  }
`;
const StyledSearch = styled(StyledInput)<SearchProps>`
  margin: 1.5rem 0;
  /* width: 4%; */
  /* width: ${({ search }) => search && '70%'}; */
  transition: ${({ theme }) => theme.transition.mainTransition};
  animation: ${expand} 300ms ease-in;
  &:focus{
    width: 92%;
  }
`;

const StyledBox = styled.div<SearchProps>`
  display: ${({ search }) => (search ? 'none' : 'flex')};
  padding: 1rem;
  width: 6rem;
  height: 6rem;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  text-align: center;
  justify-content:center;
  align-items:center;
  cursor: pointer;
  letter-spacing: .1rem;
  font-size: 1.3rem;
  transition: ${({ theme }) => theme.transition.mainTransition};
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  position: relative;
  &:hover{
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
  }
`;
const Search: React.FC<Props> = () => {
  const {} = React.useContext(DishContext);
  const [showSearch, toggleSearch] = useToggle(false);
  return (
    <SearchWrapper>
      <StyledBox onClick={toggleSearch} search={showSearch}>
        <small>Search</small>
      </StyledBox>
      {
        showSearch && (
          <>
            <StyledSearch type="text" search={showSearch} />
            <span className="close" onClick={toggleSearch}>Close</span>
          </>
        )
      }

    </SearchWrapper>
  );
};
export default Search;
