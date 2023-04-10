import styled from 'styled-components';

export const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 2rem;
`;

export default StyledGallery;
