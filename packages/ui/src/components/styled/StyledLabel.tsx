import styled from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  border: 1px solid ${props => props.theme.colors.neutral};
  border-radius: 0.25rem;

  input {
    border: none;
    background: none;
  }
`;
