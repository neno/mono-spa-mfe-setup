import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors['neutral']};
  color: ${props => props.theme.colors['base-100']};
  border: none;
  border-radius: 0.25rem;
  height: 2rem;
  width: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default StyledButton;
