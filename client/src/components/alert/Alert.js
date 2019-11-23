import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Info } from 'styled-icons/fa-solid';
import { AlertContext } from '../../context/alert/alert.state';

const StyledAlert = styled.section`
  padding: 1rem;
  .alert-warning {
    background: ${({ theme }) => theme.primaryColor};
    padding: 0.4rem;
    transition: ${props => props.theme.mainTransition};
    box-shadow: ${props => props.theme.lightShadow};
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    h4 {
      display: block;
    }
  }
`;

const Alert = () => {
  const { alerts } = useContext(AlertContext);

  return (
    <>
      <StyledAlert>
        {alerts.length > 0 &&
          alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
              {' '}
              <span>
                <Info size="35" />
              </span>{' '}
              <h4>{alert.msg}</h4>
            </div>
          ))}
      </StyledAlert>
    </>
  );
};

Alert.propTypes = {};

export default Alert;
