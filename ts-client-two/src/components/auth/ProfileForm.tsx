import * as React from 'react';
import styled from 'styled-components';
import { StyledForm, FormGroup, StyledInput } from '../dishes/DishForm';
import BtnPrimary from '../styled/Button';

interface Props {

}

const ProfileFormStyled = styled.section`
  max-width: 60rem;
  margin: 1rem auto;
  padding: 1rem 1.7rem;
  button{
    margin-left: 2%;
  }
`;

const ProfileForm: React.FC<Props> = () => (
  <ProfileFormStyled>
    <StyledForm>
      <h1>ProfileForm</h1>
      <FormGroup>
        <StyledInput type="text" placeholder="first Name" />
      </FormGroup>
      <FormGroup>
        <StyledInput type="text" placeholder="last Name" />
      </FormGroup>
      <FormGroup>
        <StyledInput type="email" placeholder="email" />
      </FormGroup>
      <FormGroup>
        <StyledInput type="password" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <StyledInput type="password" placeholder="repeat password" />
      </FormGroup>
      <FormGroup>
        <StyledInput type="file" placeholder="repeat password" accept="image/*" />
      </FormGroup>
    </StyledForm>
    <FormGroup>
      <BtnPrimary>Update</BtnPrimary>
    </FormGroup>
  </ProfileFormStyled>
);
export default ProfileForm;
