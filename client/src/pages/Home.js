// @ts-nocheck
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Search } from 'styled-icons/fa-solid';
import Dishes from '../components/dishes/Dishes';
import DishForm, { StyledInput } from '../components/dishes/DishForm';
import useToggle from '../hooks/useToggle';
import { DishContext } from '../context/dishes/dish.state';

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
    left: 0;
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
  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;
  }
`;
const HomePage = () => {
  const { searchDish, clearFilter } = React.useContext(DishContext);
  const [showSearch, toggleFn] = useToggle(false);
  const text = useRef('');

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
          Search for your Dish <br />
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
HomeWrapper.propTypes = {
  showSearch: PropTypes.bool,
};

export default HomePage;
