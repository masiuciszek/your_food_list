// @ts-nocheck
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Search } from 'styled-icons/fa-solid';
import Dishes from '../components/dishes/Dishes';
import DishForm, { StyledInput } from '../components/dishes/DishForm';
import useToggle from '../hooks/useToggle';
import { DishContext } from '../context/dishes/dish.state';
import { AuthContext } from '../context/auth/auth.state';

const HomePage = () => {
  const { searchDish, clearFilter, filteredDishes } = React.useContext(
    DishContext
  );

  const { loadUser } = React.useContext(AuthContext);
  const [showSearch, toggleFn] = useToggle(false);
  const text = useRef('');

  useEffect(() => {
    loadUser();
    if (filteredDishes === null) {
      text.current.value = '';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    if (text.current.value !== '') {
      searchDish(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <>
      <Center showSearch={showSearch}>
        <span className="icon" onClick={toggleFn}>
          <Search width="25" />{' '}
        </span>
        <StyledInput
          type="text"
          className="search"
          placeholder="search"
          onChange={handleChange}
          ref={text}
        />
        <HomeWrapper>
          <DishForm search={showSearch} closeSearchInput={toggleFn} />
          <Dishes />
        </HomeWrapper>
      </Center>
    </>
  );
};

HomePage.propTypes = {};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  margin: 2rem 0;
  flex-direction: column;
  position: relative;
  .search {
    margin: 1rem 0;
    width: ${({ showSearch }) => (showSearch ? '80%' : '1%')};
    position: ${({ showSearch }) => (!showSearch ? 'absolute' : 'static')};
    left: ${({ showSearch }) => !showSearch && 0};
    top: ${({ showSearch }) => !showSearch && '-2rem'};
    border-radius: ${({ showSearch }) => !showSearch && '40%'};
    visibility: ${({ showSearch }) => !showSearch && 'hidden'};
  }
  .icon {
    visibility: ${({ showSearch }) => showSearch && 'hidden'};
    position: absolute;
    left: -2rem;
    top: -0.8rem;
    z-index: 2;

    cursor: pointer;
  }
`;

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
  /* 1020 */
  @media (min-width: 1120px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;
  }
`;

HomeWrapper.propTypes = {
  showSearch: PropTypes.bool,
};
export default HomePage;
