import styled, { keyframes } from 'styled-components';
import React from 'react';

export const spin = keyframes`
to {
  transform: rotate(360deg);
}
`;
export const spin3D = keyframes`
  from {
    transform: rotate3d(.5,.5,.5, 360deg);
  }
  to{
    transform: rotate3d(0deg);
  }
`;

export const SpinnerStyled = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  .border-1 {
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63, 249, 220);
    background: linear-gradient(
      0deg,
      rgba(63, 249, 220, 0.1) 33%,
      rgba(63, 249, 220, 1) 100%
    );
    animation: ${spin3D} 1.8s linear 0s infinite;
    .core {
      width: 100%;
      height: 100%;
      background-color: #37474faa;
      border-radius: 50%;
    }
  }
  .border-2 {
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(63, 249, 220);
    background: linear-gradient(
      0deg,
      rgba(255, 171, 145, 0.1) 33%,
      rgba(255, 171, 145, 1) 100%
    );
    animation: ${spin3D} 2.2s linear 0s infinite;
    .core-2 {
      width: 100%;
      height: 100%;
      background-color: #ffab91aa;
      border-radius: 50%;
    }
  }
`;

const Spinner = () => (
  <>
    <SpinnerStyled>
      <div className="border-1">
        <div className="core"></div>
      </div>
      <div className="border-2">
        <div className="core2"></div>
      </div>
    </SpinnerStyled>
  </>
);

export default Spinner;
